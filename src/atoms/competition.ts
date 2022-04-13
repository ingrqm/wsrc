import { ResultDetailsRet } from 'api';
import { atom } from 'recoil';

export type CompetitionAtom = Partial<ResultDetailsRet>;

export const initialCompetitionAtom: CompetitionAtom = {};

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
