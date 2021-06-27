import { NextPage } from 'next';

import { CodeBlock } from '@components';

const Welcome: NextPage = () => (
  <>
    Welcome
    <CodeBlock code='<Button />' />
  </>
);

export default Welcome;
