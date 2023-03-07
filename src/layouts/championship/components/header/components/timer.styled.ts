import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const TimeText = styled(Title)`
  color: ${({ theme }) => theme.color.custom.blue[0]};
`;
