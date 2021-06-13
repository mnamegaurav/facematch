// this function will always return a cropped Face,
// if not possible, then push the error inside itself

// import * as faceapi from "face-api.js";

export const getCroppedFaces = (images) => {
  images.map((image) => cropAFace(image));
  return images;
};

export const cropAFace = async (image) => {
  // convert the image into croppedImage
  // logic to convert it using faceapi
  const croppedFace = image;
  // return the cropped image
  return croppedFace;
};
