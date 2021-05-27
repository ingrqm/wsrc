import NextLink from 'next/link';

import { node, oneOf, string } from 'prop-types';

import { StyledLink } from './Link.styled';

const Link = ({ href, children, align }) => (
  <NextLink href={href}>
    <StyledLink align={align} color="inherit" component="button" variant="body2">
      {children}
    </StyledLink>
  </NextLink>
);

Link.propTypes = {
  href: string.isRequired,
  children: node.isRequired,
  align: oneOf(['start', 'center', 'end']),
};

Link.defaultProps = {
  align: 'center',
};

export default Link;
