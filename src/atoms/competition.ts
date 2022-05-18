import { ResultDetailsRet } from 'api';
import { atom } from 'recoil';

export type CompetitionAtom = Partial<ResultDetailsRet>;

export const initialCompetitionAtom: CompetitionAtom = {
  startTest: null,
  endTest: null,
  answers: null,
  reviewers: null,
};

export const competitionAtom = atom({
  key: 'competition',
  default: initialCompetitionAtom,
});

export type SkipCompetitionAtom = Partial<ResultDetailsRet> & {
  skipReading: boolean;
  skipTest: boolean;
};

export const initialSkipCompetitionAtom: SkipCompetitionAtom = {
  skipReading: false,
  skipTest: false,
};

export const skipCompetitionAtom = atom({
  key: 'skipCompetition',
  default: initialSkipCompetitionAtom,
});
