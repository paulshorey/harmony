export const getRgba = (hexCode: string, opacity: number): string => {
  const rgbParsed = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexCode);

  if (!rgbParsed) {
    throw new Error(`Passed in an invalid hexCode ${hexCode}`);
  }

  if (opacity < 0 || opacity > 1) {
    throw new Error(`Passed in an invalid opacity value ${opacity}`);
  }

  const red = rgbParsed[1] ? parseInt(rgbParsed[1], 16) : 0;
  const green = rgbParsed[2] ? parseInt(rgbParsed[2], 16) : 0;
  const blue = rgbParsed[3] ? parseInt(rgbParsed[3], 16) : 0;

  const result = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

  return result;
};

export default getRgba;
