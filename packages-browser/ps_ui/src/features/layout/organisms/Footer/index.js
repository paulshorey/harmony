import React, { useState, useEffect } from 'react';
import { css, useTheme } from '@emotion/react';
import SocialIcons from 'src/components/molecules/SocialIcons';
import Grid from 'src/components/atoms/Grid';
import Disclosures from 'src/components/disclosures/atoms/Disclosures';
import Links from './Links';
import Title from 'src/components/atoms/Title';
import Link from 'src/components/atoms/Link';
import AppSignupLink from 'src/components/molecules/AppSignupLink';
import styles from './styles';
import SvgImg from 'src/components/atoms/SvgImg';

const Footer = ({ className, ...props }) => {
  /*
   * Test for WebView:
   */
  const [userAgent, set_userAgent] = useState('');
  useEffect(() => {
    if (typeof window === 'object') {
      set_userAgent(window.navigator.userAgent);
    }
  });

  /*
   * Which landing page?
   */
  const [homePath, set_homePath] = useState('/');
  useEffect(() => {
    if (window.homePath) {
      set_homePath(window.homePath);
    }
  }, [typeof window === 'object' && window.homePath]);

  /*
   * Render:
   */
  return (
    <footer
      css={styles.wrapper}
      className={'Footer' + (className ? ' ' + className : '')}
      {...props}
    >
      <div css={styles.content} className="pageWidth">
        <section css={styles.sectionLinks}>
          <div>
            <Link href={homePath} {...{ 'data-qa': 'footer-logo-link' }}>
              <SvgImg
                data-qa="footer-logo-img"
                variant="white"
                src="https://res.cloudinary.com/spiral/image/upload/w_135/website/footer/logo.png"
                alt="Spiral Financial"
                loading="lazy"
                width={45}
                css={css`
                  margin: 6px 0 0 3px;
                `}
              />
            </Link>
          </div>
          <div css={styles.linksColumn}>
            <Title tag={'div'} className="color-grey FooterColumnTitle">
              Learn More
            </Title>
            <Links
              links={[
                { text: 'Who We Are', href: '/about' },
                { text: 'Spend & Impact', href: '/product' },
                // { text: 'In the Press', href: '#' },
                {
                  href: 'https://support.spiral.us/hc/en-us',
                  text: 'Support',
                  rel: 'noreferrer',
                },
                { text: 'Sitemap', href: '/sitemap' },
              ]}
            />
          </div>
          <div css={styles.linksColumn}>
            <Title tag={'div'} className="color-grey FooterColumnTitle">
              Community
            </Title>
            <Links
              links={[
                { text: 'Charity Nonprofits', href: '/nonprofits' },
                { text: 'Blog', href: '/blog' },
              ]}
            />
          </div>
          <div css={styles.linksColumn}>
            <Title tag={'div'} className="color-grey FooterColumnTitle">
              Company
            </Title>
            <Links
              links={[
                { text: 'Careers', href: '/careers' },
                { text: 'Privacy Policy', href: '/privacy-policy' },
                { text: 'Terms of Use', href: '/terms-of-use' },
                { text: 'Offers', href: '/offers' },
              ]}
            />
          </div>
          <div css={styles.linksColumn}>
            <Title tag={'div'} className="color-grey FooterColumnTitle">
              Download our app
            </Title>
            <div css={styles.linksColumnAppStoreButtons}>
              <AppSignupLink
                className="CTA_appstoreBadge_inFooter"
                from="badge"
                linkToWebApp={false}
                {...{ 'data-qa': 'footer-appstore-badge' }}
              >
                <img
                  src="https://res.cloudinary.com/spiral/image/upload/w_435/website/footer/download-appstore.png"
                  alt="Donwload iOS"
                  loading="lazy"
                  width={145}
                  height={48}
                />
              </AppSignupLink>
              <a noopener noreferrer>
                <img
                  src="https://res.cloudinary.com/spiral/image/upload/w_459/website/footer/download-googleplay-comingsoon.png"
                  alt="Download Android"
                  loading="lazy"
                  width={153}
                  height={89}
                />
              </a>
            </div>
            <img
              className="pciDSSCompliantBadge"
              src="https://res.cloudinary.com/spiral/image/upload/w_459/website/icons/pci.png"
              alt="pci DSS Compliant"
              loading="lazy"
              width={275}
              height={107}
            />
          </div>
        </section>

        <div css={styles.hr} />

        <section css={styles.sectionSupport}>
          <Grid css={styles.subSectionSupport}>
            <div className="hide-sm">&nbsp;</div>
            <div>
              <p className="title nowrap">
                CALL US<span className="hide-sm">&emsp;&#8212;&emsp;</span>
              </p>
            </div>
            <div>
              <p>
                <Link href="tel:888-888-8075">888-888-8075</Link>
              </p>
            </div>
            <div>
              <p>
                <span className="nowrap">Mon – Fri</span>
                <span className="nowrap"> | 8am – 5pm EST</span>{' '}
                <span className="color-grey">
                  &thinsp;(Excluding federal holidays)
                </span>
              </p>
            </div>
          </Grid>
          <Grid css={styles.subSectionSupport}>
            <div className="hide-sm">&nbsp;</div>
            <div>
              <p className="title nowrap">
                EMAIL US<span className="hide-sm">&emsp;&#8212;&emsp;</span>
              </p>
            </div>
            <div>
              <p>
                <Link href="mailto:support@spiral.us" target="_blank">
                  support@spiral.us
                </Link>
              </p>
            </div>
            <div>
              <p>
                Please expect an answer within a few hours{' '}
                <span className="nowrap">Mon – Fri</span>
                <span className="nowrap"> | 8am – 5pm EST</span>{' '}
                <span className="color-grey">
                  &thinsp;(Excluding federal holidays)
                </span>
              </p>
            </div>
          </Grid>
        </section>

        <div css={styles.hr} />

        <section css={styles.sectionSocial}>
          <h2 className="title">JOIN OUR COMMUNITY OF EVERYDAY HEROES</h2>
          <SocialIcons variant="white" from="Footer" />
        </section>

        <div css={styles.sectionFinePrint}>
          <Disclosures />
          <p>&copy; 2019-2022 Spiral Financial All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
