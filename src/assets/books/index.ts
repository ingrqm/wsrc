/* eslint-disable import/no-duplicates */
import { Age, LanguageChampionship } from 'enums';
import enChildBook from './en-adult.pdf';
import enTeenBook from './en-adult.pdf';
import enAdultBook from './en-adult.pdf';
import frChildBook from './en-adult.pdf';
import frTeenBook from './en-adult.pdf';
import frAdultBook from './fr-adult.pdf';

export default {
  [LanguageChampionship.en]: {
    [Age.child]: {
      file: enChildBook,
      chapters: [],
      questions: {},
    },
    [Age.teen]: {
      file: enTeenBook,
      chapters: [],
      questions: {},
    },
    [Age.adult]: {
      file: enAdultBook,
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
      chapters: [],
      questions: {},
    },
    [Age.teen]: {
      file: frTeenBook,
      chapters: [],
      questions: {},
    },
    [Age.adult]: {
      file: frAdultBook,
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
