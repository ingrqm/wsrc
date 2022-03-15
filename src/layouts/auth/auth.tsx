import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import { Col, Row, Typography } from 'antd';
import {
  AuthHeaderImg,
  CircleBigImg,
  CircleSmallImg,
  LogoImg,
  TriangleBigImg,
  TriangleImg,
  TriangleSmallImg,
} from 'assets/images';
import { appUrls } from 'urls';
import { pathToCamelCase } from 'utils/path';
import { HeaderImage, StyledLogoImg, StyledWrapper } from './auth.styled';

const { Title } = Typography;

const Auth = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const key = pathToCamelCase(location.pathname);

  const isSignInPage = location.pathname === appUrls.auth.signIn;

  return (
    <Row>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <StyledWrapper>
          <StyledLogoImg>
            <LogoImg />
          </StyledLogoImg>
          <Outlet />
        </StyledWrapper>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <HeaderImage isSignInPage={isSignInPage}>
          <Title>{t(`${key}.infoBox.title`)}</Title>
          <Title level={3}>{t(`${key}.infoBox.subTitle`)}</Title>
          {isSignInPage ? (
            <AuthHeaderImg />
          ) : (
            <>
              <CircleSmallImg />
              <CircleSmallImg />
              <CircleBigImg />
              <TriangleBigImg />
              <TriangleImg />
              <TriangleSmallImg />
            </>
          )}
        </HeaderImage>
      </Col>
    </Row>
  );
};

export default Auth;
