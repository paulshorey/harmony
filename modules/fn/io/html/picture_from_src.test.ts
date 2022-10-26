import picture_from_src from "./picture_from_src";

describe("picture_from_src", () => {
  it("generic - width and height", () => {
    expect(
      picture_from_src({ src: "https://www.paulshorey.com/images/screenshot1.png", width: 1440, height: 800 })
    ).toStrictEqual({
      height: 800,
      height_sm: 533,
      src: "https://www.paulshorey.com/images/screenshot1.png",
      src_preview: "",
      src_preview_sm: "",
      src_sm: "https://www.paulshorey.com/images/screenshot1.png",
      src_webp: "",
      src_webp_sm: "",
      type: "",
      type_sm: "",
      width: 1440,
      width_sm: 960
    });
  });
  it("Cloudinary - width and height (801 mobile resize == 267 render size * 3 pixel density)", () => {
    expect(
      picture_from_src({
        src: "https://res.cloudinary.com/spiral/image/upload/path/to/image.png",
        width: 400,
        height: 400
      })
    ).toStrictEqual({
      height: 400,
      height_sm: 267,
      src: "https://res.cloudinary.com/spiral/image/upload/w_800,h_800,c_pad/path/to/image.png",
      src_preview: "https://res.cloudinary.com/spiral/image/upload/w_19,h_19,c_pad/path/to/image.png",
      src_preview_sm: "https://res.cloudinary.com/spiral/image/upload/w_19,h_19,c_pad/path/to/image.png",
      src_sm: "https://res.cloudinary.com/spiral/image/upload/w_801,h_801,c_pad/path/to/image.png",
      src_webp: "https://res.cloudinary.com/spiral/image/upload/w_800,h_800,c_pad/path/to/image.webp",
      src_webp_sm: "https://res.cloudinary.com/spiral/image/upload/w_801,h_801,c_pad/path/to/image.webp",
      type: "image/png",
      type_sm: "image/png",
      width: 400,
      width_sm: 267
    });
  });
  it("Cloudinary - width and heightRatio + mobile smaller", () => {
    expect(
      picture_from_src({
        src: "https://res.cloudinary.com/spiral/image/upload/path/to/image.png",
        srcSm: "https://res.cloudinary.com/spiral/image/upload/path/to/image-small.png",
        width: 400,
        widthSm: 250,
        heightWidthRatio: 1.25,
        heightWidthRatioSm: 1
      })
    ).toStrictEqual({
      height: 500,
      height_sm: 250,
      src: "https://res.cloudinary.com/spiral/image/upload/w_800,h_1000,c_pad/path/to/image.png",
      src_preview: "https://res.cloudinary.com/spiral/image/upload/w_19,h_24,c_pad/path/to/image.png",
      src_preview_sm: "https://res.cloudinary.com/spiral/image/upload/w_19,h_24,c_pad/path/to/image-small.png",
      src_sm: "https://res.cloudinary.com/spiral/image/upload/w_750,h_750,c_pad/path/to/image-small.png",
      src_webp: "https://res.cloudinary.com/spiral/image/upload/w_800,h_1000,c_pad/path/to/image.webp",
      src_webp_sm: "https://res.cloudinary.com/spiral/image/upload/w_750,h_750,c_pad/path/to/image-small.webp",
      type: "image/png",
      type_sm: "image/png",
      width: 400,
      width_sm: 250
    });
  });
  it("Cloudinary - width only + mobile larger", () => {
    expect(
      picture_from_src({
        src: "https://res.cloudinary.com/spiral/image/upload/path/to/image.png",
        srcSm: "https://res.cloudinary.com/spiral/image/upload/path/to/image-small.png",
        width: 1200,
        widthSm: 500
      })
    ).toStrictEqual({
      height: undefined,
      height_sm: undefined,
      src: "https://res.cloudinary.com/spiral/image/upload/w_2400/path/to/image.png",
      src_preview: "https://res.cloudinary.com/spiral/image/upload/w_19,c_pad/path/to/image.png",
      src_preview_sm: "",
      src_sm: "https://res.cloudinary.com/spiral/image/upload/w_1000/path/to/image-small.png",
      src_webp: "https://res.cloudinary.com/spiral/image/upload/w_2400/path/to/image.webp",
      src_webp_sm: "https://res.cloudinary.com/spiral/image/upload/w_1000/path/to/image-small.webp",
      type: "image/png",
      type_sm: "image/png",
      width: 1200,
      width_sm: 500
    });
  });
  it("Cloudinary - height only + mobile larger", () => {
    expect(
      picture_from_src({
        src: "https://res.cloudinary.com/spiral/image/upload/path/to/image.png",
        srcSm: "https://res.cloudinary.com/spiral/image/upload/path/to/image-small.png",
        height: 1200,
        heightSm: 500
      })
    ).toStrictEqual({
      height: 1200,
      height_sm: 1200,
      src: "https://res.cloudinary.com/spiral/image/upload/h_2400/path/to/image.png",
      src_preview: "https://res.cloudinary.com/spiral/image/upload/h_NaN/path/to/image.png",
      src_preview_sm: "",
      src_sm: "https://res.cloudinary.com/spiral/image/upload/h_1000/path/to/image-small.png",
      src_webp: "https://res.cloudinary.com/spiral/image/upload/h_2400/path/to/image.webp",
      src_webp_sm: "https://res.cloudinary.com/spiral/image/upload/h_1000/path/to/image-small.webp",
      type: "image/png",
      type_sm: "image/png",
      width: undefined,
      width_sm: undefined
    });
  });
});
