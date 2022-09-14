import Picture from 'src/components/atoms/Picture';
import Button from 'src/components/layout/molecules/Button';
import React from 'react';
import { css, useTheme } from '@emotion/react';
import AppSignupLink from 'src/components/molecules/AppSignupLink';
import styles from './styles';
import vars from 'src/styles/vars';

const JoinCTA = ({
  from,
  notLazy = false,
  hidePrimaryButton = false,
  hideDisclaimersOnMobile = false,
  className,
  ...props
}) => {
  const theme = useTheme();
  return (
    <div
      {...props}
      css={styles.wrapper(hidePrimaryButton)}
      className={'JoinCTA' + (className ? ' ' + className : '')}
    >
      <div className="appAllButtons">
        <div
          className={
            (hidePrimaryButton ? 'hide-sm ' : '') +
            (from === 'homepage' ? 'HOMEPAGE_CTA_PRIMARY' : '')
          }
        >
          <AppSignupLink from="primary" {...{ 'data-qa': 'get-your-app-and-join-button' }}>
            <Button className="CTA_primaryButton">Get your app and join</Button>
          </AppSignupLink>
        </div>
        <div className="appBadges">
          <div>
            <div className="comingsoon">&nbsp;</div>
            <AppSignupLink
              className="CTA_appstoreBadge_belowPrimary"
              from="badge"
              linkToWebApp={false}
              {...{ 'data-qa': 'get-your-app-and-join-badge-appstore' }}
            >
              <Picture
                src="https://res.cloudinary.com/spiral/image/upload/v1621831289/home-page/install-app-store.svg"
                alt="img"
                width={145}
                widthSm={153}
                heightWidthRatio={43 / 145}
                notLazy={notLazy}
              />
            </AppSignupLink>
          </div>
          <div style={{ opacity: '0.25' }}>
            <div className="comingsoon">Coming soon..</div>
            <Picture
              src="https://res.cloudinary.com/spiral/image/upload/v1621831288/home-page/install-google-play.svg"
              alt="img"
              width={153}
              widthSm={153}
              heightWidthRatio={43 / 153}
              notLazy={notLazy}
            />
          </div>
        </div>
      </div>
      <p className={'disclaimer ' + (hideDisclaimersOnMobile ? 'hide-sm' : '')}>
        Spiral is a financial technology company, not a bank. Banking products and services provided
        by nbkc bank, Member FDIC.
      </p>
    </div>
  );
};
export default JoinCTA;
