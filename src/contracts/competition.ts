export type CompetitionInitReq = {
  scale: number;
};

export type CompetitionInitRes = void;

export type CompetitionBookReq = void;

export type CompetitionBookRes = void;

export type CompetitionTestReq = {
  answers: {
    [key: string]: string;
  };
};

export type CompetitionTestRes = void;
