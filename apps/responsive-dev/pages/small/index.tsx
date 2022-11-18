import DevTemplate from 'components/templates/DevScreenSizes';

const DevPage = ({ pagePath }) => {
  const sizes: [number, number, string][] = [
    [375, 812, '375 x 812 (iPhone X, Mini)'],
    [390, 844, '390 x 844 (iPhone 12 Pro)'],
    [428, 926, '428 x 926 (iPhone Max)'],
    [768, 1024, '768 x 1024 (iPad 9.7in and Mini)'],
    // [850, 414, '850 x 414 (iPhone turned landscape)'],
  ];
  return <DevTemplate sizes={sizes} pagePath={pagePath} />;
};

export default DevPage;
