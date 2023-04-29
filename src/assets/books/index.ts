import { Age, LanguageChampionship } from 'enums';
import arBook from './ar.pdf';
import enAdultBook from './en-adult.pdf';
import enChildBook from './en-child.pdf';
import esBook from './es.pdf';
import frAdultBook from './fr-adult.pdf';
import frChildBook from './fr-child.pdf';
import plAdultBook from './pl-adult.pdf';
import plChildBook from './pl-child.pdf';
import ptBook from './pt.pdf';
import trAdultBook from './tr-adult.pdf';
import trChildBook from './tr-child.pdf';

const enChildBookInfo = {
  file: enChildBook,
  words: 9932,
  chapters: [],
  questions: {
    mainCharacter: `What is the name of the main character?`,
    colorOfPlanet: `What color is the Wanderer's kingdom?`,
    whichGame: `What game does his Majesty of the Tree Kingdom want to play?`,
    nameOfPrincess: `What is the name of the princess from the Kingdom of Legends?`,
    howManyGirl: `How many daughters does Father An from the legend of the seasons have?`,
    nameOfGirl: `What is the name of the daughter from the legend of the sunflower?`,
    smileFlower: `What comes out of Marc's laughing little flower?`,
    ownerOfBalance: `Who is the owner of the Kingdom of Balance?`,
    planetOfSchools: `Where is the planet of boarding schools located?`,
    whichDay: `What day of the week was September 10, 2335?`,
    hairOfMarc: `What lands in Marc's hair in the Puppet Kingdom?`,
    nameOfToleranceOrganisation: `What is the name of the institution in the Kingdom of Tolerance?`,
  },
};

const championshipEn = {
  [Age.child]: enChildBookInfo,
  [Age.teen]: enChildBookInfo,
  [Age.adult]: {
    file: enAdultBook,
    words: 45780,
    chapters: [],
    questions: {
      aliciaCat: `What is the name of Alicia's cat`,
      trafficAccident: `How long did Alicia spend in a coma after her accident?`,
      protagonistMother: `What was the name and role of the person the protagonists called Mother?`,
      twoMemberChaos: `What two members of the rebellion have the same powers?`,
      firstPersonWithMagic: `Who was the first person to use their powers on Alicia after her coma and memory loss?`,
      malgrivesMagic: `Why did Malgrives naturally gain the power of invisibility?`,
      whereSpaceShip: `Where did the rebels hide the spaceship needed for the return trip?`,
      powerlessMember: `Who at the start was considered to be the weakest of the rebel group?`,
      chaosPlanetPeople: `What are people from the rebel’s planet called?`,
      chaosPlanetFamily: `How many families or clans reside on the rebel’s planet?`,
      romanticCouple: `Within the original 6 rebels, how many romantic couples were there?`,
      strongestFamily: `Which family or clan is the most powerful?`,
      aliciaFearWhenGrow: `What was Alicia’s biggest fear while growing up?`,
      aliciaFearCurrent: `What is Alicia’s current biggest fear?`,
      hajgarPrimaryPower: `What was Hajgar’s primary fighting force?`,
      whichFamilyForCaleb: `Which clan or family is Caleb a part of?`,
      colorOfAuroraHairs: `What hair colour did Aurora have?`,
      hajgarPowers: `What powers did Hajgar posses?`,
      whyHardFind: `Why was it hard for even Hajgar to find the dome?`,
      howToFind: `How did Hajgar find the dome in the end?`,
    },
  },
};

const trChildBookInfo = {
  file: trChildBook,
  words: 6914,
  chapters: [],
  questions: {
    mainCharacter: `Ana karakterin adı nedir?`,
    colorOfPlanet: `Gezginin krallığının rengi nedir?`,
    whichGame: `Ağaç Krallığı'nın Majesteleri hangi oyunu oynamak ister?`,
    nameOfPrincess: `Efsaneler Krallığı'nın prensesinin adı nedir?`,
    howManyGirl: `Mevsimler efsanesindeki Baba An'ın kaç kızı var?`,
    nameOfGirl: `Ayçiçeği efsanesinin kızının adı nedir?`,
    smileFlower: `Marc'ın gülümsüyen küçük çiçeğinden ne çıkar?`,
    ownerOfBalance: `Denge Krallığı'nın sahibi kimdir?`,
    planetOfSchools: `Yatılı okulların gezegeni nerede bulunur?`,
    whichDay: `10 Eylül 2335 hangi gün?`,
    hairOfMarc: `Kukla Krallığı'nda Marc'ın saçlarına ne düşer?`,
    nameOfToleranceOrganisation: `Hoşgörü Krallığı'ndaki kurumun adı nedir?`,
  },
};

