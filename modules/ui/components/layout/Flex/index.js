import useVariants from 'src/hooks/useVariants';
import styles from './styles';

const Flex = ({ tag = 'div', variant, variants, children, ...props }) => {
  const TagName = `${tag}`;
  return (
    <TagName
      {...props}
      css={useVariants({
        styles,
        variant, // see index.stories.js for example usage
        variants, // see index.stories.js for example usage
        label: 'Flex',
      })}
    >
      {children}
    </TagName>
  );
};
export default Flex;
