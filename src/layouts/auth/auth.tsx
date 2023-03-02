import { Outlet, useLocation } from 'react-router-dom';
import { Col, Row } from 'antd';
import { AuthHeaderImg, LogoImg } from 'assets/images';
import { appUrls } from 'urls';
import { LanguagePicker } from 'components';
import { HeaderImage, StyledLogoImg, StyledWrapper, StyledWrapperLanguagePicker } from './auth.styled';

const Auth = () => {
  const location = useLocation();

  const isSignInPage = location.pathname === appUrls.auth.signIn;

  return (
    <Row>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <StyledLogoImg>
          <LogoImg />
        </StyledLogoImg>
        <HeaderImage isSignInPage={isSignInPage}>
          <AuthHeaderImg />
        </HeaderImage>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <StyledWrapper>
          <StyledWrapperLanguagePicker>
            <LanguagePicker />
          </StyledWrapperLanguagePicker>
          <Outlet />
        </StyledWrapper>
      </Col>
    </Row>
  );
};

export default Auth;