const frChildBookInfo = {
  file: frChildBook,
  words: 10277,
  chapters: [],
  questions: {
    mainCharacter: `Quel est le nom du personnage principal?`,
    colorOfPlanet: `De quelle couleur est le royaume du Vagabond?`,
    whichGame: `A quel jeu veut jouer sa Majesté du Royaume Arbre?`,
    nameOfPrincess: `Quel est le prénom de la princesse du Royaume des Légendes?`,
    howManyGirl: `Combien de filles a le père An de la légende des saisons ?`,
    nameOfGirl: `Comment s appelle la fille de la légende du tournesol ?`,
    smileFlower: `Qu'est ce qui sort de la petite fleur riante de Marc?`,
    ownerOfBalance: `Qui est le propriétaire du Royaume de l'équilibre?`,
    planetOfSchools: `Où se situe la planète des internats?`,
    whichDay: `Quel jour de la semaine était le 10 septembre 2335?`,
    hairOfMarc: `Qu'est-ce qui atterit dans les cheveux de Marc au Royaume des marionnettes ?`,
    nameOfToleranceOrganisation: `Comment s'appelle le nom de l'institution au Royaume de la tolérance ?`,
  },
};

const plChildBookInfo = {
  file: plChildBook,
  words: 8229,
  chapters: [],
  questions: {
    mainCharacter: `Jak ma na imię główny bohater?`,
    colorOfPlanet: `Jakiego koloru jest Królestwo Włóczęgów?`,
    whichGame: `W jaką grę chce zagrać Jej Królewska Mość Królestwa Drzew?`,
    nameOfPrincess: `Jak ma na imię księżniczka Królestwa Legend?`,
    howManyGirl: `Ile córek ma Ojciec An z Seasons Legend?`,
    nameOfGirl: `Jak ma na imię córka legendy o słoneczniku?`,
    smileFlower: `Co wychodzi ze śmiejącego się małego kwiatka Marca?`,
    ownerOfBalance: `Kto jest właścicielem Królestwa Równowagi?`,
    planetOfSchools: `Gdzie znajduje się planeta szkoły z internatem?`,
    whichDay: `Jakim dniem tygodnia był 10 września 2335 roku?`,
    hairOfMarc: `Co dostaje się do włosów Marca w Puppet Kingdom?`,
    nameOfToleranceOrganisation: `Jak nazywa się instytucja w Królestwie Tolerancji?`,
  },
};

const arBookInfo = {
  file: arBook,
  words: 45780,
  chapters: [],
  questions: {
    aliciaCat: `ما كان اسم قطّ أليسيا؟`,
    trafficAccident: `كم من الوقت  بقيت أليسيا في غيبوبة بعد الحادث؟`,
    protagonistMother: `ماهو اسم و دور بطلة الرواية التي نناديها أمّي؟`,
    twoMemberChaos: `ما هو اسم المتمرديْن الذيْن يتمتعان بنفس القدرة؟`,
    firstPersonWithMagic: `لماذا يكسب المالغريف بشكل طبيعي القدرة على التّخفي؟`,
    malgrivesMagic: `أين خبّأ المتمردون المركبة الفضائية التي تسمح لهم بالرجوع إلى ديارهم؟`,
    whereSpaceShip: `أين خبّأ المتمردون المركبة الفضائية التي تسمح لهم بالرجوع إلى ديارهم؟`,
    powerlessMember: `في البداية من كان يعتبر الأضعف في مجموعة المتمردين؟`,
    chaosPlanetPeople: ` ما اسم سكّان كوكب المتمرّدين؟`,
    chaosPlanetFamily: `كم عدد العائلات أو العشائر التي تقيم على كوكب المتمرّدين؟`,
    romanticCouple: `كم عدد الأزواج من المتمردين  الذين تمّ تشكيلهم؟`,
    strongestFamily: `أيّ من العائلات أو العشائر التي تملك أكبر قوّة؟`,
    aliciaFearWhenGrow: `عندما كبرت ، مالذي كان  يشكّل أكبر رعب لـ أليسيا؟`,
    aliciaFearCurrent: ` ما الخوف الثّاني الذي هزمته أليسيا؟`,
    hajgarPrimaryPower: `ماهي القوّة الأولى التي طوّرها هاجقار؟`,
    whichFamilyForCaleb: `إلى أيّ عائلة أو عشيرة ينتمي كالب؟`,
    colorOfAuroraHairs: `ما كان لون شعر أورورا؟`,
    hajgarPowers: `ماذا كانت قوى هاجقار؟`,
    whyHardFind: `لماذا كان من الصّعب العثور على القبّة حتّى بالنسبة لـِ هاجقار؟`,
  },
};

