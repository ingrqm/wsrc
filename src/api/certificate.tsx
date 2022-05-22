import { pdf } from '@react-pdf/renderer';
import { Certificate } from 'components';

export type DownloadCertificateReq = unknown;

export type DownloadCertificateProps = {
  name: string;
  lastName: string;
};

export type DownloadCertificateRes = Blob;

export type DownloadCertificateRet = DownloadCertificateRes;

export const fetchDownloadCertificate = async ({
  name,
  lastName,
}: DownloadCertificateProps): Promise<DownloadCertificateRet> => {
  const blob = await pdf(<Certificate name={name} lastName={lastName} />).toBlob();

  return blob;
};
