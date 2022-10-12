import NextLink from 'next/link';

export default (A: any, href: string) => (
  <NextLink href={href} passHref={true}>
    {A}
  </NextLink>
);
