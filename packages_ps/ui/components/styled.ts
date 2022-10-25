/*
Usage: 
import { styled } from '@ps/ui';
const Button = styled.button`
  color: red;
`;
 */
import { styledTags } from '../types/html';
import { withBlock } from '@ps/ui/components/content/Block';
// import { withInput } from "@ps/ui/components/content/form/Button";
export default {
  get: (tagName: styledTags) =>
    withBlock({
      'as': tagName,
      'data-styled-tag': tagName,
    }),
};
