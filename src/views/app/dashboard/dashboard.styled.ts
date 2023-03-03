import { Col } from 'antd';
import styled from 'styled-components';
import { media } from 'styles';

export const Wrapper = styled.div`
  .tutorial-title {
    .ant-typography {
      color: ${({ theme }) => theme.color.custom.blue[0]};
    }
  }

  .tutorial-col {
    text-align: center;
  }

  .hi-user-col {
      h5 {
        letter-spacing: 0.05em;
        font-size: 18px;
      }

      h2 {
        font-size: 45px;

        span {
          color: ${({ theme }) => theme.color.custom.blue[1]};
        }
      }
    }
  }
`;

export const TutorialVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  iframe {
    width: 100%;
    height: 350px;

    ${media.xs} {
      height: auto;
    }
  }

  .ant-image {
    position: absolute;
    /*bottom: calc(350px - 5em);*/
    bottom: 0px;
    left: 10px;
    z-index: -1;

    ${media.md} {
      display: none;
    }
  }
`;

export const Widget = styled(Col)`
  width: 230px;

  ${media.xs} {
    width: 100%;
  }

  div.ant-typography {
    margin-bottom: 8px;
  }
`;
