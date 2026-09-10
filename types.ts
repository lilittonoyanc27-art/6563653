export interface OptionItem {
  id: string; // 'A' | 'B' | 'C' | 'D'
  es: string;
  hy: string;
  isCorrect?: boolean;
}

export interface QuestionItem {
  id: number;
  es: string;
  hy: string;
  options: OptionItem[];
  correctOptionId: string;
}

export interface DialogueLine {
  es: string;
  hy: string;
}

export interface DialogueItem {
  id: number;
  titleEs: string;
  titleHy: string;
  lines: DialogueLine[];
}

export interface PhraseOption {
  id: string; // 'A' | 'B' | 'C' | 'D'
  es: string;
  hy: string;
}

export interface PhraseExercise {
  id: number;
  textEs: string;
  textHy: string;
  questionEs: string;
  questionHy: string;
  options: PhraseOption[];
  correctOptionId: string;
}
