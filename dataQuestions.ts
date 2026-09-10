import { QuestionItem } from './types';

export const questionsData: QuestionItem[] = [
  {
    id: 1,
    es: '—¿Vienes con nosotros al recreo?',
    hy: '—Մեզ հետ ընդմիջման կգա՞ս։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Sí, claro. Voy con vosotros.', hy: 'Այո, իհարկե։ Գալիս եմ ձեզ հետ։', isCorrect: true },
      { id: 'B', es: 'Tengo doce años.', hy: 'Ես տասներկու տարեկան եմ։', isCorrect: false },
      { id: 'C', es: 'Mi casa está cerca.', hy: 'Իմ տունը մոտ է։', isCorrect: false },
      { id: 'D', es: 'Es lunes.', hy: 'Երկուշաբթի է։', isCorrect: false }
    ]
  },
  {
    id: 2,
    es: '—Oye, ¿te apuntas a jugar?',
    hy: '—Լսիր, կմիանա՞ս խաղին։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Sí, venga, juego.', hy: 'Այո, լավ, խաղում եմ։', isCorrect: true },
      { id: 'B', es: 'No tengo hermanos.', hy: 'Ես քույր կամ եղբայր չունեմ։', isCorrect: false },
      { id: 'C', es: 'A las ocho.', hy: 'Ժամը ութին։', isCorrect: false },
      { id: 'D', es: 'En mi mochila.', hy: 'Իմ ուսապարկում։', isCorrect: false }
    ]
  },
  {
    id: 3,
    es: '—¿Quieres sentarte aquí con nosotros?',
    hy: '—Ուզո՞ւմ ես այստեղ մեզ հետ նստել։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Sí, gracias.', hy: 'Այո, շնորհակալություն։', isCorrect: true },
      { id: 'B', es: 'Tengo hambre.', hy: 'Ես քաղցած եմ։', isCorrect: false },
      { id: 'C', es: 'Es mi profesor.', hy: 'Նա իմ ուսուցիչն է։', isCorrect: false },
      { id: 'D', es: 'Voy en autobús.', hy: 'Ես ավտոբուսով եմ գնում։', isCorrect: false }
    ]
  },
  {
    id: 4,
    es: '—¿Qué tal el día?',
    hy: '—Ինչպե՞ս անցավ օրը։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Bien, un poco cansado, pero bien.', hy: 'Լավ, մի քիչ հոգնած եմ, բայց լավ։', isCorrect: true },
      { id: 'B', es: 'Tengo un balón.', hy: 'Ես գնդակ ունեմ։', isCorrect: false },
      { id: 'C', es: 'Mañana.', hy: 'Վաղը։', isCorrect: false },
      { id: 'D', es: 'Es azul.', hy: 'Այն կապույտ է։', isCorrect: false }
    ]
  },
  {
    id: 5,
    es: '—¿Has entendido lo que ha dicho el profe?',
    hy: '—Հասկացա՞ր՝ ուսուցիչը ինչ ասաց։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Más o menos. ¿Me lo explicas?', hy: 'Մոտավորապես։ Կբացատրե՞ս ինձ։', isCorrect: true },
      { id: 'B', es: 'Tengo trece años.', hy: 'Ես տասներեք տարեկան եմ։', isCorrect: false },
      { id: 'C', es: 'Juego al fútbol.', hy: 'Ես ֆուտբոլ եմ խաղում։', isCorrect: false },
      { id: 'D', es: 'Hace frío.', hy: 'Ցուրտ է։', isCorrect: false }
    ]
  },
  {
    id: 6,
    es: '—¿Qué página ha dicho?',
    hy: '—Ո՞ր էջն ասաց։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Creo que la treinta y dos.', hy: 'Կարծում եմ՝ երեսուներկուերորդը։', isCorrect: true },
      { id: 'B', es: 'Estoy cansado.', hy: 'Ես հոգնած եմ։', isCorrect: false },
      { id: 'C', es: 'Soy de Armenia.', hy: 'Ես Հայաստանից եմ։', isCorrect: false },
      { id: 'D', es: 'Es grande.', hy: 'Այն մեծ է։', isCorrect: false }
    ]
  },
  {
    id: 7,
    es: '—¿Me dejas un boli?',
    hy: '—Գրիչդ կտա՞ս։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Sí, toma.', hy: 'Այո, վերցրու։', isCorrect: true },
      { id: 'B', es: 'Me gusta el fútbol.', hy: 'Ես սիրում եմ ֆուտբոլ։', isCorrect: false },
      { id: 'C', es: 'Voy a casa.', hy: 'Ես գնում եմ տուն։', isCorrect: false },
      { id: 'D', es: 'No tengo sueño.', hy: 'Ես քնկոտ չեմ։', isCorrect: false }
    ]
  },
  {
    id: 8,
    es: '—¿Qué toca ahora?',
    hy: '—Հիմա ի՞նչ դաս ունենք։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Creo que matemáticas.', hy: 'Կարծում եմ՝ մաթեմատիկա։', isCorrect: true },
      { id: 'B', es: 'Tengo una hermana.', hy: 'Ես քույր ունեմ։', isCorrect: false },
      { id: 'C', es: 'Ayer jugué.', hy: 'Երեկ խաղացել եմ։', isCorrect: false },
      { id: 'D', es: 'Muy lejos.', hy: 'Շատ հեռու։', isCorrect: false }
    ]
  },
  {
    id: 9,
    es: '—¿Has hecho los deberes?',
    hy: '—Տնային աշխատանքը արե՞լ ես։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Sí, pero un ejercicio no lo entendí.', hy: 'Այո, բայց մի վարժություն չհասկացա։', isCorrect: true },
      { id: 'B', es: 'Soy alto.', hy: 'Ես բարձրահասակ եմ։', isCorrect: false },
      { id: 'C', es: 'En España.', hy: 'Իսպանիայում։', isCorrect: false },
      { id: 'D', es: 'Es martes.', hy: 'Երեքշաբթի է։', isCorrect: false }
    ]
  },
  {
    id: 10,
    es: '—¿Trabajamos juntos?',
    hy: '—Միասի՞ն աշխատենք։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Sí, vale.', hy: 'Այո, լավ։', isCorrect: true },
      { id: 'B', es: 'No tengo perro.', hy: 'Ես շուն չունեմ։', isCorrect: false },
      { id: 'C', es: 'A las seis.', hy: 'Ժամը վեցին։', isCorrect: false },
      { id: 'D', es: 'Hace sol.', hy: 'Արև է։', isCorrect: false }
    ]
  },
  {
    id: 11,
    es: '—¿Por qué estás tan callado?',
    hy: '—Ինչո՞ւ ես այդքան լուռ։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Porque todavía me da un poco de vergüenza hablar.', hy: 'Որովհետև դեռ մի քիչ ամաչում եմ խոսել։', isCorrect: true },
      { id: 'B', es: 'Tengo una camiseta nueva.', hy: 'Ես նոր շապիկ ունեմ։', isCorrect: false },
      { id: 'C', es: 'Mañana entreno.', hy: 'Վաղը մարզվում եմ։', isCorrect: false },
      { id: 'D', es: 'Es pequeño.', hy: 'Այն փոքր է։', isCorrect: false }
    ]
  },
  {
    id: 12,
    es: '—No pasa nada, habla.',
    hy: '—Ոչինչ, խոսիր։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Vale, voy a intentarlo.', hy: 'Լավ, կփորձեմ։', isCorrect: true },
      { id: 'B', es: 'Son diez euros.', hy: 'Տասը եվրո է։', isCorrect: false },
      { id: 'C', es: 'Vivo lejos.', hy: 'Ես հեռու եմ ապրում։', isCorrect: false },
      { id: 'D', es: 'No como carne.', hy: 'Ես միս չեմ ուտում։', isCorrect: false }
    ]
  },
  {
    id: 13,
    es: '—Hablas español bastante bien.',
    hy: '—Դու բավականին լավ ես խոսում իսպաներեն։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Gracias, pero todavía estoy aprendiendo.', hy: 'Շնորհակալություն, բայց դեռ սովորում եմ։', isCorrect: true },
      { id: 'B', es: 'Tengo un hermano.', hy: 'Ես եղբայր ունեմ։', isCorrect: false },
      { id: 'C', es: 'Son las cinco.', hy: 'Ժամը հինգն է։', isCorrect: false },
      { id: 'D', es: 'Voy andando.', hy: 'Ես ոտքով եմ գնում։', isCorrect: false }
    ]
  },
  {
    id: 14,
    es: '—¿De dónde eres?',
    hy: '—Որտեղի՞ց ես։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Soy de Armenia.', hy: 'Ես Հայաստանից եմ։', isCorrect: true },
      { id: 'B', es: 'Tengo sueño.', hy: 'Քունս տանում է։', isCorrect: false },
      { id: 'C', es: 'Juego mañana.', hy: 'Վաղը խաղում եմ։', isCorrect: false },
      { id: 'D', es: 'Es mi mochila.', hy: 'Սա իմ ուսապարկն է։', isCorrect: false }
    ]
  },
  {
    id: 15,
    es: '—¿Cuánto tiempo llevas aquí?',
    hy: '—Որքա՞ն ժամանակ է՝ այստեղ ես։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Llevo unos meses.', hy: 'Մոտ մի քանի ամիս է։', isCorrect: true },
      { id: 'B', es: 'Tengo doce años.', hy: 'Ես տասներկու տարեկան եմ։', isCorrect: false },
      { id: 'C', es: 'Es grande.', hy: 'Մեծ է։', isCorrect: false },
      { id: 'D', es: 'Con mi hermano.', hy: 'Եղբորս հետ։', isCorrect: false }
    ]
  },
  {
    id: 16,
    es: '—¿Te gusta vivir aquí?',
    hy: '—Քեզ դո՞ւր է գալիս այստեղ ապրել։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Sí, me gusta, pero todavía estoy acostumbrándome.', hy: 'Այո, ինձ դուր է գալիս, բայց դեռ հարմարվում եմ։', isCorrect: true },
      { id: 'B', es: 'Tengo matemáticas.', hy: 'Ես մաթեմատիկա ունեմ։', isCorrect: false },
      { id: 'C', es: 'Es rojo.', hy: 'Այն կարմիր է։', isCorrect: false },
      { id: 'D', es: 'Mañana.', hy: 'Վաղը։', isCorrect: false }
    ]
  },
  {
    id: 17,
    es: '—¿Juegas al fútbol?',
    hy: '—Ֆուտբոլ խաղո՞ւմ ես։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Sí, juego desde hace varios años.', hy: 'Այո, արդեն մի քանի տարի է՝ խաղում եմ։', isCorrect: true },
      { id: 'B', es: 'Tengo un libro.', hy: 'Ես գիրք ունեմ։', isCorrect: false },
      { id: 'C', es: 'En casa.', hy: 'Տանը։', isCorrect: false },
      { id: 'D', es: 'Muy bien.', hy: 'Շատ լավ։', isCorrect: false }
    ]
  },
  {
    id: 18,
    es: '—¿En qué posición juegas?',
    hy: '—Ի՞նչ դիրքում ես խաղում։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Juego de delantero.', hy: 'Ես հարձակվող եմ խաղում։', isCorrect: true },
      { id: 'B', es: 'Tengo hambre.', hy: 'Ես քաղցած եմ։', isCorrect: false },
      { id: 'C', es: 'Voy en coche.', hy: 'Ես մեքենայով եմ գնում։', isCorrect: false },
      { id: 'D', es: 'Es miércoles.', hy: 'Չորեքշաբթի է։', isCorrect: false }
    ]
  },
  {
    id: 19,
    es: '—Nos falta uno. ¿Juegas con nosotros?',
    hy: '—Մեզ մի խաղացող է պակասում։ Մեզ հետ կխաղա՞ս։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Sí, claro. ¿En qué equipo voy?', hy: 'Այո, իհարկե։ Ո՞ր թիմում եմ խաղում։', isCorrect: true },
      { id: 'B', es: 'Tengo deberes.', hy: 'Ես տնային աշխատանք ունեմ։', isCorrect: false },
      { id: 'C', es: 'Son las cuatro.', hy: 'Ժամը չորսն է։', isCorrect: false },
      { id: 'D', es: 'Vivo con mis padres.', hy: 'Ես ծնողներիս հետ եմ ապրում։', isCorrect: false }
    ]
  },
  {
    id: 20,
    es: '—¡Pásamela, estoy solo!',
    hy: '—Փոխանցի՛ր ինձ, մենակ եմ։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: '¡Vale, va!', hy: 'Լավ, ահա՛։', isCorrect: true },
      { id: 'B', es: 'Tengo doce años.', hy: 'Ես տասներկու տարեկան եմ։', isCorrect: false },
      { id: 'C', es: 'Me gusta España.', hy: 'Ես սիրում եմ Իսպանիան։', isCorrect: false },
      { id: 'D', es: 'Es mi amigo.', hy: 'Նա իմ ընկերն է։', isCorrect: false }
    ]
  },
  {
    id: 21,
    es: '—Buen partido, tío.',
    hy: '—Լավ խաղ էր, ընկեր։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Gracias, tú también has jugado bien.', hy: 'Շնորհակալություն, դու էլ լավ խաղացիր։', isCorrect: true },
      { id: 'B', es: 'No tengo dinero.', hy: 'Ես գումար չունեմ։', isCorrect: false },
      { id: 'C', es: 'Es mi camiseta.', hy: 'Սա իմ շապիկն է։', isCorrect: false },
      { id: 'D', es: 'Mañana voy.', hy: 'Վաղը գնում եմ։', isCorrect: false }
    ]
  },
  {
    id: 22,
    es: '—¿Te vienes después a comer algo?',
    hy: '—Հետո կգա՞ս մի բան ուտելու։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Sí, vale. ¿Dónde vamos?', hy: 'Այո, լավ։ Ո՞ւր ենք գնում։', isCorrect: true },
      { id: 'B', es: 'Soy de Armenia.', hy: 'Ես Հայաստանից եմ։', isCorrect: false },
      { id: 'C', es: 'Es pequeño.', hy: 'Այն փոքր է։', isCorrect: false },
      { id: 'D', es: 'Tengo clase.', hy: 'Ես դաս ունեմ։', isCorrect: false }
    ]
  },
  {
    id: 23,
    es: '—¿Qué quieres pedir?',
    hy: '—Ի՞նչ ես ուզում պատվիրել։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Creo que voy a pedir una hamburguesa.', hy: 'Կարծում եմ՝ համբուրգեր եմ պատվիրելու։', isCorrect: true },
      { id: 'B', es: 'Juego al fútbol.', hy: 'Ես ֆուտբոլ եմ խաղում։', isCorrect: false },
      { id: 'C', es: 'A las nueve.', hy: 'Ժամը իննին։', isCorrect: false },
      { id: 'D', es: 'Estoy en clase.', hy: 'Ես դասի եմ։', isCorrect: false }
    ]
  },
  {
    id: 24,
    es: '—¿Quieres probar esto? Está buenísimo.',
    hy: '—Ուզո՞ւմ ես սա փորձել։ Շատ համեղ է։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Vale, dame un poco.', hy: 'Լավ, մի քիչ տուր։', isCorrect: true },
      { id: 'B', es: 'Tengo un perro.', hy: 'Ես շուն ունեմ։', isCorrect: false },
      { id: 'C', es: 'Mañana estudio.', hy: 'Վաղը սովորում եմ։', isCorrect: false },
      { id: 'D', es: 'Está lejos.', hy: 'Հեռու է։', isCorrect: false }
    ]
  },
  {
    id: 25,
    es: '—¿Quedamos después de clase?',
    hy: '—Դասից հետո հանդիպե՞նք։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Vale. ¿A qué hora?', hy: 'Լավ։ Ժամը քանիսի՞ն։', isCorrect: true },
      { id: 'B', es: 'Tengo un balón.', hy: 'Ես գնդակ ունեմ։', isCorrect: false },
      { id: 'C', es: 'Es viernes.', hy: 'Ուրբաթ է։', isCorrect: false },
      { id: 'D', es: 'No tengo frío.', hy: 'Ես չեմ մրսում։', isCorrect: false }
    ]
  },
  {
    id: 26,
    es: '—A las cinco, ¿te viene bien?',
    hy: '—Ժամը հինգին քեզ հարմա՞ր է։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Sí, perfecto.', hy: 'Այո, հիանալի է։', isCorrect: true },
      { id: 'B', es: 'Vivo cerca.', hy: 'Ես մոտ եմ ապրում։', isCorrect: false },
      { id: 'C', es: 'Tengo doce años.', hy: 'Ես տասներկու տարեկան եմ։', isCorrect: false },
      { id: 'D', es: 'Es mi amigo.', hy: 'Նա իմ ընկերն է։', isCorrect: false }
    ]
  },
  {
    id: 27,
    es: '—Al final no puedo quedar hoy.',
    hy: '—Վերջում այսօր չեմ կարող հանդիպել։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'No pasa nada. Quedamos otro día.', hy: 'Ոչինչ։ Մեկ ուրիշ օր կհանդիպենք։', isCorrect: true },
      { id: 'B', es: 'Tengo hambre.', hy: 'Ես քաղցած եմ։', isCorrect: false },
      { id: 'C', es: 'Voy en metro.', hy: 'Մետրոյով եմ գնում։', isCorrect: false },
      { id: 'D', es: 'Es azul.', hy: 'Կապույտ է։', isCorrect: false }
    ]
  },
  {
    id: 28,
    es: '—Oye, ¿por qué no has venido ayer?',
    hy: '—Լսիր, ինչո՞ւ երեկ չեկար։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Porque tenía que hacer unas cosas con mi familia.', hy: 'Որովհետև ընտանիքիս հետ որոշ գործեր ունեի։', isCorrect: true },
      { id: 'B', es: 'Tengo un bolígrafo.', hy: 'Ես գրիչ ունեմ։', isCorrect: false },
      { id: 'C', es: 'A las tres.', hy: 'Ժամը երեքին։', isCorrect: false },
      { id: 'D', es: 'Es fácil.', hy: 'Հեշտ է։', isCorrect: false }
    ]
  },
  {
    id: 29,
    es: '—¿Qué hiciste el fin de semana?',
    hy: '—Ի՞նչ արեցիր հանգստյան օրերին։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Salí con mi familia y también jugué al fútbol.', hy: 'Ընտանիքիս հետ դուրս եկա և նաև ֆուտբոլ խաղացի։', isCorrect: true },
      { id: 'B', es: 'Tengo matemáticas.', hy: 'Ես մաթեմատիկա ունեմ։', isCorrect: false },
      { id: 'C', es: 'Es mi hermano.', hy: 'Նա իմ եղբայրն է։', isCorrect: false },
      { id: 'D', es: 'Está a la derecha.', hy: 'Աջ կողմում է։', isCorrect: false }
    ]
  },
  {
    id: 30,
    es: '—¿Qué vas a hacer este finde?',
    hy: '—Ի՞նչ ես անելու այս հանգստյան օրերին։',
    correctOptionId: 'A',
    options: [
      { id: 'A', es: 'Creo que voy a entrenar y luego quedaré con unos amigos.', hy: 'Կարծում եմ՝ մարզվելու եմ, հետո ընկերներիս հետ կհանդիպեմ։', isCorrect: true },
      { id: 'B', es: 'Tengo frío.', hy: 'Ես մրսում եմ։', isCorrect: false },
      { id: 'C', es: 'Son cinco euros.', hy: 'Հինգ եվրո է։', isCorrect: false },
      { id: 'D', es: 'En mi mochila.', hy: 'Իմ ուսապարկում։', isCorrect: false }
    ]
  }
];
