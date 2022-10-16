/*
Usage: 
import { styled } from '@ps/ui';
const Button = styled.button`
  color: red;
`;
 */
import { styledTags } from "../types/html";
import { withBox } from "@ps/ui/components/content/atoms/Box";
// import { withInput } from "@ps/ui/components/content/form/Button";
export default {
  get: (tagName: styledTags) =>
    withBox({
      as: tagName,
      "data-styled-tag": tagName,
    }),
};
