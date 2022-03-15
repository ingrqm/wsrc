/* eslint-disable no-unreachable */
import { Dropdown, Menu } from 'antd';
import { LanguageIcon } from 'assets/images';
import { configAtom } from 'atoms/config';
import { Language } from 'enums';
import { useRecoilState } from 'recoil';
import i18n from 'utils/i18next';
import { languages } from './language-picker.data';
import { StyledFlag, StyledLanguageIcon } from './language-picker.styled';

const LanguagePicker = () => {
  const [config, setConfig] = useRecoilState(configAtom);
  const handleChangeLanguage = (language: Language) => {
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
          {languages.map(({ flag: Flag, language, label }) => (
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
