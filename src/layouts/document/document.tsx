import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import { Col, Row, Typography } from 'antd';
import { CircleBigImg, CircleSmallImg, LogoImg, TriangleBigImg, TriangleImg, TriangleSmallImg } from 'assets/images';
import { pathToCamelCase } from 'utils/path';
import { HeaderImage, StyledLogoImg, StyledWrapper } from './document.styled';

const { Title } = Typography;

const Document = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const key = pathToCamelCase(location.pathname);

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
        <HeaderImage>
          <Title>{t(`${key}.infoBox.title`)}</Title>
          <Title level={3}>{t(`${key}.infoBox.description`)}</Title>
          <CircleSmallImg />
          <CircleSmallImg />
          <CircleBigImg />
          <TriangleBigImg />
          <TriangleImg />
          <TriangleSmallImg />
        </HeaderImage>
      </Col>
    </Row>
  );
};

export default Document;