const ptBookInfo = {
  file: ptBook,
  words: 9600,
  chapters: [],
  questions: {
    mainCharacter: `Qual é o nome do personagem principal?`,
    colorOfPlanet: `Qual é a cor do reino do Wanderer?`,
    whichGame: `Que jogo o seu Majestade do Reino da Árvore quer jogar?`,
    nameOfPrincess: `Qual é o nome da princesa do Reino das Lendas?`,
    howManyGirl: `Quantas filhas o Pai An, da lenda das estações, tem?`,
    nameOfGirl: `Qual é o nome da filha da lenda do girassol?`,
    smileFlower: `O que sai da pequena flor risonha de Marc?`,
    ownerOfBalance: `Quem é o dono do Reino do Equilíbrio?`,
    planetOfSchools: `Onde fica localizado o planeta das escolas internas?`,
    whichDay: `Que dia da semana foi 10 de setembro de 2335?`,
    hairOfMarc: `O que pousa no cabelo de Marc no Reino das Marionetes?`,
    nameOfToleranceOrganisation: `Qual é o nome da instituição no Reino da Tolerância?`,
  },
};

const esBookInfo = {
  file: esBook,
  words: 9554,
  chapters: [],
  questions: {
    mainCharacter: `¿Cuál es el nombre del personaje principal?`,
    colorOfPlanet: `¿De qué color es el reino del Wanderer?`,
    whichGame: `¿Qué juego quiere jugar su Majestad del Reino del Árbol?`,
    nameOfPrincess: `¿Cuál es el nombre de la princesa del Reino de las Leyendas?`,
    howManyGirl: `¿Cuántas hijas tiene el Padre An de la leyenda de las estaciones?`,
    nameOfGirl: `¿Cuál es el nombre de la hija de la leyenda del girasol?`,
    smileFlower: `¿Qué sale de la pequeña flor risueña de Marc?`,
    ownerOfBalance: `¿Quién es el dueño del Reino del Equilibrio?`,
    planetOfSchools: `¿Dónde está ubicado el planeta de las escuelas internas?`,
    whichDay: `¿Qué día de la semana fue el 10 de septiembre de 2335?`,
    hairOfMarc: `¿Qué aterriza en el cabello de Marc en el Reino de las Marionetas?`,
    nameOfToleranceOrganisation: `¿Cuál es el nombre de la institución en el Reino de la Tolerancia?`,
  },
};

