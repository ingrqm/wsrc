import { languageList } from '@forms/SignUp/SignUp.data';
import {
  arAdultPdf,
  enAdultPdf,
  enChildPdf,
  enTeenagerPdf,
  esAdultPdf,
  frAdultPdf,
  frChildPdf,
  frTeenagerPdf,
  itAdultPdf,
  jaAdultPdf,
  plAdultPdf,
  ptAdultPdf,
  ruAdultPdf,
  zhAdultPdf,
} from 'assets/books';
import { age } from 'consts';

const competition = {
  [languageList[0].code]: {
    [age.adult]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: '',
      book: zhAdultPdf,
    },
  },
  [languageList[1].code]: {
    [age.adult]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: 53771,
      book: plAdultPdf,
    },
  },
  [languageList[2].code]: {
    [age.child]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: '',
      book: enChildPdf,
    },
    [age.teenager]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: '',
      book: enTeenagerPdf,
    },
    [age.adult]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: 64977,
      book: enAdultPdf,
    },
  },
  [languageList[3].code]: {
    [age.child]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: '',
      book: frChildPdf,
    },
    [age.teenager]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: '',
      book: frTeenagerPdf,
    },
    [age.adult]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: 68072,
      book: frAdultPdf,
    },
  },
  [languageList[4].code]: {
    [age.adult]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: 61923,
      book: itAdultPdf,
    },
  },
  [languageList[5].code]: {
    [age.adult]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: '',
      book: ptAdultPdf,
    },
  },
  [languageList[6].code]: {
    [age.adult]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: 66227,
      book: esAdultPdf,
    },
  },
  [languageList[7].code]: {
    [age.adult]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: '',
      book: jaAdultPdf,
    },
  },
  [languageList[8].code]: {
    [age.adult]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: '',
      book: arAdultPdf,
    },
  },
  [languageList[9].code]: {
    [age.adult]: {
      start: 'Sun, 30 May 2021 14:00:00',
      words: '',
      book: ruAdultPdf,
    },
  },
};

export { competition };
