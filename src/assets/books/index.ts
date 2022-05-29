import { Age, LanguageChampionship } from 'enums';
import arBook from './ar.pdf';
import enAdultBook from './en-adult.pdf';
import enChildBook from './en-child.pdf';
import enTeenBook from './en-teen.pdf';
import esAdultBook from './es-adult.pdf';
import esChildBook from './es-child.pdf';
import esTeenBook from './es-teen.pdf';
import frAdultBook from './fr-adult.pdf';
import frChildBook from './fr-child.pdf';
import frTeenBook from './fr-teen.pdf';
import plAdultBook from './pl-adult.pdf';
import plChildBook from './pl-child.pdf';
import plTeenBook from './pl-teen.pdf';

export default {
  [LanguageChampionship.ar]: {
    [Age.child]: {
      file: arBook,
      words: 33378,
      chapters: [2, 9, 14, 20, 33, 36, 42, 47, 51, 58, 64],
      questions: {
        roleKirah: `ما هو دور كيرة في مدينتها؟`,
        heritageOfKirah: `ما هو تراث عائلة كيرة؟`,
        colorRepresentPicture: `ماذا يمثل كل لون في صورة الأجداد؟`,
        hoodedCommunity: `لماذا يطلق عليهم مجتمع أغطية الرأس؟`,
        locationSupplies: `من أين يأتي الأكسجين والخضروات والفواكه التي يستهلكها هؤلاء السكان؟`,
        howOldIsMahai: `كم عمر ماهاي ابنة كيرا؟`,
        whatHappened: `ماذا حدث للعالم؟`,
        nameMihaiCamel: `ما هو اسم الجمل الخيالي لـماهاي؟`,
        typeDiet: `ما نوع النظام الغذائي للسكان؟`,
        aliceJob: `ما هي وظيفة أليس؟`,
        howManyProtectors: `كم عدد الحماة في هذا المجتمع؟`,
        subjectProtectorsMeetings: `ما موضوع لقاء الحماة؟`,
        // nameKirahBoyfriend: `ما هو اسم عشيق كيرا؟`,
        // methodProtectors: `ما هي الطريقة التي يستخدمها الحماة للتفكير في الأمور؟`,
        // decision: `ما هو القرار الذي يجب أن يتخذونه؟`,
      },
    },
    [Age.teen]: {
      file: arBook,
      words: 33378,
      chapters: [2, 9, 14, 20, 33, 36, 42, 47, 51, 58, 64],
      questions: {
        roleKirah: `ما هو دور كيرة في مدينتها؟`,
        heritageOfKirah: `ما هو تراث عائلة كيرة؟`,
        colorRepresentPicture: `ماذا يمثل كل لون في صورة الأجداد؟`,
        hoodedCommunity: `لماذا يطلق عليهم مجتمع أغطية الرأس؟`,
        locationSupplies: `من أين يأتي الأكسجين والخضروات والفواكه التي يستهلكها هؤلاء السكان؟`,
        howOldIsMahai: `كم عمر ماهاي ابنة كيرا؟`,
        whatHappened: `ماذا حدث للعالم؟`,
        nameMihaiCamel: `ما هو اسم الجمل الخيالي لـماهاي؟`,
        typeDiet: `ما نوع النظام الغذائي للسكان؟`,
        aliceJob: `ما هي وظيفة أليس؟`,
        howManyProtectors: `كم عدد الحماة في هذا المجتمع؟`,
        subjectProtectorsMeetings: `ما موضوع لقاء الحماة؟`,
        nameKirahBoyfriend: `ما هو اسم عشيق كيرا؟`,
        methodProtectors: `ما هي الطريقة التي يستخدمها الحماة للتفكير في الأمور؟`,
        decision: `ما هو القرار الذي يجب أن يتخذونه؟`,
      },
    },
    [Age.adult]: {
      file: arBook,
      words: 33378,
      chapters: [2, 9, 14, 20, 33, 36, 42, 47, 51, 58, 64],
      questions: {
        roleKirah: `ما هو دور كيرة في مدينتها؟`,
        heritageOfKirah: `ما هو تراث عائلة كيرة؟`,
        colorRepresentPicture: `ماذا يمثل كل لون في صورة الأجداد؟`,
        hoodedCommunity: `لماذا يطلق عليهم مجتمع أغطية الرأس؟`,
        locationSupplies: `من أين يأتي الأكسجين والخضروات والفواكه التي يستهلكها هؤلاء السكان؟`,
        howOldIsMahai: `كم عمر ماهاي ابنة كيرا؟`,
        whatHappened: `ماذا حدث للعالم؟`,
        nameMihaiCamel: `ما هو اسم الجمل الخيالي لـماهاي؟`,
        typeDiet: `ما نوع النظام الغذائي للسكان؟`,
        aliceJob: `ما هي وظيفة أليس؟`,
        howManyProtectors: `كم عدد الحماة في هذا المجتمع؟`,
        subjectProtectorsMeetings: `ما موضوع لقاء الحماة؟`,
        nameKirahBoyfriend: `ما هو اسم عشيق كيرا؟`,
        methodProtectors: `ما هي الطريقة التي يستخدمها الحماة للتفكير في الأمور؟`,
        decision: `ما هو القرار الذي يجب أن يتخذونه؟`,
      },
    },
  },
  [LanguageChampionship.es]: {
    [Age.child]: {
      file: esChildBook,
      words: 13783,
      chapters: [],
      questions: {
        pipinsHobby: `¿Cuál es la afición del Pipin?`,
        whyMakeBeetle: `¿Por qué hizo un escarabajo?`,
        characterPipinAndPepin: `Describe el carácter de Pipín y Pepina.`,
        twoTwins: `¿Los dos gemelos están entusiasmados o tienen miedo de la mudanza?`,
        directionNomsaFamily: `¿Cuál es la dirección de la familia Nomsa?`,
        whoGogu: `¿Quién es Gogu?`,
        whereNewHome: `¿Dónde está el nuevo hogar de la familia?`,
        isThereLibrary: `¿Hay una biblioteca en el asentamiento?`,
        jobSappi: `¿Cuál es el trabajo de Sappi?`,
        manageTwins: `¿Lograron los gemelos conseguir nuevos amigos?`,
        howManyAunts: `¿Cuántas tías tiene la nueva amiga de Pipina?`,
        whatPipPlayingWithFriend: `¿A qué juega Pip con su nuevo amigo?`,
      },
    },
    [Age.teen]: {
      file: esTeenBook,
      words: 37781,
      chapters: [1, 6, 10, 15, 24, 28, 34, 39, 43, 50, 56],
      questions: {
        roleKirah: `¿Cuál es el papel de Kirah en su ciudad?`,
        heritageOfKirah: `¿Cuál es la herencia de la familia de Kirah?`,
        colorRepresentPicture: `¿Qué representa cada color en la imagen de los antepasados?`,
        hoodedCommunity: `¿Por qué se les llama la comunidad de encapuchados?`,
        locationSupplies: `¿De dónde procede el oxígeno, las verduras y las frutas que consume esta población?`,
        howOldIsMahai: `¿Qué edad tiene Mahai?`,
        whatHappened: `¿Qué ha pasado con el mundo?`,
        nameMihaiCamel: `¿Cómo se llama el camello imaginario de Mahai?`,
        typeDiet: `¿Qué tipo de dieta tienen los bonetes?`,
        aliceJob: `¿Cuál es el trabajo de Alice?`,
        howManyProtectors: `¿Cuántos protectores hay en esta comunidad?`,
        subjectProtectorsMeetings: `¿Cuál es el tema de las reuniones de los protectores?`,
        nameKirahBoyfriend: `¿Cómo se llama el novio de Kirah?`,
        methodProtectors: `¿Qué método utilizan los Protectores para pensar las cosas?`,
        decision: `¿Qué decisión toman?`,
      },
    },
    [Age.adult]: {
      file: esAdultBook,
      words: 65717,
      chapters: [8, 20, 30, 44, 56, 71, 87, 117, 132, 149, 163],
      questions: {
        whereAioEnd: `Dónde acabó Aio cuando se despertó?`,
        dogClanGoOutside: `Por qué la población del clan canino no puede salir de los límites del clan?`,
        whoCanUsePowerOfDust: `quién puede usar el poder del polvo?`,
        howLongIsConfinement: `cuál es el periodo de contención?`,
        whatAreDooies: `quiénes son los Dooies?`,
        whoChoseDogClan: `Quién es el elegido del clan de los perros?`,
        clanExchange: `Cuáles son los intercambios entre los dos clanes?`,
        gameLand: `cuál es el objetivo de ir a Gameland?`,
        nightWalkers: `Por qué los caminantes nocturnos no pueden funcionar durante el día?`,
        whoHelpedAio: `Quién ayudó a Aio a llegar a gamesland?`,
        grandmotherKnow: `cómo sabe la abuela que todavía hay polvo en el aire?`,
        powerSource: `cuál es la fuente de energía de la ciudad?`,
        moonBurn: `por qué la bruja de la luna quema los edificios?`,
        buyApartment: `Ha conseguido Aio comprar un piso?`,
        securityItems: `Qué elemento de seguridad lleva Karan?`,
        truthWitch: `cuál es la verdad sobre la bruja Eco`,
        powerSourceBeforeExplosion: `cuál era la fuente de energía antes de la explosión?`,
        machineAio: `qué tipo de máquina era Aio?`,
        findChip: `qué encontró en el chip?`,
        whoIsAlan: `quién es Alan T. Ring`,
      },
    },
  },
  [LanguageChampionship.pl]: {
    [Age.child]: {
      file: plChildBook,
      words: 11111,
      chapters: [],
      questions: {
        pipinsHobby: `Jakie jest hobby Pipina?`,
        whyMakeBeetle: `Dlaczego stworzył chrząszcza?`,
        characterPipinAndPepin: `Opisz postacie Pipina i Pepiny.`,
        twoTwins: `Czy bliźniaki są entuzjastycznie nastawione do przeprowadzki, czy się jej obawiają?`,
        directionNomsaFamily: `W jakim kierunku zmierza rodzina Nomsa?`,
        whoGogu: `Kim jest Gogu?`,
        whereNewHome: `Gdzie znajduje się nowy dom rodziny?`,
        isThereLibrary: `Czy w osadzie znajduje się biblioteka?`,
        jobSappi: `Czym zajmuje się Sappi?`,
        manageTwins: `Czy bliźniakom udało się zdobyć nowych przyjaciół?`,
        howManyAunts: `Ile ciotek ma nowa przyjaciółka Pipiny?`,
        whatPipPlayingWithFriend: `W co bawi się Pip ze swoim nowym przyjacielem?`,
      },
    },
    [Age.teen]: {
      file: plTeenBook,
      words: 31786,
      chapters: [1, 6, 10, 15, 24, 28, 34, 39, 43, 50, 56],
      questions: {
        roleKirah: `Jaką rolę pełni Kirah w swoim mieście?`,
        heritageOfKirah: `Jakie jest dziedzictwo rodziny Kirah?`,
        colorRepresentPicture: `Co przedstawia każdy kolor na obrazku przedstawiającym przodków?`,
        hoodedCommunity: `Dlaczego nazywa się ich wspólnotą zakapturzonych?`,
        locationSupplies: `Skąd pochodzi tlen, warzywa i owoce spożywane przez tę populację?`,
        howOldIsMahai: `Ile lat ma Mahai?`,
        whatHappened: `Co się stało ze światem?`,
        nameMihaiCamel: `Jak nazywa się wymyślony wielbłąd Mahai?`,
        typeDiet: `Jaką dietę stosują maski?`,
        aliceJob: `Czym zajmuje się Alicja?`,
        howManyProtectors: `Ilu obrońców jest w tej wspólnocie?`,
        subjectProtectorsMeetings: `Co jest tematem spotkań Protektorów?`,
        nameKirahBoyfriend: `Jak ma na imię chłopak Kirah?`,
        methodProtectors: `Jakiej metody używają Protektorzy, aby przemyśleć pewne sprawy?`,
        decision: `Jaką decyzję podejmują?`,
      },
    },
    [Age.adult]: {
      file: plAdultBook,
      words: 53513,
      chapters: [8, 20, 30, 44, 56, 71, 87, 117, 132, 149, 163],
      questions: {
        whereAioEnd: `Gdzie znajdowała się Aio po przebudzeniu?`,
        dogClanGoOutside: `Dlaczego ludzie z klanu psów nie mogą wychodzić poza granice klanu?`,
        whoCanUsePowerOfDust: `Kto może korzystać z mocy pyłu?`,
        howLongIsConfinement: `Jak długi jest okres hermetyzacji?`,
        whatAreDooies: `Kim są Dooies?`,
        whoChoseDogClan: `Kto jest wybrańcem psiego klanu?`,
        clanExchange: `Na czym polega wymiana między dwoma klanami (psów i drzew)?`,
        gameLand: `Jaki jest cel (dla Aio) udania się do Gamelandu?`,
        nightWalkers: `Dlaczego nocni wędrowcy nie mogą funkcjonować w ciągu dnia?`,
        whoHelpedAio: `Kto pomógł Aio dostać się do krainy gier?`,
        grandmotherKnow: `Skąd babcia wie, że w powietrzu wciąż unosi się pył?`,
        powerSource: `Jakie jest źródło zasilania miasta?`,
        moonBurn: `Dlaczego księżycowa czarownica pali budynki?`,
        buyApartment: `Czy Aio zdołał kupić mieszkanie?`,
        securityItems: `Jaki przedmiot bezpieczeństwa ma przy sobie Karan?`,
        truthWitch: `Jaka jest prawda o czarownicy Eco?`,
        powerSourceBeforeExplosion: `Jakie było źródło zasilania przed wybuchem?`,
        machineAio: `Jakim typem maszyny było Aio?`,
        findChip: `Co Aio znalazł w chipie?`,
        whoIsAlan: `Kim jest Alan T. Ring?`,
      },
    },
  },
  [LanguageChampionship.en]: {
    [Age.child]: {
      file: enChildBook,
      words: 13745,
      chapters: [],
      questions: {
        pipinsHobby: `What is Pipin's hobby?`,
        whyMakeBeetle: `Why did he make a beetle?`,
        characterPipinAndPepin: `Describe the character of Pipin and Pepina.`,
        twoTwins: `Are the two twins enthusiastic or afraid of the move?`,
        directionNomsaFamily: `What is the direction of the Nomsa family?`,
        whoGogu: `Who is Gogu?`,
        whereNewHome: `Where is the family's new home?`,
        isThereLibrary: `Is there a library in the colony?`,
        jobSappi: `What is Sappi's job?`,
        manageTwins: `Did the twins manage to get new friends?`,
        howManyAunts: `How many aunts does Pipina's new friend have?`,
        whatPipPlayingWithFriend: `What is Pip playing with her new friend?`,
      },
    },
    [Age.teen]: {
      file: enTeenBook,
      words: 38950,
      chapters: [1, 6, 10, 15, 24, 28, 34, 39, 43, 50, 56],
      questions: {
        roleKirah: `What is Kirah's role in his city?`,
        heritageOfKirah: `What is the heritage of Kirah's family?`,
        colorRepresentPicture: `What does each color represent in the picture of the ancestors?`,
        hoodedCommunity: `Why are they called the hooded community?`,
        locationSupplies: `Where does the oxygen, vegetables and fruits consumed by this population come from?`,
        howOldIsMahai: `How old is Mahai?`,
        whatHappened: `What happened to the world?`,
        nameMihaiCamel: `What is the name of Mahai's imaginary camel?`,
        typeDiet: `What type of diet do the hoods eat?`,
        aliceJob: `What is Alice's job?`,
        howManyProtectors: `How many protectors exist in this community?`,
        subjectProtectorsMeetings: `What is the subject of the protectors' meetings?`,
        nameKirahBoyfriend: `What is the name of Kirah's boyfriend?`,
        methodProtectors: `What method do the Protectors use to think things through?`,
        decision: `What decision do they make?`,
      },
    },
    [Age.adult]: {
      file: enAdultBook,
      words: 67290,
      chapters: [3, 5, 8, 20, 30, 44, 56, 71, 87, 117, 132, 149, 163],
      questions: {
        whereAioEnd: `Where did Aio end up when she woke up?`,
        dogClanGoOutside: `Why can't the people of the dog clan go outside the clan boundaries?`,
        whoCanUsePowerOfDust: `Who can use the power of dust?`,
        howLongIsConfinement: `How long is the confinement period?`,
        whatAreDooies: `What are the Dooies?`,
        whoChoseDogClan: `Who is the chosen one of the dog clan?`,
        clanExchange: `What are the exchanges between the clan of dogs and the clan of trees?`,
        gameLand: `What is the purpose of going in Gameland?`,
        nightWalkers: `Why can't the night walkers work during the day?`,
        whoHelpedAio: `Who helped Aio to get to gamesland?`,
        grandmotherKnow: `How does the grandmother know that there is still dust in the air?`,
        powerSource: `What is the power source of the city?`,
        moonBurn: `Why does the moon witch burn the buildings?`,
        buyApartment: `Did Aio manage to buy an apartment?`,
        securityItems: `What security item does Karan carry?`,
        truthWitch: `What is the truth of the witch Eco?`,
        powerSourceBeforeExplosion: `What was the power source before the explosion?`,
        machineAio: `What kind of machine was Aio?`,
        findChip: `What did she find in the chip?`,
        whoIsAlan: `Who is Alan T. Ring`,
      },
    },
  },
  [LanguageChampionship.fr]: {
    [Age.child]: {
      file: frChildBook,
      words: 14471,
      chapters: [],
      questions: {
        pipinsHobby: `Quel est le loisir du Pipin ?`,
        whyMakeBeetle: `Pourquoi Pipin a fabriqué un scarabée ?`,
        characterPipinAndPepin: `Décrit le caractère de Pipin et de Pepina.`,
        twoTwins: `Les deux jumeaux sont-ils enthousiastes ou ont-ils peur du déménagement ?`,
        directionNomsaFamily: `Quelle est la direction de la famille de Nomsa ?`,
        whoGogu: `Qui est Gogu ?`,
        whereNewHome: `Où se trouve la nouvelle maison de la famille ?`,
        isThereLibrary: `Est ce qu'il y a une bibliothèque dans la colonie ?`,
        jobSappi: `Quel est le métier de Sappi ?`,
        manageTwins: `Est ce que les jumeaux ont réussi d'avoir des nouveaux amis ?`,
        howManyAunts: `La nouvelle amie de Pipina a combien de tante ?`,
        whatPipPlayingWithFriend: `A quoi joue Pip avec son nouvel ami ?`,
      },
    },
    [Age.teen]: {
      file: frTeenBook,
      words: 40258,
      chapters: [1, 6, 10, 15, 24, 28, 34, 39, 43, 50, 56],
      questions: {
        roleKirah: `Quel est le rôle de Kirah dans sa cité ?`,
        heritageOfKirah: `Quel est l'héritage de la famille de Kirah ?`,
        colorRepresentPicture: `Que représente chaque couleur dans la photo des ancêtres ?`,
        hoodedCommunity: `Pourquoi on les appelle la communauté des capuchons ?`,
        locationSupplies: `D'où vient l'oxygène, les légumes et les fruits consommés par cette population ?`,
        howOldIsMahai: `Quel est l'âge de Mahai ?`,
        whatHappened: `Qu'est-il arrivé au Monde ?`,
        nameMihaiCamel: `Comment s'appelle le dromadaire imaginaire de Mahai ?`,
        typeDiet: `Le type de régime alimentaire des capuchons ?`,
        aliceJob: `Quel est le métier d'Alice ?`,
        howManyProtectors: `Combien de protectrices existent elles dans cette communauté ?`,
        subjectProtectorsMeetings: `Quel est le sujet de réunion des protectrices ?`,
        nameKirahBoyfriend: `Comment s'appelle le petit amoureux de Kirah ?`,
        methodProtectors: `Quelle méthode utilisent les protectrices pour bien réfléchir ?`,
        decision: `Quelle décision prennent elles ? `,
      },
    },
    [Age.adult]: {
      file: frAdultBook,
      words: 72162,
      chapters: [5, 8, 20, 30, 44, 56, 71, 87, 117, 132, 149, 163],
      questions: {
        whereAioEnd: `Où Aio s'est-elle retrouvée quand elle s'est réveillée ?`,
        dogClanGoOutside: `Pourquoi la population du clan des chiens ne peut pas sortir des limites du clan?`,
        whoCanUsePowerOfDust: `Qui peut utiliser le pouvoir de la poussière?`,
        howLongIsConfinement: `Quelle est la durée de confinement ?`,
        whatAreDooies: `Qui sont les Dooies?`,
        whoChoseDogClan: `Qu'il est l'élu du clan des chiens ?`,
        clanExchange: `Quels sont les échanges entre les deux clans ?`,
        gameLand: `Quel est le but d'aller à Gameland?`,
        nightWalkers: `Pourquoi les marcheurs de nuit ne peuvent pas fonctionner pendant la journée ?`,
        whoHelpedAio: `Qui a aidé Aio a accédé au gamesland?`,
        grandmotherKnow: `Comment la grande mère sait qu'l y a encore de la poussière dans l'air?`,
        powerSource: `Quelle est la source d'énergie de la ville?`,
        moonBurn: `Pourquoi la sorcière de la lune brûle les bâtiments?`,
        buyApartment: `Est ce que Aio a réussi d'acheter un appartement ?`,
        securityItems: `Quel objet de sécurité porte Karan ?`,
        truthWitch: `Quelle est la vérité de la sorcière Eco`,
        powerSourceBeforeExplosion: `Quelle était la source d'énergie avant l'explosion?`,
        machineAio: `Quel type de machine était Aio?`,
        findChip: `Qu'est-ce qu'elle a trouvé dans la puce ?`,
        whoIsAlan: `Qui est Alan T. Ring`,
      },
    },
  },
};
