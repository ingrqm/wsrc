import { CopyBlock, dracula } from 'react-code-blocks';

import PropTypes from 'prop-types';

const CodeBlock = ({ code, language, showLineNumbers }) => {
  return <CopyBlock language={language} showLineNumbers={showLineNumbers} text={code} theme={dracula} codeBlock />;
};

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
  showLineNumbers: PropTypes.bool,
};

CodeBlock.defaultProps = {
  language: 'jsx',
  showLineNumbers: true,
};

export default CodeBlock;
