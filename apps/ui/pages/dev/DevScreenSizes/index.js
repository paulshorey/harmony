import React, { useEffect, memo } from 'react';
import { renderToString } from 'react-dom/server';
import { css } from '@emotion/react';
import { debounce } from 'src/functions/timeouts';

const styles = {
  wrapper: css`
    background: #333;
    overflow: auto;
    width: 100%;
    min-height: 100vh;
    user-select: none;
    white-space: nowrap;
    font-size: 24px;
  `,
  view: () => css`
    position: relative;

    .frames {
      padding-bottom: 60px;
      .frame {
        vertical-align: top;
        display: inline-block;
        margin: 3px;
        position: relative;
        overflow: hidden;
        iframe {
          display: block;
          transform: scale(0.67);
          transform-origin: left top;
        }
        .caption {
          color: #666;
          font-size: 12px;
        }
        &.isTablet {
          iframe {
            transform: scale(0.6);
          }
        }
        &.isDesktop {
          iframe {
            transform: scale(0.525);
          }
        }
      }
    }
  `,
  controls: (controlsRight) => css`
    color: #ccc;
    padding: 10px 5px 6px;
    font-size: 0.5em;
    position: fixed;
    bottom: 0;
    right: ${controlsRight ? '0' : 'auto'};
    left: ${controlsRight ? 'auto' : '0'};
    button {
      padding: 0 15px 0 1px;
      height: 24px;
      cursor: pointer;
      color: white;
      border: none;
      outline: none;
      background: transparent;
      sup,
      sub {
        font-size: 0.82em;
      }
    }
    .bottomLinks {
      button {
        opacity: 0.25;
      }
    }
  `,
};

let rendered = 0;
const Frame = ({ url, frame, host, ...props }) => {
  if (!url || !frame) return null;
  const [width, height, caption] = frame;
  rendered++;
  return (
    <div
      {...props}
      className={'frame' + (width > 930 ? ' isDesktop' : width > 500 ? ' isTablet' : '')}
      css={css`
        width: ${width > 930 ? width * 0.525 : width > 500 ? width * 0.6 : width * 0.67}px;
      `}
    >
      <span className="caption">{caption}</span>
      <span>{rendered}</span>
      <iframe
        src={host + url + '?previewSize=' + width + 'x' + height}
        width={width}
        height={height}
        frameBorder={0}
      />
    </div>
  );
};

const DevTemplate = ({ sizes, pagePath, controlsRight }) => {
  const [host, set_host] = React.useState('');
  const [hosts, set_hosts] = React.useState([
    'https://www.spiral.us',
    'https://uat-blog.spiral.us',
    'https://staging-blog.spiral.us',
    'https://integration-blog.spiral.us',
    'http://localhost:3000',
  ]);
  const urls = [
    ['/', ''],
    [
      '/web-sociallyresponsible-nofees',
      'disclosures are different - nofees¹, FDIC* - should match footer',
    ],
    ['/web-sociallyresponsible-ethicalbanking', 'title is a bit longer, different font size'],
    ['/nonprofits/food-for-life-global', ''],
    ['/nonprofits', ''],
    ['/product', ''],
  ];
  const initialUrlIndex = urls.findIndex(([url]) => url === pagePath);
  const [urlIndex, set_urlIndex] = React.useState(initialUrlIndex > -1 ? initialUrlIndex : 0);
  const [url, notes] = urls[urlIndex];
  const [windowWidth, set_windowWidth] = React.useState(0);
  const [windowHeight, set_windowHeight] = React.useState(0);
  const [windowInnerWidth, set_windowInnerWidth] = React.useState(0);
  const [windowInnerHeight, set_windowInnerHeight] = React.useState(0);
  const [windowPixelRatio, set_windowPixelRatio] = React.useState(0);

  useEffect(() => {
    let newHost =
      `http${window.location.host.includes('localhost') ? '' : 's'}://` + window.location.host;
    if (!hosts.includes(newHost)) {
      hosts.push(newHost);
      set_hosts(hosts);
    }
    set_host(newHost);
    set_windowInnerWidth(window.innerWidth);
    set_windowInnerHeight(window.innerHeight);
    set_windowWidth(window.screen.width);
    set_windowHeight(window.screen.height);
    set_windowPixelRatio(window.devicePixelRatio.toFixed(1));

    // // stagger rendering so it doesn't overwhelm the server
    // for (let i = 0; i < sizes.length; i++) {
    //   setTimeout(() => {
    //     if (!sizes[i]) {
    //       return;
    //     }
    //     console.log('rendering', i, sizes[i]);
    //     let [width, height, caption] = sizes[i];
    //     let frameEl = document.getElementById('DevScreenSizesFrame' + i);
    //     frameEl.innerHTML += `
    //       <iframe
    //       src="${host + url + '?previewSize=' + width + 'x' + height}"
    //       width="${width}"
    //       height="${height}"
    //       frameBorder="0"
    //     />
    //     `;
    //   }, i * 2000);
    // }
  }, []);

  // on window resize, update windowWidth and windowHeight
  useEffect(() => {
    const debouncedResize = debounce(() => {
      set_windowInnerWidth(window.innerWidth);
      set_windowInnerHeight(window.innerHeight);
      set_windowWidth(window.screen.width);
      set_windowHeight(window.screen.height);
      set_windowPixelRatio(window.devicePixelRatio.toFixed(1));
    }, 100);
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  return (
    <div css={styles.wrapper}>
      <div css={styles.view}>
        <div className="frames" id="DevScreenSizesFrames">
          {sizes.map((size, i) => (
            <Frame id={'DevScreenSizesFrame' + i} host={host} url={url} frame={size} key={i} />
          ))}
        </div>
        <div css={styles.controls(controlsRight)}>
          <div
            css={css`
              width: 360px;
              text-align: center;
              padding: 0 0 7px;
              color: #666;
              cursor: default;
              text-shadow: 0 0 1px #333;
            `}
          >
            Try pressing "Cmd +/-" to zoom in/out
            <br />
            until windows fit nicely in your screen
          </div>
          <button>
            <b>
              viewport = {windowInnerWidth} x {windowInnerHeight}
            </b>
          </button>
          <button>
            screen = {windowWidth} x {windowHeight}
          </button>
          <button>pixel density = {windowPixelRatio}</button>
          <br />
          {/* <input
            type="text"
            defaultValue={host}
            onChange={(e) => {
              debounce(set_host, 2000)(e.target.value);
            }}
            onBlur={(e) => {
              set_host(e.target.value);
            }}
            onKeyDown={(e) => {
              console.log('e', e);
              if (e.key === 'Enter') {
                set_host(e.target.value);
              }
            }}
          /> */}
          <select
            value={host}
            onChange={(e) => {
              set_host(e.target.value);
            }}
          >
            {hosts.map((host, i) => (
              <option key={i} value={host}>
                {host}
              </option>
            ))}
          </select>
          <select
            value={urlIndex}
            onChange={(e) => {
              set_urlIndex(e.target.value);
            }}
          >
            {urls.map(([url], i) => (
              <option key={i} value={i}>
                {url}
              </option>
            ))}
          </select>
          &nbsp;&nbsp;
          {notes && <>({notes})</>}
        </div>
      </div>
    </div>
  );
};
export default memo(DevTemplate);
