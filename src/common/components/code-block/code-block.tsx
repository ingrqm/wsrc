import { CopyBlock, dracula } from 'react-code-blocks';
import { FC } from 'react';

const CodeBlock: FC<{ code: string; language?: string; showLineNumbers?: boolean }> = ({
  code,
  language = 'jsx',
  showLineNumbers = true,
}) => <CopyBlock language={language} showLineNumbers={showLineNumbers} text={code} theme={dracula} codeBlock />;

export default CodeBlock;
