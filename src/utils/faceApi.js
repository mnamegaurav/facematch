// this function will always return a cropped Face,
// if not possible, then push the error inside itself

export const getCroppedFaces = (images) => {
  images.map((image) => cropAFace(image));
  return images;
};

export const cropAFace = (image) => {
  // convert the image into croppedImage
  const croppedFace = image;
  // return the cropped image
  return croppedFace;
};
