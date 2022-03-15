import { Image } from 'antd';
import AuthHeaderImage from 'assets/images/auth-header.png';
import AuthHeaderPlaceholderImage from 'assets/images/auth-header.placeholder.svg';

export const AuthHeaderImg = () => (
  <Image
    src={AuthHeaderImage}
    preview={false}
    placeholder={<Image preview={false} src={AuthHeaderPlaceholderImage} />}
  />
);
