import { css } from 'styled-components';

export const form = css`
  form div.ant-form-item-explain .ant-form-item-explain-error:not(:first-child) {
    display: none;
  }

  .ant-input,
  .ant-input-affix-wrapper,
  .ant-select-selector,
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: 1px solid ${({ theme }) => theme.color.custom.gray[1]};
    border-radius: 8px;
  }

  .dark-checkbox {
    color: ${({ theme }) => theme.color.custom.gray[2]};

    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner,
    .ant-checkbox-checked .ant-checkbox-inner {
      border-color: ${({ theme }) => theme.color.custom.gray[2]};
    }

    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${({ theme }) => theme.color.custom.gray[2]};
    }
  }
`;
