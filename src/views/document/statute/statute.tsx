import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';
import { StyledList, StyledListItem } from './statute.styled';

const { Title } = Typography;

const paragraphs = [
  'fairPlay',
  'communicationDevice',
  'communicatePhysically',
  'allowNote',
  'referToNote',
  'readingAids',
  'makeNoise',
  'camera',
  'access',
  'timeToRead',
  'onlyOneDevice',
  'internet',
  'oneChance',
  'noRefund',
];

const Statute = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title level={4}>{t(`document.statute.content.title`)}</Title>
      <StyledList>
        {paragraphs.map((key) => (
          <StyledListItem key={key}>{t(`document.statute.content.paragraph.${key}`)}</StyledListItem>
        ))}
      </StyledList>
    </>
  );
};

export default Statute;
