import { Document as _Document, Font, Image, Page as _Page, Text, View } from '@react-pdf/renderer';
import CertificateImg from 'assets/images/certificate.png';
import { styles } from './certificate.styled';

type Props = {
  name: string;
  lastName: string;
};

const Document: any = _Document;
const Page: any = _Page;

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
});

const Certificate = ({ name, lastName }: Props) => (
  <Document>
    <Page orientation='landscape' style={styles.page}>
      <View style={styles.view}>
        <Image src={CertificateImg} style={styles.image} />
      </View>
      <Text style={styles.text}>
        {name} {lastName}
      </Text>
    </Page>
  </Document>
);

export default Certificate;
