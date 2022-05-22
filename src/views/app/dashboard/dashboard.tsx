import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row, Typography } from 'antd';
import { fetchStatisticsDashboard, StatisticsDashboardRet } from 'api';
import { User, userAtom } from 'atoms/user';
import { Permission, QueryKey } from 'enums';
import { useQueryWithError } from 'hooks';
import { t } from 'i18next';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import { AspectRatio } from 'components';
import { PersonalData, Competition } from './components';
import { Widget, Wrapper } from './dashboard.styled';
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
      <Row gutter={[12, 24]}>
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
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Title level={3}>{t('app.dashboard.tutorial.title') as string}</Title>
          <Paragraph>{t('app.dashboard.tutorial.subTitle') as string}</Paragraph>
          <AspectRatio x={16} y={9}>
            <iframe
              src={getTutorialUrl(user?.permission, user?.languageChampionship)}
              title={t('app.dashboard.tutorial.iframe.title')}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </AspectRatio>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Title level={3}>{t('app.dashboard.personalData.title') as string}</Title>
          <PersonalData />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Dashboard;
