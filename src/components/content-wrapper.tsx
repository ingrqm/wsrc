import React, { FC } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Empty, Result, Button } from 'antd';

type Props = {
  isError: boolean;
  isLoading: boolean;
  refetch: () => void | undefined;
  noData: boolean | undefined;
};

const ContentWrapper: FC<Props> = ({ children, isLoading = false, isError = false, refetch, noData }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
      {isLoading && <Spin className='mx-auto my-10' indicator={antIcon} />}
      {isError && (
        <Result
          status='warning'
          title={`We can't show you any data at the moment`}
          className='mx-auto'
          extra={
            refetch && (
              <Button type='primary' onClick={refetch}>
                Try to refresh
              </Button>
            )
          }
        />
      )}
      {!isLoading && !isError && (noData ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> : children)}
    </>
  );
};

export default ContentWrapper;
