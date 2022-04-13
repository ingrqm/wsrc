import { useLocation } from 'react-router-dom';
import { competitionAtom } from 'atoms/competition';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import { Timer } from './components';
import { Navbar, Wrapper } from './header.styled';

const Header = () => {
  const location = useLocation();
  const competition = useRecoilValue(competitionAtom);

  return (
    <Wrapper>
      <Navbar>
        {competition?.startReading && location.pathname === appUrls.championship.reading && (
          <Timer type='startReading' />
        )}
        {competition?.startTest && location.pathname === appUrls.championship.test && <Timer type='startTest' />}
      </Navbar>
    </Wrapper>
  );
};

export default Header;
