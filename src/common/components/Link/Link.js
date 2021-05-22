import NextLink from 'next/link';

import { node, string } from 'prop-types';

import { StyledLink } from './Link.styled';

const Link = ({ href, children }) => (
  <NextLink href={href}>
    <StyledLink color="inherit" component="button" variant="body2">
      {children}
    </StyledLink>
  </NextLink>
);

Link.propTypes = {
  href: string.isRequired,
  children: node.isRequired,
};

export default Link;
