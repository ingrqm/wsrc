import NextLink from 'next/link';

import { FC } from 'react';

import { Align } from '@enums/align';

import { StyledLink } from './link.styled';

const Link: FC<{ href: string; align: Align }> = ({ href, children, align = Align.center }) => (
  <NextLink href={href}>
    <StyledLink align={align} color='inherit' variant='body2'>
      {children}
    </StyledLink>
  </NextLink>
);

export default Link;
