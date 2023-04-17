import { useTranslation } from 'react-i18next';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { competitionAtom } from 'atoms/competition';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import { TimeDistance, Timer } from './components';
import { ChampionshipStep } from './header.enum';
import { Navbar, TimeDistanceWrapper, Wrapper } from './header.styled';

const { Link } = Typography;

const Header = () => {
  const location = useLocation();
  const competition = useRecoilValue(competitionAtom);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleCloseTest = () => {
    navigate(appUrls.app.dashboard);
  };

  return (
    <Wrapper onContextMenu={(e) => e.preventDefault()}>
      <Navbar className='px-10'>
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
        <Link className='close-link' onClick={handleCloseTest}>
          <CloseOutlined />
        </Link>
      </Navbar>
    </Wrapper>
  );
};

export default Header;
