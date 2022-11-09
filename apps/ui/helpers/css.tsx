/**
 * Use to add syntax highlighting to SCSS strings:
 * import css from '@ps/ui/helpers/css';
 * <Block ss={(props)=> css`
 *  padding: 10px ${props.theme.padding}px;
 * `} />
 */
export default (...args) => {
  const template = args.shift();
  const literals = args;
  let output = '';
  // prepend the next literal to each next template string
  for (let i = 0; i < template.length; i++) {
    output += template[i] + (literals[i] || '');
  }
  return output;
};
