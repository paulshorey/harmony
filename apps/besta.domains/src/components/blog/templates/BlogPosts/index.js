import React from 'react';
import BlogListPosts from 'src/components/blog/molecules/BlogListPosts';
import { css, useTheme } from '@emotion/react';
import BlogBreadcrumbs from 'src/components/blog/molecules/BlogBreadcrumbs';
import BlogPostBottom from 'src/components/blog/molecules/BlogPostBottom';
import vars from 'src/styles/vars';

const styles = {
  page: css`
    padding-bottom: 100px;

    .latestPosts {
      margin-top: 0;
    }

    .signupHero {
      margin: 25px 0 25px;
      overflow: auto;
    }

    > .title {
      font-family: 'HelveticaNeue', Helvetica, sans-serif;
      font-weight: 300;
      margin: 40px 0 50px;
      font-size: 44px;
      color: #333;

      ${vars.break.xsmall.max} {
        display: none;
      }
    }
  `,
};
const BlogPostsTemplate = ({ posts = [], categories, category }) => {
  return (
    <>
      <div css={styles.page} className="pagePadding pageWidth">
        <div className="latestPosts">
          <BlogBreadcrumbs category={category} />
        </div>
        <h1 className="title">
          {category ? <span>Category "{category.name}"</span> : <>All Articles</>}
        </h1>
        <BlogListPosts posts={posts} categories={categories} />
        <BlogPostBottom />
      </div>
    </>
  );
};

export default BlogPostsTemplate;