export default {
  [LanguageChampionship.ar]: {
    [Age.child]: arBookInfo,
    [Age.teen]: arBookInfo,
    [Age.adult]: arBookInfo,
  },
  [LanguageChampionship.es]: {
    [Age.child]: esBookInfo,
    [Age.teen]: esBookInfo,
    [Age.adult]: esBookInfo,
  },
  [LanguageChampionship.pl]: {
    [Age.child]: plChildBookInfo,
    [Age.teen]: plChildBookInfo,
    [Age.adult]: {
      file: plAdultBook,
      words: 36186,
      chapters: [],
      questions: {
        aliciaCat: `Jak miał na imię kot Alicji?`,
        trafficAccident: `Jak długo Alicja spędziła w śpiączce po jej wypadku?`,
        protagonistMother: `Jak miała na imię i jaką rolę odgrywała osoba nazywana przez bohaterów Matka`,
        twoMemberChaos: `Którzy dwaj członkowie rebeliantów posiadali te same moce`,
        firstPersonWithMagic: `Kto jako pierwszy użył swoich mocy na Alicji po jej śpiączce i utracie pamięci`,
        malgrivesMagic: `Czemu Malgrives naturalnie wyewoluowały umiejętność stania się niewiedzalnym?`,
        whereSpaceShip: `Gdzie został schowany statek który był potrzebny by rebelianci mogli wrócić do domu?`,
        powerlessMember: `Kto na początku historii był traktowany jako najsłabszy z rebeliantów?`,
        chaosPlanetPeople: `Jak się zwią ludzie z planety rebeliantów`,
        chaosPlanetFamily: `Ile jest klanów lub rodzin na planecie rebeliantów?`,
        romanticCouple: `W śród 6 rebeliantów których poznajemy najpierw, ile było romantycznych związków?`,
        strongestFamily: `Która rodzina lub klan jest najmocniejsza?`,
        aliciaFearWhenGrow: `Co było największym strachem Alicji gdy dorastała`,
        aliciaFearCurrent: `Co jest największym strachem Alicji w dorosłości`,
        hajgarPrimaryPower: `Kim byli żołnierze Hajgara?`,
        whichFamilyForCaleb: `Do ktorej rodziny lub klanu należał Caleb`,
        colorOfAuroraHairs: `Jaki kolor włosów miała Aurora?`,
        hajgarPowers: `Jakie moce miał Hajgar?`,
        whyHardFind: `Czemu było trudno nawet Hajgarowi znaleźć kopułę rebeliantów?`,
        howToFind: `W jaki sposób Hajgar w końcu zdołał odnaleźć kopułę`,
      },
    },
  },
  [LanguageChampionship.en]: championshipEn,
  [LanguageChampionship.tr]: {
    [Age.child]: trChildBookInfo,
    [Age.teen]: trChildBookInfo,
    [Age.adult]: {
      file: trAdultBook,
      words: 31724,
      chapters: [],
      questions: {
        aliciaCat: `Alicia'nın kedisinin adı nedir?`,
        trafficAccident: `Kaza sonrası Alicia komada ne kadar kaldı?`,
        protagonistMother: `Protagonistlerin Annesi olarak adlandırdığı kişinin adı ve rolü nedir?`,
        twoMemberChaos: `İsyanın aynı güçlere sahip olan 2 üyesinin adı nedir?`,
        firstPersonWithMagic: `Koma ve hafıza kaybı yaşayan Alicia üzerinde güçlerini ilk kullanan kişi kimdi?`,
        malgrivesMagic: `Malgrives doğal olarak görünmezlik gücünü neden kazandı?`,
        whereSpaceShip: `İsyancılar, geri dönüş yolculuğu için gereken uzay gemisini nerede sakladı?`,
        powerlessMember: `Başlangıçta, isyancı grubun en zayıfı kimdi?`,
        chaosPlanetPeople: `İsyancıların gezegenindeki insanlara ne denir?`,
        chaosPlanetFamily: `İsyancıların gezegeninde kaç aile veya klan yaşar?`,
        romanticCouple: `Orijinal 6 isyancı arasında kaç romantik çift vardı?`,
        strongestFamily: `Hangi aile veya klan en güçlüdür?`,
        aliciaFearWhenGrow: `Büyürken Alicia'nın en büyük korkusu neydi?`,
        aliciaFearCurrent: `Alicia'nın şu anki en büyük korkusu ne?`,
        hajgarPrimaryPower: `Hajgar'ın birincil savaş gücü neydi?`,
        whichFamilyForCaleb: `Caleb hangi aile veya klanın bir parçasıdır?`,
        colorOfAuroraHairs: `Aurora'nın saç rengi ne?`,
        hajgarPowers: `Hajgar'ın güçleri nelerdi?`,
        whyHardFind: `Hajgar dahil olmak üzere Kubbenin bulunması neden zor?`,
        howToFind: `Hajgar sonunda kubbeyi nasıl buldu?`,
      },
    },
  },
  [LanguageChampionship.pt]: {
    [Age.child]: ptBookInfo,
    [Age.teen]: ptBookInfo,
    [Age.adult]: ptBookInfo,
  },
  [LanguageChampionship.fr]: {
    [Age.child]: frChildBookInfo,
    [Age.teen]: frChildBookInfo,
    [Age.adult]: {
      file: frAdultBook,
      words: 45780,
      chapters: [],
      questions: {
        aliciaCat: `Quel est le nom du chat d’Alicia?`,
        trafficAccident: `Combien de temps Alicia est restée dans le coma après l’accident?`,
        protagonistMother: `Quel est le nom et le rôle de la protagoniste qu’on appelle Maman?`,
        twoMemberChaos: `Comment s'appellent les 2 rebelles qui ont le même pouvoir?`,
        firstPersonWithMagic: `Qui a été la 1ere personne ayant utilisé ses pouvoirs sur Alicia, après son coma et amnésie (perte de mémoire) ?`,
        malgrivesMagic: `Pourquoi les Malgrives gagnaient naturellement le pouvoir d’invisibilité?`,
        whereSpaceShip: `Où les rebelles ont caché le vaisseau spatial leur permettant de retourner chez eux?`,
        powerlessMember: `Au commencement, qui était considéré comme le plus faible du groupe des rebelles?`,
        chaosPlanetPeople: `Comment appelle t-on les habitants de la planète des rebelles?`,
        chaosPlanetFamily: `Combien de familles ou de clans résident sur la planète des rebelles?`,
        romanticCouple: `Combien de couples de rebelles se sont formés?`,
        strongestFamily: `Laquelle des familles ou clan a le plus de pouvoir?`,
        aliciaFearWhenGrow: `En grandissant, quelle a été la plus grande frayeur d’Alicia?`,
        aliciaFearCurrent: `Quelle est la seconde peur qu’ Alicia a vaincue?`,
        hajgarPrimaryPower: `Quelle a été le premier pouvoir développé par Hajgar?`,
        whichFamilyForCaleb: `De quelle famille ou clan fait partie Caleb?`,
        colorOfAuroraHairs: `De quelle couleur sont les cheveux d’Aurora?`,
        hajgarPowers: `Quels étaient les pouvoirs qu’Hagjar ?`,
        whyHardFind: `Pourquoi était-il difficile de trouver le dome, même pour Hajgar?`,
        howToFind: `Comment Hajgar a finalement trouvé le dome?`,
      },
    },
  },
};
