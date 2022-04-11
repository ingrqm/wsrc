/* eslint-disable no-unreachable */
import { Dropdown, Menu } from 'antd';
import { LanguageIcon } from 'assets/images';
import { configAtom } from 'atoms/config';
import { languagesApp } from 'data';
import { LanguageApp } from 'enums';
import { useRecoilState } from 'recoil';
import i18n from 'utils/i18next';
import { StyledFlag, StyledLanguageIcon } from './language-picker.styled';

const LanguagePicker = () => {
  const [config, setConfig] = useRecoilState(configAtom);
  const handleChangeLanguage = (language: LanguageApp) => {
    const newConfig = { ...config, language };

    i18n.changeLanguage(language);
    setConfig(newConfig);
  };

  // const ActiveFlag = languages.find(({ language }) => language === config.language)?.flag;

  return null;

  return (
    <Dropdown
      overlay={
        <Menu>
          {languagesApp.map(({ flag: Flag, language, label }) => (
            <Menu.Item key={language} onClick={() => handleChangeLanguage(language)}>
              <StyledFlag>
                <Flag />
                {label}
              </StyledFlag>
            </Menu.Item>
          ))}
        </Menu>
      }
      trigger={['click']}
      arrow
    >
      <StyledLanguageIcon>
        <LanguageIcon />
        {/* {ActiveFlag && <ActiveFlag />} */}
      </StyledLanguageIcon>
    </Dropdown>
  );
};

export default LanguagePicker;
