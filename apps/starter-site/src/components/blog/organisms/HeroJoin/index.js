import React, { useState, useContext } from 'react';
import { css, useTheme } from '@emotion/react';
import JoinCTA from 'src/components/blog/molecules/JoinCTA';
import Picture from 'src/components/atoms/Picture';
import PageContext from 'src/context/Page';
import DisclosureNumber from 'src/components/disclosures/atoms/DisclosureNumber';
import vars from 'src/styles/vars';

const styles = {
  wrapper: css`
    background: #f8f8f8;
    overflow: auto;
  `,
  content: css`
    margin-top: 0;
    margin-bottom: 50px;
    padding: 26px 0 24px;

    ${vars.break.xsmall.max} {
      padding: 15px 0 25px;
    }

    ${vars.break.xsmall.min} {
      display: grid;
      grid-template-columns: 9fr 8fr;
      grid-template-rows: auto;
      gap: 0;
      grid-template-areas:
        'heading image'
        'bottom image';

      .heading {
        grid-area: heading;
      }

      .image {
        grid-area: image;
      }

      .bottom {
        grid-area: bottom;
      }
    }

    img {
      max-width: 100%;
    }

    .heading {
      h6 {
        font-size: 23px;
        color: #75868b;
        font-style: italic;

        ${vars.break.xsmall.max} {
          display: none;
        }
      }

      h4 {
        font-size: 35px;
        font-weight: 300;

        ${vars.break.xsmall.max} {
          font-size: 32px;
          text-align: center;
        }
      }
    }

    .ul {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0px 0px;
      font-size: 22px;
      font-weight: 300;
      margin: 0 0 20px;
      align-items: baseline;
      justify-content: center;

      .icon {
        color: ${vars.colors.pink};
        margin: 6px 12px 0 0;
      }

      .text {
        line-height: 1.25;
        margin-bottom: 15px;
      }
    }

    .image {
      padding: 30px 0;
      max-width: 600px;
      position: relative;
      right: -10px;
      margin: 0;
      ${vars.mq.sm} {
        width: 85%;
        margin: 0 auto;
        max-width: 350px;
      }

      ${vars.mq.lg} {
        padding-top: 50px;
        padding-right: 0;
      }
    }

    .bottom {
      margin-right: 0;

      ${vars.mq.sm} {
        margin: 0 auto;
        padding: 0 5px;
        .ul {
          max-width: 500px;
          margin: 0 auto 20px auto;
          padding-left: 35px;
        }
      }
    }

    h1 {
      ${vars.mq.sm} {
        font-size: 32px;
        margin: 24px 0 24px 6px;
      }
    }
  `,
};

const HeroJoin = ({ className, ...props }) => {
  const theme = useTheme();
  const pageContext = useContext(PageContext);
  // const [openDialog, setOpenDialog] = useState(false);
  //
  // const openDialogHandler = () => {
  //   console.log('clicked signup button');
  //   setOpenDialog(true);
  // };
  // const closeDialogHandler = () => {
  //   setOpenDialog(false);
  // };
  // const initialFormState = {
  //   email: '',
  // };
  // const [formState, setFormState] = useState(initialFormState);
  return (
    <div
      {...props}
      css={styles.wrapper}
      className={'HeroJoin' + (className ? ' ' + className : '')}
    >
      <div css={styles.content} className="articleWidth articleBottom">
        <div className="heading">
          {/*<h6>This article was brough to you by Spiral...</h6>*/}
          <h4>
            <span className="color-pink">Banking that gives! </span>{' '}
            <span className="nowrap">Spiral combines</span> powerful banking and giving{' '}
            <span className="nowrap">into one.</span>
          </h4>
        </div>
        <div className="image">
          <Picture
            src="https://res.cloudinary.com/spiral/image/upload/v1618873459/website/hero/debitcard-phones-12.png"
            alt="Spiral debit card that gives"
            width={439}
            heightWidthRatio={600 / 940}
            css={css`
              width: 100%;
            `}
          />
        </div>
        <div className="bottom">
          <div className="ul">
            <span className="icon icon-brand-spiral" />
            <span className="text">Enjoy amazing bank account benefits</span>
            <span className="icon icon-brand-spiral" />
            <span className="text">
              Anyone can effortlessly support any cause
              <DisclosureNumber disId="²" />
            </span>
            <span className="icon icon-brand-spiral" />
            <span className="text">
              We match our customers'{' '}
              <span className="nowrap">
                donations
                <DisclosureNumber disId="³" />
              </span>
            </span>
          </div>
          <div className="cta">
            <JoinCTA fdicDisclosureNumber={7} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroJoin;
