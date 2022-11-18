import DevTemplate from 'components/templates/DevScreenSizes';

const DevPage = ({ pagePath }) => {
  const sizes: [number, number, string][] = [
    [375, 944, '375 x 944'],
    [1280, 944, '1280 x 944'],
    [768, 1024, '768 x 1024 (iPad)'],
  ];
  return <DevTemplate sizes={sizes} pagePath={pagePath} controlsRight={true} />;
};

export default DevPage;
