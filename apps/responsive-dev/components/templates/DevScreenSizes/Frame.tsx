import { css } from '@emotion/react';

let rendered = 0;
const Frame = ({ url, frame, hosts, hostIndex, ...props }) => {
  if (!hosts || !hosts[hostIndex]) {
    return <code>!hosts || !hosts[hostIndex]</code>;
  }
  if (!url) {
    return <code>!url</code>;
  }
  if (!frame) {
    return <code>!frame</code>;
  }
  const [width, height, caption] = frame;
  rendered++;
  return (
    <div
      {...props}
      className={
        'frame' + (width > 930 ? ' isDesktop' : width > 500 ? ' isTablet' : '')
      }
      css={css`
        width: ${width > 930
          ? width * 0.525
          : width > 500
          ? width * 0.6
          : width * 0.67}px;
      `}
    >
      <span
        className="caption"
        css={css`
          color: #ccc !important;
        `}
      >
        {caption}
      </span>
      <span className="caption">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{rendered}</span>
      <iframe
        title={'preview' + rendered}
        src={hosts[hostIndex] + url + '?previewSize=' + width + 'x' + height}
        width={width}
        height={height}
        frameBorder={0}
      />
    </div>
  );
};

export default Frame;
