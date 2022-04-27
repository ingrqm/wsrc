import { Outlet, useParams } from 'react-router-dom';
import { fetchResultDetails, ResultDetailsRet } from 'api';
import { competitionAtom } from 'atoms/competition';
import { timeAtom } from 'atoms/time';
import { QueryKey } from 'enums';
import { useQueryWithError } from 'hooks';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { PrivateWrapper } from 'components';
import { Content } from './championship.styled';
import { Header } from './components';

type Params = {
  id?: string;
};

const Championship = () => {
  const [competition, setCompetition] = useRecoilState(competitionAtom);
  const setTime = useSetRecoilState(timeAtom);
  const { id } = useParams() as Params;

  useQueryWithError<ResultDetailsRet, Error>(
    QueryKey.resultDetails,
    () => fetchResultDetails({ id: Number(id) || (competition.id as number) }),
    {
      enabled: Boolean(competition.id),
      onSuccess: ({ time, ...response }) => {
        setCompetition(response);
        setTime(new Date(time));
      },
    }
  );

  return (
    <PrivateWrapper>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </PrivateWrapper>
  );
};

export default Championship;
