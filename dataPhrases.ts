import { PhraseExercise } from './types';

export const exerciseInstructions = {
  titleEs: 'Cómo hacer este ejercicio',
  titleHy: 'Ինչպես անել այս վարժությունը',
  textEs: 'Primero escucha o lee una sola vez. No traduzcas palabra por palabra. Busca solo estas 4 cosas:',
  textHy: 'Սկզբում լսիր կամ կարդա միայն մեկ անգամ։ Բառ առ բառ մի՛ թարգմանիր։ Փորձիր հասկանալ միայն այս 4 բանը․',
  rules: [
    { num: 1, es: '¿Quién?', hy: 'Ո՞վ։' },
    { num: 2, es: '¿Dónde?', hy: 'Որտե՞ղ։' },
    { num: 3, es: '¿Qué pasó?', hy: 'Ի՞նչ եղավ։' },
    { num: 4, es: '¿Qué van a hacer?', hy: 'Ի՞նչ են պատրաստվում անել։' }
  ]
};

export const phrasesData: PhraseExercise[] = [
  {
    id: 1,
    textEs: 'Oye, al final hoy no vamos a jugar al fútbol porque Marcos no puede venir y además está empezando a llover, así que mejor quedamos mañana después de clase.',
    textHy: 'Լսիր, վերջում այսօր ֆուտբոլ չենք խաղալու, որովհետև Մարկոսը չի կարող գալ, բացի այդ անձրև է սկսվում, դրա համար ավելի լավ է վաղը դասից հետո հանդիպենք։',
    questionEs: '¿Qué quiere decir?',
    questionHy: 'Ի՞նչ է ուզում ասել։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'Hoy van a jugar.', hy: 'Այսօր խաղալու են։' },
      { id: 'B', es: 'Hoy no juegan y quedan mañana.', hy: 'Այսօր չեն խաղում և հանդիպում են վաղը։' },
      { id: 'C', es: 'Marcos ya está allí.', hy: 'Մարկոսն արդեն այնտեղ է։' },
      { id: 'D', es: 'Van al colegio.', hy: 'Նրանք դպրոց են գնում։' }
    ]
  },
  {
    id: 2,
    textEs: 'Mañana tenemos matemáticas a primera hora, pero la profesora ha dicho que no hace falta traer el libro porque vamos a trabajar con unas hojas que nos dará en clase.',
    textHy: 'Վաղը առաջին դասը մաթեմատիկա է, բայց ուսուցչուհին ասել է, որ գիրքը բերել պետք չէ, որովհետև դասարանում թերթիկներով ենք աշխատելու։',
    questionEs: '¿Qué hay que hacer?',
    questionHy: 'Ի՞նչ պետք է անել։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'Llevar dos libros.', hy: 'Երկու գիրք բերել։' },
      { id: 'B', es: 'No llevar el libro de matemáticas.', hy: 'Մաթեմատիկայի գիրքը չբերել։' },
      { id: 'C', es: 'No ir a clase.', hy: 'Դասի չգնալ։' },
      { id: 'D', es: 'Hacer los deberes en casa.', hy: 'Տանը տնային անել։' }
    ]
  },
  {
    id: 3,
    textEs: 'Si quieres venir con nosotros al centro comercial, tienes que avisar a tus padres porque seguramente vamos a volver bastante tarde.',
    textHy: 'Եթե ուզում ես մեզ հետ առևտրի կենտրոն գալ, պետք է ծնողներիդ տեղեկացնես, որովհետև հավանաբար բավականին ուշ ենք վերադառնալու։',
    questionEs: '¿Qué debe hacer primero?',
    questionHy: 'Սկզբում ի՞նչ պետք է անի։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'Comprar algo.', hy: 'Ինչ-որ բան գնել։' },
      { id: 'B', es: 'Llamar o avisar a sus padres.', hy: 'Զանգել կամ ասել ծնողներին։' },
      { id: 'C', es: 'Volver ahora.', hy: 'Հիմա վերադառնալ։' },
      { id: 'D', es: 'Ir solo.', hy: 'Մենակ գնալ։' }
    ]
  },
  {
    id: 4,
    textEs: 'No he entendido muy bien lo que ha explicado el profesor porque estaba hablando bastante rápido y algunos compañeros también estaban haciendo ruido.',
    textHy: 'Ես լավ չհասկացա, թե ինչ էր բացատրում ուսուցիչը, որովհետև նա բավականին արագ էր խոսում, իսկ որոշ դասընկերներ էլ աղմկում էին։',
    questionEs: '¿Por qué no ha entendido?',
    questionHy: 'Ինչո՞ւ չի հասկացել։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'Porque no estaba en clase.', hy: 'Որովհետև դասին չէր։' },
      { id: 'B', es: 'Porque el profesor hablaba rápido y había ruido.', hy: 'Որովհետև ուսուցիչը արագ էր խոսում և աղմուկ կար։' },
      { id: 'C', es: 'Porque no tenía libro.', hy: 'Որովհետև գիրք չուներ։' },
      { id: 'D', es: 'Porque tenía hambre.', hy: 'Որովհետև քաղցած էր։' }
    ]
  },
  {
    id: 5,
    textEs: 'Después del entrenamiento vamos a pasar por una cafetería que está cerca del campo, pero yo no me puedo quedar mucho rato porque mis padres me esperan en casa.',
    textHy: 'Մարզումից հետո գնալու ենք խաղադաշտի մոտ գտնվող սրճարան, բայց ես երկար չեմ կարող մնալ, որովհետև ծնողներս ինձ տանն են սպասում։',
    questionEs: '¿Qué va a hacer?',
    questionHy: 'Ի՞նչ է անելու։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'No va a la cafetería.', hy: 'Սրճարան չի գնալու։' },
      { id: 'B', es: 'Va, pero se queda poco tiempo.', hy: 'Գնալու է, բայց քիչ է մնալու։' },
      { id: 'C', es: 'Se queda toda la noche.', hy: 'Ամբողջ գիշեր մնալու է։' },
      { id: 'D', es: 'Va directamente a entrenar otra vez.', hy: 'Նորից մարզման է գնալու։' }
    ]
  },
  {
    id: 6,
    textEs: 'Creo que he dejado mi sudadera en el vestuario, porque cuando salí del entrenamiento llevaba solo la camiseta y no recuerdo haberla metido en la mochila.',
    textHy: 'Կարծում եմ՝ սպորտային բաճկոնս հանդերձարանում եմ թողել, որովհետև մարզումից դուրս գալիս միայն շապիկով էի և չեմ հիշում, որ այն ուսապարկիս մեջ դրել եմ։',
    questionEs: '¿Dónde cree que está la sudadera?',
    questionHy: 'Որտե՞ղ է կարծում՝ բաճկոնը։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'En casa.', hy: 'Տանը։' },
      { id: 'B', es: 'En el vestuario.', hy: 'Հանդերձարանում։' },
      { id: 'C', es: 'En el autobús.', hy: 'Ավտոբուսում։' },
      { id: 'D', es: 'En clase.', hy: 'Դասարանում։' }
    ]
  },
  {
    id: 7,
    textEs: 'Mi madre me ha dicho que puedo ir al partido, pero solo si termino los deberes antes de las cinco y dejo preparada la mochila para mañana.',
    textHy: 'Մայրս ասել է, որ կարող եմ գնալ խաղին, բայց միայն այն դեպքում, եթե մինչև ժամը հինգը ավարտեմ տնայիններս և վաղվա համար ուսապարկս պատրաստեմ։',
    questionEs: '¿Cuándo puede ir al partido?',
    questionHy: 'Ե՞րբ կարող է գնալ խաղին։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'Siempre.', hy: 'Միշտ։' },
      { id: 'B', es: 'Si termina sus tareas antes.', hy: 'Եթե նախ ավարտի իր գործերը։' },
      { id: 'C', es: 'Solo si no hace los deberes.', hy: 'Միայն եթե տնայինը չանի։' },
      { id: 'D', es: 'Mañana por la mañana.', hy: 'Վաղը առավոտյան։' }
    ]
  },
  {
    id: 8,
    textEs: 'Al final hemos cambiado de plan porque el cine estaba lleno, así que hemos comprado algo de comer y nos hemos ido al parque.',
    textHy: 'Վերջում ծրագիրը փոխեցինք, որովհետև կինոթատրոնը լիքն էր, դրա համար ուտելու բան գնեցինք և գնացինք այգի։',
    questionEs: '¿Qué pasó?',
    questionHy: 'Ի՞նչ եղավ։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'Vieron una película.', hy: 'Ֆիլմ դիտեցին։' },
      { id: 'B', es: 'Fueron al parque porque no pudieron entrar al cine.', hy: 'Այգի գնացին, որովհետև չկարողացան կինոթատրոն մտնել։' },
      { id: 'C', es: 'Volvieron a casa.', hy: 'Տուն վերադարձան։' },
      { id: 'D', es: 'Fueron al colegio.', hy: 'Դպրոց գնացին։' }
    ]
  },
  {
    id: 9,
    textEs: 'No hace falta que me esperéis delante del colegio porque hoy mi padre viene a recogerme y después vamos directamente al médico.',
    textHy: 'Պետք չէ, որ դպրոցի դիմաց ինձ սպասեք, որովհետև այսօր հայրս գալիս է ինձ վերցնելու, հետո անմիջապես բժշկի ենք գնալու։',
    questionEs: '¿Por qué no deben esperarle?',
    questionHy: 'Ինչո՞ւ չպետք է սպասեն նրան։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'Porque no va al colegio.', hy: 'Որովհետև դպրոց չի գնում։' },
      { id: 'B', es: 'Porque su padre viene a buscarlo.', hy: 'Որովհետև հայրը գալիս է նրան վերցնելու։' },
      { id: 'C', es: 'Porque va andando.', hy: 'Որովհետև ոտքով է գնում։' },
      { id: 'D', es: 'Porque está jugando.', hy: 'Որովհետև խաղում է։' }
    ]
  },
  {
    id: 10,
    textEs: 'Aunque mañana no tenemos examen, quiero repasar un poco esta tarde porque todavía hay algunas cosas que no entiendo muy bien.',
    textHy: 'Չնայած վաղը քննություն չունենք, ուզում եմ այսօր կեսօրից հետո մի քիչ կրկնել, որովհետև դեռ կան բաներ, որոնք լավ չեմ հասկանում։',
    questionEs: '¿Por qué quiere estudiar?',
    questionHy: 'Ինչո՞ւ է ուզում սովորել։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'Porque tiene examen hoy.', hy: 'Որովհետև այսօր քննություն ունի։' },
      { id: 'B', es: 'Porque todavía no entiende algunas cosas.', hy: 'Որովհետև դեռ որոշ բաներ չի հասկանում։' },
      { id: 'C', es: 'Porque no tiene clase.', hy: 'Որովհետև դաս չունի։' },
      { id: 'D', es: 'Porque sus amigos estudian.', hy: 'Որովհետև ընկերներն են սովորում։' }
    ]
  },
  {
    id: 11,
    textEs: 'Cuando termine el partido, escríbeme por WhatsApp y dime dónde estáis, porque seguramente llegaré un poco más tarde que vosotros.',
    textHy: 'Երբ խաղը վերջանա, WhatsApp-ով գրիր ինձ և ասա, թե որտեղ եք, որովհետև հավանաբար ձեզնից մի քիչ ուշ եմ հասնելու։',
    questionEs: '¿Qué tiene que hacer el amigo?',
    questionHy: 'Ընկերը ի՞նչ պետք է անի։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'Llamarle antes del partido.', hy: 'Խաղից առաջ զանգել։' },
      { id: 'B', es: 'Escribirle después y decir dónde están.', hy: 'Խաղից հետո գրել և ասել՝ որտեղ են։' },
      { id: 'C', es: 'Irse a casa.', hy: 'Տուն գնալ։' },
      { id: 'D', es: 'Esperar dentro del colegio.', hy: 'Դպրոցի ներսում սպասել։' }
    ]
  },
  {
    id: 12,
    textEs: 'No sé si podré ir mañana porque por la mañana tengo entrenamiento y por la tarde quizá venga mi primo a casa.',
    textHy: 'Չգիտեմ՝ վաղը կկարողանամ գալ, թե ոչ, որովհետև առավոտյան մարզում ունեմ, իսկ կեսօրից հետո հնարավոր է զարմիկս մեր տուն գա։',
    questionEs: '¿Está seguro de que va a ir?',
    questionHy: 'Վստա՞հ է, որ գնալու է։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'Sí.', hy: 'Այո։' },
      { id: 'B', es: 'No, todavía no lo sabe.', hy: 'Ոչ, դեռ չգիտի։' },
      { id: 'C', es: 'No quiere ir nunca.', hy: 'Երբեք չի ուզում գնալ։' },
      { id: 'D', es: 'Ya está allí.', hy: 'Արդեն այնտեղ է։' }
    ]
  },
  {
    id: 13,
    textEs: 'El entrenador ha dicho que lleguemos quince minutos antes porque quiere explicarnos una cosa importante antes de empezar el partido.',
    textHy: 'Մարզիչն ասել է, որ տասնհինգ րոպե շուտ հասնենք, որովհետև խաղը սկսելուց առաջ ուզում է մի կարևոր բան բացատրել։',
    questionEs: '¿Qué deben hacer?',
    questionHy: 'Ի՞նչ պետք է անեն։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'Llegar tarde.', hy: 'Ուշանալ։' },
      { id: 'B', es: 'Llegar quince minutos antes.', hy: 'Տասնհինգ րոպե շուտ հասնել։' },
      { id: 'C', es: 'No jugar.', hy: 'Չխաղալ։' },
      { id: 'D', es: 'Salir antes del partido.', hy: 'Խաղից առաջ գնալ։' }
    ]
  },
  {
    id: 14,
    textEs: 'Me han dicho que mañana va a hacer bastante frío, así que voy a llevar una chaqueta por si tenemos que esperar fuera.',
    textHy: 'Ինձ ասել են, որ վաղը բավականին ցուրտ է լինելու, դրա համար բաճկոն եմ վերցնելու, եթե ստիպված լինենք դրսում սպասել։',
    questionEs: '¿Por qué lleva una chaqueta?',
    questionHy: 'Ինչո՞ւ է բաճկոն վերցնում։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'Porque va a llover seguro.', hy: 'Որովհետև հաստատ անձրև է գալու։' },
      { id: 'B', es: 'Porque puede hacer frío.', hy: 'Որովհետև կարող է ցուրտ լինել։' },
      { id: 'C', es: 'Porque va a nadar.', hy: 'Որովհետև լողալու է։' },
      { id: 'D', es: 'Porque la chaqueta es nueva.', hy: 'Որովհետև բաճկոնը նոր է։' }
    ]
  },
  {
    id: 15,
    textEs: 'Si no entiendes alguna palabra cuando hablen rápido, no hace falta que entiendas todo; intenta escuchar quién, dónde y qué van a hacer.',
    textHy: 'Եթե ինչ-որ բառ չես հասկանում, երբ արագ են խոսում, պարտադիր չէ ամեն ինչ հասկանալ․ փորձիր լսել՝ ով, որտեղ և ինչ է պատրաստվում անել։',
    questionEs: '¿Cuál es la idea principal?',
    questionHy: 'Ո՞րն է հիմնական միտքը։',
    correctOptionId: 'B',
    options: [
      { id: 'A', es: 'Hay que entender cada palabra.', hy: 'Պետք է հասկանալ ամեն բառ։' },
      { id: 'B', es: 'Es mejor captar la idea principal.', hy: 'Ավելի կարևոր է հասկանալ հիմնական իմաստը։' },
      { id: 'C', es: 'No hay que escuchar.', hy: 'Պետք չէ լսել։' },
      { id: 'D', es: 'Hay que responder muy rápido.', hy: 'Պետք է շատ արագ պատասխանել։' }
    ]
  }
];
