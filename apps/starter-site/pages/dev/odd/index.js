import DevTemplate from 'src/components/templates/DevScreenSizes';

const DevPage = ({ pagePath }) => {
  const sizes = [
    [375, 9300, '375 - old iPhones width x GoogleBot mobile'],
    [931, 9300, '931px - narrowest desktop width x GoogleBot Desktop'],
    [1530, 533, '1530 x 533 (some small laptops with too many menus on top/bottom)'],
  ];
  return <DevTemplate sizes={sizes} pagePath={pagePath} />;
};

export default DevPage;
