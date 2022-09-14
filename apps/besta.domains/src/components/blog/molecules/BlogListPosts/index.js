import { css, useTheme } from '@emotion/react';
import BlogListLatestPost from 'src/components/blog/molecules/BlogListLatestPost';

const styles = {
  posts: () => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-column-gap: 30px;
    grid-row-gap: 40px;
    @media (max-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 690px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,
};

const BlogListPosts = ({ posts, className, ...props }) => {
  if (!posts) return;
  const theme = useTheme();
  return (
    <div
      {...props}
      css={styles.posts}
      className={'BlogListPosts' + (className ? ' ' + className : '')}
    >
      {!!posts && posts.map((post, i) => <BlogListLatestPost post={post} key={i} />)}
    </div>
  );
};

export default BlogListPosts;
