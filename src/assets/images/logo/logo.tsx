import { Image } from 'antd';
import Placeholder from './logo.placeholder.svg';
import Img from './logo.png';

const LogoImg = () => <Image src={Img} preview={false} placeholder={<Image preview={false} src={Placeholder} />} />;

export default LogoImg;
