import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  MessageSquare,
  BookOpen,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Search,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Check
} from 'lucide-react';
import { questionsData } from './dataQuestions';
import { dialoguesData } from './dataDialogues';
import { phrasesData, exerciseInstructions } from './dataPhrases';
import { speakSpanish, stopSpeech } from './audioUtils';

type TabType = 'questions' | 'dialogues' | 'phrases' | 'guide';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('questions');
  const [searchQuery, setSearchQuery] = useState('');
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  // --- Questions State ---
  // Store which questions have revealed translation & options
  const [revealedQuestions, setRevealedQuestions] = useState<Record<number, boolean>>({});
  // Store which options have their Armenian translation revealed: key `${qId}-${optId}`
  const [revealedOptions, setRevealedOptions] = useState<Record<string, boolean>>({});
  // Store user's selected answers for questions
  const [selectedQuestionAnswers, setSelectedQuestionAnswers] = useState<Record<number, string>>({});

  // --- Dialogues State ---
  // Store which dialogues have translation revealed
  const [revealedDialogues, setRevealedDialogues] = useState<Record<number, boolean>>({});
  // Store individual lines revealed in dialogues: key `${dId}-${lineIdx}`
  const [revealedLines, setRevealedLines] = useState<Record<string, boolean>>({});

  // --- Phrases State ---
  // Store which phrases have translation revealed
  const [revealedPhrases, setRevealedPhrases] = useState<Record<number, boolean>>({});
  const [revealedPhraseOptions, setRevealedPhraseOptions] = useState<Record<string, boolean>>({});
  const [selectedPhraseAnswers, setSelectedPhraseAnswers] = useState<Record<number, string>>({});

  // Audio helper
  const handleSpeak = (text: string, id: string) => {
    if (playingAudioId === id) {
      stopSpeech();
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(id);
      speakSpanish(text, () => {
        setPlayingAudioId(null);
      });
    }
  };

  // Toggle question open/close translation & options
  const toggleQuestion = (id: number) => {
    setRevealedQuestions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Toggle all questions
  const toggleAllQuestions = (expand: boolean) => {
    const next: Record<number, boolean> = {};
    questionsData.forEach((q) => {
      next[q.id] = expand;
    });
    setRevealedQuestions(next);
  };

  // Toggle dialogue translation
  const toggleDialogue = (id: number) => {
    setRevealedDialogues((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Toggle all dialogues
  const toggleAllDialogues = (expand: boolean) => {
    const next: Record<number, boolean> = {};
    dialoguesData.forEach((d) => {
      next[d.id] = expand;
    });
    setRevealedDialogues(next);
  };

  // Toggle phrase translation
  const togglePhrase = (id: number) => {
    setRevealedPhrases((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filtered lists based on search query
  const filteredQuestions = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return questionsData;
    return questionsData.filter(
      (item) =>
        item.id.toString() === q ||
        item.es.toLowerCase().includes(q) ||
        item.hy.toLowerCase().includes(q) ||
        item.options.some((o) => o.es.toLowerCase().includes(q) || o.hy.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const filteredDialogues = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return dialoguesData;
    return dialoguesData.filter(
      (d) =>
        d.id.toString() === q ||
        d.titleEs.toLowerCase().includes(q) ||
        d.titleHy.toLowerCase().includes(q) ||
        d.lines.some((l) => l.es.toLowerCase().includes(q) || l.hy.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const filteredPhrases = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return phrasesData;
    return phrasesData.filter(
      (p) =>
        p.id.toString() === q ||
        p.textEs.toLowerCase().includes(q) ||
        p.textHy.toLowerCase().includes(q) ||
        p.questionEs.toLowerCase().includes(q) ||
        p.questionHy.toLowerCase().includes(q) ||
        p.options.some((o) => o.es.toLowerCase().includes(q) || o.hy.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-xs">
                <span className="font-bold text-lg tracking-wider">ES</span>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 flex items-center gap-2">
                  <span>Aprender Español</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold border border-amber-200">
                    Հայերենով
                  </span>
                </h1>
                <p className="text-xs text-stone-500">
                  30 Հարց • 20 Երկխոսություն • 15 Տեքստ
                </p>
              </div>
            </div>

            {/* Quick stats badge */}
            <div className="sm:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-100 text-stone-600 text-xs font-medium">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                {Object.keys(selectedQuestionAnswers).length + Object.keys(selectedPhraseAnswers).length} / 45
              </span>
            </div>
          </div>

          {/* Search bar */}
          <div className="w-full sm:w-72 relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Որոնել բառ կամ համար..."
              className="w-full pl-9 pr-8 py-1.5 sm:py-2 text-sm bg-stone-100 focus:bg-white border border-transparent focus:border-amber-400 rounded-xl focus:outline-hidden transition-all placeholder:text-stone-400 text-stone-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs px-1"
                title="Մաքրել"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-5xl mx-auto px-4 flex gap-2 border-t border-stone-100 overflow-x-auto py-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('questions')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
              activeTab === 'questions'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>1. Հարցեր և Տարբերակներ</span>
            <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'questions' ? 'bg-amber-700 text-amber-100' : 'bg-stone-100 text-stone-600'
            }`}>
              30
            </span>
          </button>

          <button
            onClick={() => setActiveTab('dialogues')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
              activeTab === 'dialogues'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>2. Երկխոսություններ</span>
            <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'dialogues' ? 'bg-amber-700 text-amber-100' : 'bg-stone-100 text-stone-600'
            }`}>
              20
            </span>
          </button>

          <button
            onClick={() => setActiveTab('phrases')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
              activeTab === 'phrases'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>3. Տեքստեր և Ըմբռնում</span>
            <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'phrases' ? 'bg-amber-700 text-amber-100' : 'bg-stone-100 text-stone-600'
            }`}>
              15
            </span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
              activeTab === 'guide'
                ? 'bg-stone-800 text-white'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Մեթոդիկա (4 կանոն)</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-6 w-full flex-1">
        {/* ======================= TAB 1: QUESTIONS ======================= */}
        {activeTab === 'questions' && (
          <div className="space-y-4">
            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span>30 Խոսակցական Հարցեր ու Պատասխաններ</span>
                  <span className="text-xs font-normal text-stone-500">
                    ({filteredQuestions.length} հարց)
                  </span>
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  💡 Սեղմեք <strong>ցանկացած հարցի վրա</strong>՝ հայերեն թարգմանությունն ու պատասխանների տարբերակները բացելու համար։
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleAllQuestions(true)}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer text-stone-700"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Բացել բոլորը</span>
                </button>
                <button
                  onClick={() => toggleAllQuestions(false)}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer text-stone-700"
                >
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Փակել բոլորը</span>
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-3">
              {filteredQuestions.map((q) => {
                const isRevealed = !!revealedQuestions[q.id];
                const selectedAnswer = selectedQuestionAnswers[q.id];

                return (
                  <div
                    key={q.id}
                    className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:border-amber-300 transition-all"
                  >
                    {/* Clickable Question Header */}
                    <div
                      onClick={() => toggleQuestion(q.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleQuestion(q.id);
                        }
                      }}
                      className={`w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer transition-colors select-none ${
                        isRevealed ? 'bg-amber-50/50' : 'hover:bg-stone-50/80'
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {q.id}
                        </span>

                        <div className="space-y-1.5 flex-1">
                          {/* Spanish Question Text */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-base sm:text-lg font-semibold text-stone-900 tracking-tight">
                              {q.es}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSpeak(q.es, `q-${q.id}`);
                              }}
                              className={`p-1 rounded-md text-stone-400 hover:text-amber-700 hover:bg-amber-100 transition-colors cursor-pointer ${
                                playingAudioId === `q-${q.id}` ? 'text-amber-600 bg-amber-100' : ''
                              }`}
                              title="Լսել իսպաներեն արտասանությունը"
                            >
                              {playingAudioId === `q-${q.id}` ? (
                                <VolumeX className="w-4 h-4" />
                              ) : (
                                <Volume2 className="w-4 h-4" />
                              )}
                            </button>
                          </div>

                          {/* Armenian Translation */}
                          {isRevealed ? (
                            <motion.div
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-sm font-medium text-amber-900 bg-amber-100/60 px-2.5 py-1.5 rounded-lg inline-block border border-amber-200/50"
                            >
                              🇦🇲 {q.hy}
                            </motion.div>
                          ) : (
                            <div className="text-xs text-stone-400 flex items-center gap-1.5">
                              <span>👆 Սեղմեք՝ թարգմանությունն ու տարբերակները բացելու համար</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right indicator */}
                      <div className="flex items-center gap-2 shrink-0 pt-1">
                        {selectedAnswer && (
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                              selectedAnswer === q.correctOptionId
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {selectedAnswer === q.correctOptionId ? 'Ճիշտ է ✓' : 'Սխալ է'}
                          </span>
                        )}
                        <div className="text-stone-400">
                          {isRevealed ? (
                            <ChevronUp className="w-5 h-5 text-amber-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Options section: Revealed on click */}
                    <AnimatePresence>
                      {isRevealed && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-stone-200 bg-stone-50/70 p-4 sm:p-5"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                              Ընտրեք ճիշտ պատասխանը կամ սեղմեք թարգմանության համար․
                            </span>
                            {selectedAnswer && (
                              <button
                                onClick={() => {
                                  setSelectedQuestionAnswers((prev) => {
                                    const copy = { ...prev };
                                    delete copy[q.id];
                                    return copy;
                                  });
                                }}
                                className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 cursor-pointer"
                              >
                                <RotateCcw className="w-3 h-3" />
                                <span>Վերակայել</span>
                              </button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {q.options.map((opt) => {
                              const optKey = `${q.id}-${opt.id}`;
                              const isOptRevealed = !!revealedOptions[optKey];
                              const isSelected = selectedAnswer === opt.id;
                              const isCorrect = opt.id === q.correctOptionId;

                              let cardBorder = 'border-stone-200 bg-white hover:border-amber-300';
                              if (selectedAnswer) {
                                if (isSelected && isCorrect) {
                                  cardBorder = 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500';
                                } else if (isSelected && !isCorrect) {
                                  cardBorder = 'border-rose-500 bg-rose-50 ring-1 ring-rose-500';
                                } else if (isCorrect) {
                                  cardBorder = 'border-emerald-300 bg-emerald-50/60';
                                } else {
                                  cardBorder = 'border-stone-200 bg-white opacity-60';
                                }
                              }

                              return (
                                <div
                                  key={opt.id}
                                  className={`rounded-xl border p-3 transition-all ${cardBorder} flex flex-col justify-between gap-2`}
                                >
                                  <div className="flex items-start justify-between gap-2">
                                    <div
                                      onClick={() => {
                                        setSelectedQuestionAnswers((prev) => ({
                                          ...prev,
                                          [q.id]: opt.id
                                        }));
                                      }}
                                      className="flex items-start gap-2.5 flex-1 cursor-pointer"
                                    >
                                      <span
                                        className={`w-6 h-6 rounded-md font-bold text-xs flex items-center justify-center shrink-0 ${
                                          isSelected
                                            ? isCorrect
                                              ? 'bg-emerald-600 text-white'
                                              : 'bg-rose-600 text-white'
                                            : 'bg-stone-100 text-stone-700'
                                        }`}
                                      >
                                        {opt.id}
                                      </span>

                                      <div className="flex-1">
                                        <p className="text-sm font-medium text-stone-900 leading-snug">
                                          {opt.es}
                                        </p>
                                      </div>
                                    </div>

                                    {/* Small audio button */}
                                    <button
                                      type="button"
                                      onClick={() => handleSpeak(opt.es, `opt-${q.id}-${opt.id}`)}
                                      className="p-1 rounded text-stone-400 hover:text-amber-700 hover:bg-amber-100 shrink-0 cursor-pointer"
                                      title="Արտասանել"
                                    >
                                      <Volume2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>

                                  {/* Armenian translation toggle button and text */}
                                  <div className="pt-1 border-t border-stone-100">
                                    {isOptRevealed || selectedAnswer ? (
                                      <div className="text-xs text-stone-700 font-medium bg-amber-50/80 px-2 py-1 rounded-md">
                                        🇦🇲 {opt.hy}
                                      </div>
                                    ) : (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setRevealedOptions((prev) => ({
                                            ...prev,
                                            [optKey]: true
                                          }));
                                        }}
                                        className="text-[11px] text-amber-700 hover:text-amber-900 hover:underline flex items-center gap-1 cursor-pointer"
                                      >
                                        <span>Թարգմանել հայերեն</span>
                                      </button>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {filteredQuestions.length === 0 && (
                <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 p-8">
                  <Search className="w-8 h-8 text-stone-300 mx-auto mb-2" />
                  <p className="text-stone-600 font-medium">Հարց չի գտնվել որոնման համապատասխան</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-3 text-xs text-amber-600 hover:underline"
                  >
                    Մաքրել որոնումը
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================= TAB 2: DIALOGUES ======================= */}
        {activeTab === 'dialogues' && (
          <div className="space-y-4">
            {/* Header controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span>20 Կենդանի Երկխոսություններ</span>
                  <span className="text-xs font-normal text-stone-500">
                    ({filteredDialogues.length} երկխոսություն)
                  </span>
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  💡 Սեղմեք <strong>երկխոսության կամ տողերի վրա</strong>՝ հայերեն թարգմանությունը բացելու համար։
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleAllDialogues(true)}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer text-stone-700"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Բացել բոլորը</span>
                </button>
                <button
                  onClick={() => toggleAllDialogues(false)}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer text-stone-700"
                >
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Փակել բոլորը</span>
                </button>
              </div>
            </div>

            {/* Dialogues list */}
            <div className="space-y-4">
              {filteredDialogues.map((d) => {
                const isRevealed = !!revealedDialogues[d.id];

                return (
                  <div
                    key={d.id}
                    className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden transition-all hover:border-amber-300"
                  >
                    {/* Header bar of dialogue */}
                    <div
                      onClick={() => toggleDialogue(d.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleDialogue(d.id);
                        }
                      }}
                      className="p-4 sm:p-5 bg-stone-50/60 border-b border-stone-100 flex items-center justify-between gap-3 cursor-pointer hover:bg-amber-50/40 transition-colors select-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-amber-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                          {d.id}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base sm:text-lg font-bold text-stone-900">
                              🇪🇸 {d.titleEs}
                            </h3>
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-amber-800">
                            🇦🇲 {d.titleHy}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Speak entire dialogue
                            const allEs = d.lines.map((l) => l.es).join('. ');
                            handleSpeak(allEs, `diag-${d.id}`);
                          }}
                          className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                            playingAudioId === `diag-${d.id}`
                              ? 'bg-amber-600 text-white border-amber-600'
                              : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                          }`}
                          title="Լսել ամբողջ երկխոսությունը իսպաներեն"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Լսել ամբողջը</span>
                        </button>

                        <div className="text-stone-400 p-1">
                          {isRevealed ? (
                            <ChevronUp className="w-5 h-5 text-amber-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Dialogue Lines */}
                    <div className="p-4 sm:p-5 space-y-3">
                      {d.lines.map((line, idx) => {
                        const lineKey = `${d.id}-${idx}`;
                        const isLineRevealed = isRevealed || !!revealedLines[lineKey];

                        return (
                          <div
                            key={idx}
                            onClick={() => {
                              setRevealedLines((prev) => ({
                                ...prev,
                                [lineKey]: !prev[lineKey]
                              }));
                            }}
                            className={`p-3 rounded-xl border transition-all cursor-pointer select-none ${
                              isLineRevealed
                                ? 'bg-amber-50/40 border-amber-200'
                                : 'bg-stone-50/50 border-stone-200/80 hover:bg-stone-100/70'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="space-y-1 flex-1">
                                <div className="text-sm sm:text-base font-semibold text-stone-900 flex items-center gap-2">
                                  <span>{line.es}</span>
                                </div>

                                {isLineRevealed ? (
                                  <motion.div
                                    initial={{ opacity: 0, y: -2 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-xs sm:text-sm font-medium text-amber-900 pt-0.5"
                                  >
                                    🇦🇲 {line.hy}
                                  </motion.div>
                                ) : (
                                  <div className="text-[11px] text-stone-400 italic">
                                    👆 Սեղմեք՝ տողի հայերեն թարգմանության համար
                                  </div>
                                )}
                              </div>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSpeak(line.es, `line-${d.id}-${idx}`);
                                }}
                                className={`p-1.5 rounded-lg text-stone-400 hover:text-amber-800 hover:bg-amber-100 transition-colors shrink-0 cursor-pointer ${
                                  playingAudioId === `line-${d.id}-${idx}`
                                    ? 'text-amber-700 bg-amber-100'
                                    : ''
                                }`}
                                title="Արտասանել"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================= TAB 3: PHRASES / COMPREHENSION ======================= */}
        {activeTab === 'phrases' && (
          <div className="space-y-4">
            {/* Header info & guide snippet */}
            <div className="p-4 sm:p-5 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
                    <span>15 Տեքստային Իրավիճակներ և Ըմբռնման Հարցեր</span>
                    <span className="text-xs font-normal text-stone-500">
                      ({filteredPhrases.length} տեքստ)
                    </span>
                  </h2>
                  <p className="text-xs text-stone-500 mt-0.5">
                    💡 <strong>Սեղմեք իսպաներեն տեքստի վրա</strong>՝ հայերեն թարգմանությունը բացելու համար։
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const next: Record<number, boolean> = {};
                      phrasesData.forEach((p) => {
                        next[p.id] = true;
                      });
                      setRevealedPhrases(next);
                    }}
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer text-stone-700"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Բացել բոլորը</span>
                  </button>
                  <button
                    onClick={() => setRevealedPhrases({})}
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer text-stone-700"
                  >
                    <EyeOff className="w-3.5 h-3.5" />
                    <span>Փակել բոլորը</span>
                  </button>
                </div>
              </div>

              {/* Quick tip pill box */}
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-2.5 text-xs text-amber-950">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-amber-900">
                    Կանոն՝ Մի՛ թարգմանեք բառ առ բառ։ Որոնեք միայն 4 գլխավոր հարցերը․
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-medium pt-1">
                    <span className="bg-white/80 px-2 py-0.5 rounded-md border border-amber-300/60">
                      1. Ո՞վ (¿Quién?)
                    </span>
                    <span className="bg-white/80 px-2 py-0.5 rounded-md border border-amber-300/60">
                      2. Որտե՞ղ (¿Dónde?)
                    </span>
                    <span className="bg-white/80 px-2 py-0.5 rounded-md border border-amber-300/60">
                      3. Ի՞նչ եղավ (¿Qué pasó?)
                    </span>
                    <span className="bg-white/80 px-2 py-0.5 rounded-md border border-amber-300/60">
                      4. Ի՞նչ են անելու (¿Qué van a hacer?)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phrases cards */}
            <div className="space-y-4">
              {filteredPhrases.map((phrase) => {
                const isRevealed = !!revealedPhrases[phrase.id];
                const selectedAnswer = selectedPhraseAnswers[phrase.id];

                return (
                  <div
                    key={phrase.id}
                    className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden transition-all hover:border-amber-300"
                  >
                    {/* Header with phrase index */}
                    <div className="px-4 py-2.5 bg-stone-50 border-b border-stone-100 flex items-center justify-between text-xs text-stone-500">
                      <span className="font-bold text-amber-700">
                        Վարժություն #{phrase.id}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleSpeak(phrase.textEs, `phrase-${phrase.id}`)}
                          className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                            playingAudioId === `phrase-${phrase.id}`
                              ? 'bg-amber-600 text-white border-amber-600'
                              : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Լսել իսպաներեն</span>
                        </button>
                      </div>
                    </div>

                    {/* Spanish text block (Clickable to reveal translation) */}
                    <div
                      onClick={() => togglePhrase(phrase.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          togglePhrase(phrase.id);
                        }
                      }}
                      className="p-4 sm:p-5 cursor-pointer hover:bg-amber-50/20 transition-colors select-none"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-base">🇪🇸</span>
                          <p className="text-base sm:text-lg font-medium text-stone-900 leading-relaxed">
                            {phrase.textEs}
                          </p>
                        </div>

                        {/* Armenian translation */}
                        {isRevealed ? (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-start gap-2 pt-2 border-t border-amber-100 text-amber-950 bg-amber-50/70 p-3 rounded-xl"
                          >
                            <span className="text-base">🇦🇲</span>
                            <p className="text-sm sm:text-base font-normal leading-relaxed">
                              {phrase.textHy}
                            </p>
                          </motion.div>
                        ) : (
                          <div className="pt-2 text-xs text-stone-400 flex items-center gap-1.5">
                            <Eye className="w-3.5 h-3.5 text-amber-600" />
                            <span>👆 Սեղմեք տեքստի վրա՝ հայերեն թարգմանությունը տեսնելու համար</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Question & Options section */}
                    <div className="border-t border-stone-200 bg-stone-50/60 p-4 sm:p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-2">
                            <span>🇪🇸 {phrase.questionEs}</span>
                            <button
                              type="button"
                              onClick={() => handleSpeak(phrase.questionEs, `pq-${phrase.id}`)}
                              className="p-1 rounded text-stone-400 hover:text-amber-700 hover:bg-amber-100 cursor-pointer"
                              title="Լսել հարցը"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="text-xs sm:text-sm font-medium text-amber-800">
                            🇦🇲 {phrase.questionHy}
                          </div>
                        </div>

                        {selectedAnswer && (
                          <button
                            onClick={() => {
                              setSelectedPhraseAnswers((prev) => {
                                const copy = { ...prev };
                                delete copy[phrase.id];
                                return copy;
                              });
                            }}
                            className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Վերակայել</span>
                          </button>
                        )}
                      </div>

                      {/* Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {phrase.options.map((opt) => {
                          const optKey = `ph-${phrase.id}-${opt.id}`;
                          const isOptRevealed = isRevealed || !!revealedPhraseOptions[optKey];
                          const isSelected = selectedAnswer === opt.id;
                          const isCorrect = opt.id === phrase.correctOptionId;

                          let cardBorder = 'border-stone-200 bg-white hover:border-amber-300';
                          if (selectedAnswer) {
                            if (isSelected && isCorrect) {
                              cardBorder = 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500';
                            } else if (isSelected && !isCorrect) {
                              cardBorder = 'border-rose-500 bg-rose-50 ring-1 ring-rose-500';
                            } else if (isCorrect) {
                              cardBorder = 'border-emerald-300 bg-emerald-50/60';
                            } else {
                              cardBorder = 'border-stone-200 bg-white opacity-60';
                            }
                          }

                          return (
                            <div
                              key={opt.id}
                              className={`rounded-xl border p-3 transition-all ${cardBorder} flex flex-col justify-between gap-2`}
                            >
                              <div
                                onClick={() => {
                                  setSelectedPhraseAnswers((prev) => ({
                                    ...prev,
                                    [phrase.id]: opt.id
                                  }));
                                }}
                                className="flex items-start gap-2.5 cursor-pointer"
                              >
                                <span
                                  className={`w-6 h-6 rounded-md font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                                    isSelected
                                      ? isCorrect
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-rose-600 text-white'
                                      : 'bg-stone-100 text-stone-700'
                                  }`}
                                >
                                  {opt.id}
                                </span>

                                <div className="flex-1 space-y-1">
                                  <p className="text-sm font-medium text-stone-900 leading-snug">
                                    {opt.es}
                                  </p>
                                </div>
                              </div>

                              {/* Translation toggle */}
                              <div className="pt-1 border-t border-stone-100">
                                {isOptRevealed || selectedAnswer ? (
                                  <div className="text-xs text-stone-700 font-medium bg-amber-50/80 px-2 py-1 rounded-md">
                                    🇦🇲 {opt.hy}
                                  </div>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setRevealedPhraseOptions((prev) => ({
                                        ...prev,
                                        [optKey]: true
                                      }));
                                    }}
                                    className="text-[11px] text-amber-700 hover:text-amber-900 hover:underline flex items-center gap-1 cursor-pointer"
                                  >
                                    <span>Թարգմանել հայերեն</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================= TAB 4: GUIDE / 4 RULES ======================= */}
        {activeTab === 'guide' && (
          <div className="space-y-6 max-w-3xl mx-auto">
            {/* Big Instruction Banner */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ուսումնական Մեթոդաբանություն</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {exerciseInstructions.titleEs}
              </h2>
              <h3 className="text-lg sm:text-xl font-medium text-amber-100">
                {exerciseInstructions.titleHy}
              </h3>

              <div className="pt-2 border-t border-white/20 space-y-2 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold">
                  🇪🇸 {exerciseInstructions.textEs}
                </p>
                <p className="text-amber-100">
                  🇦🇲 {exerciseInstructions.textHy}
                </p>
              </div>
            </div>

            {/* 4 Golden Questions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {exerciseInstructions.rules.map((rule) => (
                <div
                  key={rule.num}
                  className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs hover:border-amber-400 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 font-bold text-lg flex items-center justify-center shrink-0">
                    {rule.num}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-stone-900">
                        {rule.es}
                      </h4>
                      <button
                        type="button"
                        onClick={() => handleSpeak(rule.es, `rule-${rule.num}`)}
                        className="p-1 text-stone-400 hover:text-amber-700 hover:bg-amber-100 rounded-md cursor-pointer"
                        title="Լսել"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-amber-800">
                      🇦🇲 {rule.hy}
                    </p>
                    <p className="text-xs text-stone-500 pt-1">
                      {rule.num === 1 && 'Ո՞վ է խոսում կամ ում մասին է պատմությունը:'}
                      {rule.num === 2 && 'Որտե՞ղ է տեղի ունենում գործողությունը (տանը, դպրոցում, այգում):'}
                      {rule.num === 3 && 'Ի՞նչ պատահեց կամ ինչու պլանները փոխվեցին:'}
                      {rule.num === 4 && 'Ի՞նչ որոշում կայացրեցին կամ ի՞նչ են պատրաստվում անել հետո:'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Practical Advice */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
              <h4 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Ինչպե՞ս արդյունավետ մարզվել այս հավելվածով</span>
              </h4>
              <ul className="text-sm text-stone-600 space-y-2 list-disc list-inside leading-relaxed">
                <li>
                  <strong>Քայլ 1:</strong> Սկզբում կարդացեք կամ լսեք իսպաներեն հարցը/տեքստը <strong>առանց</strong> թարգմանությունը բացելու։
                </li>
                <li>
                  <strong>Քայլ 2:</strong> Փորձեք ինքնուրույն հասկանալ ընդհանուր իմաստը։
                </li>
                <li>
                  <strong>Քայլ 3:</strong> Սեղմեք քարտի վրա՝ հայերեն թարգմանությունը ստուգելու համար։
                </li>
                <li>
                  <strong>Քայլ 4:</strong> Ընտրեք պատասխանը և ստուգեք Ձեր ըմբռնումը։ Օգտագործեք 🔊 կոճակը ճիշտ արտասանությունը լսելու համար։
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-4 mt-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-xs text-stone-500">
          <p>
            Իսպաներենի ինտերակտիվ ուսուցում հայերենով • 30 Հարց • 20 Երկխոսություն • 15 Տեքստ
          </p>
        </div>
      </footer>
    </div>
  );
}
