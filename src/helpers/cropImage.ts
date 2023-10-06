export const getRadianAngle = (degree: number) => {
  return (degree * Math.PI) / 180;
};

export const rotateSize = (width: number, height: number, rotation: number) => {
  const rotRad = getRadianAngle(rotation);

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
};

export const getCroppedImage = (
  imageSrc: string,
  pixelCrop: number,
  rotation: number
) => {};
