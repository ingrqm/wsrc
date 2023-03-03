import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Image, Row, Typography } from 'antd';
import { fetchStatisticsDashboard, StatisticsDashboardRet } from 'api';
import { User, userAtom } from 'atoms/user';
import { Permission, QueryKey } from 'enums';
import { useQueryWithError } from 'hooks';
import { t } from 'i18next';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import ArrowImg from '../../../assets/images/curly-arrow.png';
import { Competition } from './components';
import { TutorialVideoWrapper, Widget, Wrapper } from './dashboard.styled';
import { getTutorialUrl } from './dashboard.utils';

const { Title, Paragraph, Text } = Typography;

const Dashboard = () => {
  const user = useRecoilValue(userAtom) as User;
  const navigate = useNavigate();

  const statistics = useQueryWithError<StatisticsDashboardRet, Error>(
    QueryKey.statisticsDashboard,
    fetchStatisticsDashboard,
    {
      enabled: [Permission.arbiter, Permission.admin, Permission.superAdmin].includes(user?.permission),
    }
  );

  const isAuthorized = useMemo(
    () =>
      [Permission.newbie, Permission.user, Permission.arbiter, Permission.admin, Permission.superAdmin].includes(
        user?.permission
      ),
    [user?.permission]
  );

  useEffect(() => {
    if (!isAuthorized) {
      navigate(appUrls.error.notAuthorized);
    }
  }, []);

  return !isAuthorized ? null : (
    <Wrapper>
      <Row gutter={[12, 24]} className='p-8'>
        <Col md={{ span: 24 }} className='hi-user-col mb-10'>
          <Title level={2} className='mb-2'>
            {t('app.header.hero.dashboard.title') as string} <Text>{user.name} !</Text>
          </Title>
          <Title className='m-0' level={5}>
            {t('app.header.hero.dashboard.subTitle') as string}
          </Title>
        </Col>
        <Col lg={{ span: 8 }} md={{ span: 24 }} className='tutorial-title'>
          <Title className='text-2xl' level={3}>
            {t('app.dashboard.tutorial.title') as string}
          </Title>
          <Paragraph className='text-sm font-light leading-6'>
            {t('app.dashboard.tutorial.subTitle') as string}
          </Paragraph>
        </Col>
        <Col lg={{ span: 16 }} md={{ span: 24 }} className='text-center'>
          <TutorialVideoWrapper>
            <Image src={ArrowImg} preview={false} />
            <iframe
              src={getTutorialUrl(user?.permission, user?.languageChampionship)}
              title={t('app.dashboard.tutorial.iframe.title')}
              frameBorder='0'
              allowFullScreen
            />
          </TutorialVideoWrapper>
        </Col>
        {[Permission.user, Permission.arbiter, Permission.admin, Permission.superAdmin].includes(user?.permission) && (
          <Col span={24}>
            <Competition />
          </Col>
        )}
        {[Permission.arbiter, Permission.admin, Permission.superAdmin].includes(user?.permission) && statistics.data && (
          <Col span={24}>
            <Row gutter={[10, 10]} justify='center'>
              {Object.entries(statistics.data).map(([key, value]) => (
                <Widget key={key}>
                  <Card>
                    <Paragraph ellipsis={{ rows: 1, expandable: false }}>
                      {t(`app.dashboard.widget.${key}`) as string}
                    </Paragraph>
                    <Text type='secondary'>{value}</Text>
                  </Card>
                </Widget>
              ))}
            </Row>
          </Col>
        )}
      </Row>
    </Wrapper>
  );
};

export default Dashboard;
