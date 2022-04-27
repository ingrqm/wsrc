import { Age, LanguageChampionship } from 'enums';
import enAdultBook from './en-adult.pdf';
import enChildBook from './en-child.pdf';
import enTeenBook from './en-teen.pdf';
import frAdultBook from './fr-adult.pdf';
import frChildBook from './fr-child.pdf';
import frTeenBook from './fr-teen.pdf';

export default {
  [LanguageChampionship.en]: {
    [Age.child]: {
      file: enChildBook,
      words: 6296,
      chapters: [1, 3, 8, 10, 13, 15, 18, 20, 23, 26],
      questions: {
        keepBooks: `Why does Mr Mach keep the books at home instead of returning them to the library?`,
        peopleInLibrary: `How many people are in the library book club?`,
        characterFalls: `which character often falls asleep?`,
        howLong: `How long is Mr Mach excluded from the library?`,
        rejoinClub: `On what occasion do the members of the book club need Mr Mach to rejoin their book club?`,
        kindOfPasta: `What kind of pasta came with the dish that contained the book that Kika ate at Mr. Mach's house? Mach's house?`,
        whichSession: `During which season does Mrs Floris go to Mr Mach's house to scold him?`,
        oftenWearOnHead: `What does Mr Mach often wear on his head?`,
        whatAnimal: `What animal is on the TV show?`,
        countParticipants: `How many participants are there in the competition?`,
        whatHappens: `What happens to Mr Mach on the day of the competition?`,
        whyHappens: `Why does this happen to him?`,
      },
    },
    [Age.teen]: {
      file: enTeenBook,
      words: 15425,
      chapters: [1, 4, 9, 12, 16, 21, 24, 27, 32, 36, 39, 45, 49, 52],
      questions: {
        eliasAgree: `Why did Elias agree to receive a pen pal in his home?`,
        palComeFrom: `What planet does the pen pal come from?`,
        parentsReaction: `What is the reaction of the parents when Elias tells them that they are going to welcome an alien pen pal into their home? alien pen pal in their home?`,
        palFirstName: `What is the pen pal's first name?`,
        palSkin: `What is the particularity of the pen pal's skin?`,
        schoolSubjectPupils: `What school subject were the pupils in when the headmistress introduced the pen pal to the class on the first day? correspondent to the class on the first day?`,
        firstDay: `On the first day, what was the main dish in the canteen for the pupils of the school? the school?`,
        classEnemies: `Since which class are Elias and Angelo enemies?`,
        gameByTeacher: `Which game is organised by the class teacher to show how to have fun on earth?`,
        suppliesDisappeared: `What school supplies have disappeared from the students' kits and lockers?`,
        whoStoleSupplies: `Who actually stole their school supplies?`,
        thiefPunishment: `What was the punishment for the thief?`,
        giftElias: `What gift does Elias give to his pen pal before returning to his planet?`,
        namePalSister: `What is the name of the pen pal's sister? What is the nickname of the teacher in the teacher's nickname?`,
        nickNameTeacher: `What is the nickname of the class teacher?`,
      },
    },
    [Age.adult]: {
      file: enAdultBook,
      words: 79604,
      chapters: [1, 10, 21, 29, 39, 47, 52, 60, 69, 76, 82, 94, 99, 103, 112, 118, 123, 128, 135, 141],
      questions: {
        novelBegin: `Where does the novel begin?`,
        exhibitPortrait: `Why does Basil not want to exhibit the portrait of Dorian Gray?`,
        sibylProfession: `What is Sibyl Vane's profession?`,
        dorianWantBreakUp: `Why does Dorian want to break up with Sibyl?`,
        firstNameSibylBrother: `What is the first name of Sibyl Vane's brother?`,
        dorianNameByLord: `What is the name given to Lord Henry by Dorian?`,
        sibylBrotherGoTo: `To what country does Sibyl's brother go?`,
        firstDistortion: `What is the first distortion in the painting of Dorian Gray?`,
        basilSeePortrait: `What happens when Basil sees the portrait years later?`,
        whoIsAlan: `Who is Alan Campbell?`,
        howAlanDispose: `How does Alan Campbell dispose of Basil's body?`,
        whereDorianHome: `Where is Dorian's country home?`,
        dorianFaint: `Why does Dorian faint in his country home?`,
        sibylBrother: `What happens to Sibyl Vane's brother?`,
        dorianStayYoung: `How long does Dorian stay young?`,
        dorianNovelByLord: `What kind of novel does Lord Henry give Dorian?`,
        dorianThrowHimself: `Why does Dorian throw himself into his studies?`,
        dorianDrug: `What is Dorian Gray's drug?`,
        dorianAndLordGoOften: `Where do Dorian Gray and Lord Henry Wotton go most often?`,
        whatAtTheEnd: `What happens at the end?`,
      },
    },
  },
  [LanguageChampionship.fr]: {
    [Age.child]: {
      file: frChildBook,
      words: 6296,
      chapters: [5, 9, 14, 17, 20, 23, 27, 30, 34, 38],
      questions: {
        keepBooks: `Pourquoi M. Mach garde-t-il les livres chez lui au lieu de les rendre à la bibliothèque?`,
        peopleInLibrary: `Combien de personnes y a-t-il dans le club de lecture de la bibliothèque ?`,
        characterFalls: `quel personnage s’endort souvent?`,
        howLong: `combien de temps M. Mach est-il exclu de la bibliothèque ?`,
        rejoinClub: `À quelle occasion les membres du club de lecture ont-ils besoin que M. Mach réintègre leur club de lecture?`,
        kindOfPasta: `Quel genre de pâtes accompagnaient le plat qui contenait le livre qu’a mangé Kika chez M. Mach?`,
        whichSession: `Durant quelle saison Mme Floris se rend chez M. Mach pour le gronder ?`,
        oftenWearOnHead: `Que porte souvent Monsieur Mach sur sa tête ?`,
        whatAnimal: `Quel animal présente l'émission de télévision ?`,
        countParticipants: `Combien y a-t-il de participants au concours ?`,
        whatHappens: `Qu’arrive-t-il à M. Mach le jour du concours ?`,
        whyHappens: `Pourquoi lui arrive-t-il une telle situation ?`,
      },
    },
    [Age.teen]: {
      file: frTeenBook,
      words: 15425,
      chapters: [7, 15, 23, 29, 37, 47, 53, 59, 69, 77, 83, 93, 101, 107],
      questions: {
        eliasAgree: `Pourquoi Elias a-t-il accepté de recevoir un correspondant chez lui ?`,
        palComeFrom: `De quelle planète le correspondant vient-il ?`,
        parentsReaction: `Quelle est la réaction des parents lorsque Elias leur annonce qu'ils vont accueillir un correspondant extraterrestre chez eux?`,
        palFirstName: `Quel est le prénom du correspondant ?`,
        palSkin: `Quelle est la particularité de la peau du correspondant ?`,
        schoolSubjectPupils: `Pendant quelle matière scolaire les élèves étaient-ils lorsque la directrice a présenté le correspondant à la classe le premier jour?`,
        firstDay: `Au cours de la première journée, quel était le plat principal à la cantine pour les élèves del'école ?`,
        classEnemies: `Depuis quelle classe Elias et Angelo sont-ils des ennemis ?`,
        gameByTeacher: `Quel jeu est organisé par le maître de la classe pour montrer comment on s'amuse sur terre ?`,
        suppliesDisappeared: `Quelle fourniture scolaire a disparu des trousses et des casiers des élèves ?`,
        whoStoleSupplies: `Qui a réellement volé ses fournitures scolaires ?`,
        thiefPunishment: `Quelle fut la sanction pour le voleur ?`,
        giftElias: `Quel cadeau Elias offre-t-il à son correspondant avant ce retour sur sa planète ?`,
        namePalSister: `Comment s'appelle la sœur du correspondant ?`,
        nickNameTeacher: `Quel est le surnom du professeur de la classe ?`,
      },
    },
    [Age.adult]: {
      file: frAdultBook,
      words: 76217,
      chapters: [2, 12, 25, 35, 46, 56, 62, 71, 82, 90, 96, 110, 115, 121, 130, 138, 145, 151, 159, 166],
      questions: {
        novelBegin: `Où se passe le début du roman ?`,
        exhibitPortrait: `Pourquoi Basil ne veut pas exposer le portrait de Dorian Gray ?`,
        sibylProfession: `Quelle est la profession de Sibyl Vane ?`,
        dorianWantBreakUp: `Pourquoi Dorian veut-il rompre avec Sibyl ?`,
        firstNameSibylBrother: `Quel est le prénom du frère de Sibyl Vane ?`,
        dorianNameByLord: `Quel est le nom donné à Lord Henry par Dorian ?`,
        sibylBrotherGoTo: `Dans quel pays se rend le frère de Sibyl ?`,
        firstDistortion: `Quelle est la première déformation du tableau de Dorian Gray ?`,
        basilSeePortrait: `Que se passe-t-il quand Basil voit le portrait des années après ?`,
        whoIsAlan: `Qui est Alan Campbell ?`,
        howAlanDispose: `Comment Alan Campbell se débarrasse-t-il du corps de Basil ?`,
        whereDorianHome: `Où se trouve la demeure de campagne de Dorian ?`,
        dorianFaint: `Pourquoi Dorian s'évanouit dans sa demeure de campagne ?`,
        sibylBrother: `Qu'arrive-t-il au frère de Sibyl Vane ?`,
        dorianStayYoung: `Combien de temps Dorian reste jeune ?`,
        dorianNovelByLord: `Quel type de roman donne Lord Henry à Dorian ?`,
        dorianThrowHimself: `Pourquoi Dorian se jette-t-il dans les études ?`,
        dorianDrug: `Quelle est la drogue de Dorian Gray ?`,
        dorianAndLordGoOften: `Où vont Dorian Gray et Lord Henry Wotton le plus souvent ?`,
        whatAtTheEnd: `Que se passe -t-il à la fin ?`,
      },
    },
  },
};
