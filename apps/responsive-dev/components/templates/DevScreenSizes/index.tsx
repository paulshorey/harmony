import React, { useEffect, memo } from 'react';
import { css } from '@emotion/react';
import debounce from '@ps/fn/io/curry/debounce';
import styles from './styles';
import Frame from './Frame';
import Select, { Option } from '@ps/ui/components/Select';
import Input from '@ps/ui/components/Input';
import InputGroup from '@ps/ui/components/InputGroup';
import Button from '@ps/ui/components/Button';
import Dropdown from '@ps/ui/components/Dropdown';
import Block from '@ps/ui/components/Block';

type Props = {
  sizes: [number, number, string][];
  pagePath: string;
};

const DevTemplate = ({ sizes, pagePath }: Props) => {
  const [hosts, set_hosts] = React.useState(['https://example.com']);
  const [hostIndex, set_hostIndexIndex] = React.useState(0);
  const urls = [['/', '']];
  const initialUrlIndex = urls.findIndex(([url]) => url === pagePath);
  const [urlIndex, set_urlIndex] = React.useState(
    initialUrlIndex > -1 ? initialUrlIndex : 0
  );
  // @ts-ignore
  const [url, notes] = urls[urlIndex];
  const [windowWidth, set_windowWidth] = React.useState(0);
  const [windowHeight, set_windowHeight] = React.useState(0);
  const [windowInnerWidth, set_windowInnerWidth] = React.useState(0);
  const [windowInnerHeight, set_windowInnerHeight] = React.useState(0);
  const [windowPixelRatio, set_windowPixelRatio] = React.useState('0');
  const setSizes = () => {
    set_windowInnerWidth(window.innerWidth);
    set_windowInnerHeight(window.innerHeight);
    set_windowWidth(window.screen.width);
    set_windowHeight(window.screen.height);
    set_windowPixelRatio(window.devicePixelRatio.toFixed(1));
  };

  useEffect(() => {
    // add UI to add/change site
    // const newHost =
    //   `http${window.location.host.includes('localhost') ? '' : 's'}://` +
    //   window.location.host;
    // if (!hosts.includes(newHost)) {
    //   hosts.push(newHost);
    //   set_hosts(hosts);
    // }
    // set_hostIndex(newHost);
    setSizes();

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
    const debouncedResize = debounce(setSizes, 100);
    window.addEventListener('resize', debouncedResize.bind(window));
    return () => {
      window.removeEventListener('resize', debouncedResize.bind(window));
    };
  }, []);

  return (
    <div css={styles.wrapper}>
      <div css={styles.view}>
        <div css={styles.controls}>
          <Dropdown
            left
            menu={
              <Block bgcolor="dark" textcolor="light">
                <p
                  role="none"
                  onClick={() => {
                    set_hostIndexIndex(0);
                  }}
                >
                  https://example.com
                </p>
                <p
                  role="none"
                  onClick={() => {
                    set_hostIndexIndex(1);
                  }}
                >
                  https://besta.domains
                </p>
                <p
                  role="none"
                  onClick={() => {
                    set_hostIndexIndex(2);
                  }}
                >
                  https://wordio.co
                </p>
              </Block>
            }
          >
            <InputGroup>
              <Button size="sm">+</Button>
              <Input
                size="xs"
                value="asdfss"
                placeholder="adsfsdd"
                allowClear={true}
              />
            </InputGroup>
          </Dropdown>

          <div>
            <select
              value={hostIndex}
              onChange={(e) => {
                set_hostIndexIndex(Number(e.target.value) || 0);
              }}
            >
              {hosts.map((host, i) => (
                <option key={i} value={i}>
                  {host}
                </option>
              ))}
            </select>
            <select
              value={urlIndex}
              onChange={(e) => {
                set_urlIndex(Number(e.target.value) || 0);
              }}
            >
              {urls.map(([url], i) => (
                <option key={i} value={i}>
                  {url}
                </option>
              ))}
            </select>
          </div>
          <div>
            <b>Your </b>
            <b>
              viewport = {windowInnerWidth} x {windowInnerHeight}
            </b>
            , screen = {windowWidth} x {windowHeight}, pixel density ={' '}
            {windowPixelRatio}
          </div>

          <div>
            {notes && <>({notes})</>}
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
              {`Use keyboard "Cmd +/-" to make preview frames bigger/smaller.`}
            </div>
          </div>

          {/* <input
            type="text"
            defaultValue={hostIndex}
            onChange={(e) => {
              debounce(set_hostIndex, 2000)(e.target.value);
            }}
            onBlur={(e) => {
              set_hostIndex(e.target.value);
            }}
            onKeyDown={(e) => {
              console.log('e', e);
              if (e.key === 'Enter') {
                set_hostIndex(e.target.value);
              }
            }}
          /> */}
        </div>
        <div className="frames" id="DevScreenSizesFrames">
          {sizes.map((size, i) => (
            <Frame
              id={'DevScreenSizesFrame' + i}
              hostIndex={hostIndex}
              hosts={hosts}
              url={url}
              frame={size}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default memo(DevTemplate);
