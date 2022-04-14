import { useLocation } from 'react-router-dom';
import { competitionAtom } from 'atoms/competition';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import { Timer } from './components';
import { ChampionshipStep } from './header.enum';
import { Navbar, Wrapper } from './header.styled';

const Header = () => {
  const location = useLocation();
  const competition = useRecoilValue(competitionAtom);

  return (
    <Wrapper>
      <Navbar>
        {competition?.startReading && location.pathname === appUrls.championship.reading && (
          <Timer type={ChampionshipStep.startReading} />
        )}
        {competition?.startTest && location.pathname === appUrls.championship.test && (
          <Timer type={ChampionshipStep.startTest} />
        )}
      </Navbar>
    </Wrapper>
  );
};

export default Header;
