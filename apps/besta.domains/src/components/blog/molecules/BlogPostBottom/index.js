import React from 'react';
import { css, useTheme } from '@emotion/react';
import SocialIcons from 'src/components/molecules/SocialIcons';
import vars from 'src/styles/vars';

const styles = {
  spacer: () => css`
    height: 50px;
  `,
  wrapper: css`
    text-align: center;

    section {
      display: inline-block;

      &.share {
        margin: 30px 0 25px 0;

        h4 {
          margin: 15px 0;
        }

        .icon-brand-spiral {
          font-size: 32px;
          color: ${vars.colors.pink};
        }

        div {
          margin: 10px 0 0 0;
        }
      }

      &.email {
        margin: 20px 0 0;

        h4 {
          margin: 30px 0 12px;
        }
      }
    }

    hr {
      display: block;
      background: #75868b;
      height: 1px;
      border: none;
      margin: 0; // assign spacing in each section
    }
  `,
};

const BlogPostBottom = ({ shareType = 'article', showSocial = true, className, ...props }) => {
  let theme = useTheme();
  return (
    <div
      {...props}
      css={styles.wrapper}
      className={'BlogPostBottom' + (className ? ' ' + className : '')}
    >
      {!!showSocial ? (
        <section className="share">
          <h4>
            <span className="icon icon-brand-spiral" />
            <div>Share this {shareType}:</div>
          </h4>
          <div className="socialIcons">
            <SocialIcons variant="dark" share={true} from="BlogPostBottom" />
          </div>
        </section>
      ) : (
        <div css={styles.spacer} />
      )}
    </div>
  );
};

export default BlogPostBottom;
