import React from 'react';

type Props = {
  alt: string;
  fallbackSrc: string;
  handleError?: () => void;
  src?: string;
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const ImageWithFallback: React.FC<Props> = ({
  alt,
  fallbackSrc,
  handleError,
  src,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = React.useState<string | undefined>(src);

  const onError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      if (handleError) {
        handleError();
      }
    }
  };

  React.useEffect(() => {
    if (imgSrc !== src) {
      setImgSrc(src);
    }
  }, [src]);

  return (
    <img alt={alt} onError={onError} src={imgSrc || fallbackSrc} {...rest} />
  );
};

export default ImageWithFallback;
