import { Image } from 'antd';
import Placeholder from './auth-header.placeholder.svg';
import Img from './auth-header.png';

const AuthHeaderImg = () => (
  <Image src={Img} preview={false} placeholder={<Image preview={false} src={Placeholder} />} />
);

export default AuthHeaderImg;
