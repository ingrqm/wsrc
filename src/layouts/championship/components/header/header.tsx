import { useTranslation } from 'react-i18next';
import { useLocation, useMatch } from 'react-router-dom';
import { competitionAtom } from 'atoms/competition';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import { TimeDistance, Timer } from './components';
import { ChampionshipStep } from './header.enum';
import { Navbar, TimeDistanceWrapper, Wrapper } from './header.styled';

const Header = () => {
  const location = useLocation();
  const competition = useRecoilValue(competitionAtom);
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Navbar>
        {competition?.startReading && location.pathname === appUrls.championship.reading && (
          <Timer type={ChampionshipStep.startReading} />
        )}
        {competition?.startTest && location.pathname === appUrls.championship.test && (
          <Timer type={ChampionshipStep.startTest} />
        )}
        {useMatch(appUrls.championship.review) && (
          <TimeDistanceWrapper>
            {competition.startReading && competition.startTest && (
              <TimeDistance
                start={competition.startReading}
                end={competition.startTest}
                title={t('championship.review.header.readingTime')}
              />
            )}
            {competition.startTest && competition.endTest && (
              <TimeDistance
                start={competition.startTest}
                end={competition.endTest}
                title={t('championship.review.header.testTime')}
              />
            )}
          </TimeDistanceWrapper>
        )}
      </Navbar>
    </Wrapper>
  );
};

export default Header;
