import { useTranslation } from 'react-i18next';
import { Popover, Typography } from 'antd';
import { Log } from 'enums';
import { snakeToCamelCase } from 'utils/convert';

const { Paragraph } = Typography;

type Props = {
  action: Log;
  variables: { [key: string]: string | number | boolean | (string | number | boolean)[] };
};

const LogWithTranslation = ({ action, variables }: Props) => {
  const { t } = useTranslation();

  const popoverData = [];

  // eslint-disable-next-line default-case
  switch (action) {
    case Log.userEditByUser:
    case Log.userEdit:
      if (variables.fields) {
        popoverData.push([
          'fields',
          (variables.fields as string[])
            .map((field) => t(`form.editUser.inputs.${snakeToCamelCase(field)}.label`) as string)
            .join(', '),
        ]);
      }
      break;
  }

  return popoverData.length === 0 ? (
    <>{t(`data.logs.${action}`, variables)}</>
  ) : (
    <Popover
      placement='right'
      content={popoverData.map(([key, value]) => (
        <Paragraph key={`popover-${action}-${key}`} className='mb-0'>
          {value}
        </Paragraph>
      ))}
    >
      {t(`data.logs.${action}`, variables)}
    </Popover>
  );
};

export default LogWithTranslation;
