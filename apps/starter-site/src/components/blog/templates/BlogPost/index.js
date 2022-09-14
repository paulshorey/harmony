import React from 'react';
import BlogByline from 'src/components/blog/molecules/BlogByline';
import ImageWithCategory from 'src/components/blog/molecules/ImageWithCategory';
import { wordpressArticle } from 'src/styles/global/blog';
import { css, useTheme } from '@emotion/react';
import BlogBreadcrumbs from 'src/components/blog/molecules/BlogBreadcrumbs';
import HeroJoin from 'src/components/blog/organisms/HeroJoin';
import BlogPostBottom from 'src/components/blog/molecules/BlogPostBottom';
import HtmlToReact from 'src/components/atoms/HtmlToReact';
import vars from 'src/styles/vars';

const styles = {
  page: css`
    ${wordpressArticle};
    margin-top: -15px;

    ${vars.break.xsmall.max} {
      margin-top: -20px;
    }
  `,
  title: css`
    font-family: 'HelveticaNeue', Helvetica, sans-serif;
    font-size: 40px;
    margin: 25px -15px 25px 0;
    color: #333;

    ${vars.break.xsmall.max} {
    }
  `,
  nav: css`
    ${vars.break.xsmall.max} {
      margin: 10px auto -10px;
    }
  `,
  article: css`
    ${wordpressArticle};
  `,
  breadcrumbs: css`
    margin-top: 30px;
    margin-bottom: 30px;
  `,
};

const BlogPostTemplate = ({ post }) => {
  return (
    <>
      <div css={styles.page}>
        <div css={styles.breadcrumbs} className="articleWidth">
          <BlogBreadcrumbs category={post.categories[0]} />
        </div>

        <div className="articleWidth hide-sm">
          <ImageWithCategory
            alt="blog post image"
            post={post}
            width={930}
            height={442}
            css={css`
              .Picture {
                width: 100%;
              }
            `}
          />
        </div>
        <div className="articleWidth hide-lg">
          <ImageWithCategory
            alt="blog post image"
            post={post}
            categories={post.categories}
            width={517}
            height={341}
            css={css`
              .Picture {
                width: 100%;
              }
            `}
          />
        </div>

        <article css={styles.article} className="articleWidth articlePaddingBottom">
          <h1
            className="thePostTitle"
            css={styles.title}
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          <BlogByline post={post} />
          <HtmlToReact html={post.body} />
          <BlogPostBottom />
        </article>

        <section className="waitinglist">
          <HeroJoin />
        </section>
      </div>
    </>
  );
};

export default BlogPostTemplate;
