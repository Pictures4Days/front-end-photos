import axios from "axios";

const REACT_APP_API = process.env.REACT_APP_API || "api"

export const fetchImages = async () => {
  try {
    const response = await axios.get(`${REACT_APP_API}/images`);
    return response.data;

  } catch (error) {
    console.error(error);
    return [];
  }
}

export const createImage = async (imageData) => {
  console.log('front-end createImage Data:', imageData);
  console.log('react API',`${REACT_APP_API}/images`);
  try {
    const response = await axios.post(`${REACT_APP_API}/images`, imageData);
    return response.data;
  } catch (error) {
    console.error("Issue creating the photo", error.response.data);
    return null;
  }
}

export const updateImage = async (imageID, imageData) => {
  console.log(imageID)
  console.log(imageData)
  try {
    const response = await axios.put(`${REACT_APP_API}/images/${imageID}`, imageData);
    return response.data;
  } catch (error) {
    console.error("Issue updating the image");
  }
}

export const deleteImage = async (imageID) => {
  try {
    await axios.delete(`${REACT_APP_API}/images/${imageID}`);
    return true;
  } catch (error) {
    console.error("Issue with deleting image:", error);
    return false;
  }
}