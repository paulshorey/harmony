import DevTemplate from 'src/components/templates/DevScreenSizes';

const DevPage = ({ pagePath }) => {
  const sizes = [
    [1024, 1366, '1024 x 1366 (iPad 12.9 portrait)'],
    [1280, 766, '1280 x 766 (smaller laptop)'],
    [1440, 600, '1440 x 600 (very short Windows laptop)'],
    [1520, 944, '1520 x 944 (larger laptop)'],
  ];
  return <DevTemplate sizes={sizes} pagePath={pagePath} controlsRight={true} />;
};

export default DevPage;
