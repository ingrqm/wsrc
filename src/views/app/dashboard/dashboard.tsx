import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Typography } from 'antd';
import { User, userAtom } from 'atoms/user';
import { Permission } from 'enums';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import { AspectRatio } from 'components';
import { PersonalData, Competition } from './components';
import { Wrapper } from './dashboard.styled';

const { Title, Paragraph } = Typography;

const Dashboard = () => {
  const user = useRecoilValue(userAtom) as User;
  const navigate = useNavigate();

  const isAuthorized = [Permission.user, Permission.arbiter, Permission.admin, Permission.superAdmin].includes(
    user?.permission
  );

  useEffect(() => {
    if (!isAuthorized) {
      navigate(appUrls.error.notAuthorized);
    }
  }, []);

  return !isAuthorized ? null : (
    <Wrapper>
      <Row gutter={[12, 24]}>
        <Col span={24}>
          <Competition />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Title level={3}>Tutorial</Title>
          <Paragraph>
            Watch the introductory video to learn more about how the platform works during the Speed Reading
            Championship
          </Paragraph>
          <AspectRatio x={16} y={9}>
            <iframe
              src='https://www.youtube.com/embed/QK5EVGqNg8U'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </AspectRatio>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Title level={3}>Personal data</Title>
          <PersonalData />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Dashboard;
