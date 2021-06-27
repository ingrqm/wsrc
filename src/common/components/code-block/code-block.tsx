import { FC } from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CodeBlock: FC<{ code: string; language?: string; showLineNumbers?: boolean }> = ({
  code,
  language = 'jsx',
  showLineNumbers = true,
}) => <CopyBlock language={language} showLineNumbers={showLineNumbers} text={code} theme={dracula} codeBlock />;

export default CodeBlock;
