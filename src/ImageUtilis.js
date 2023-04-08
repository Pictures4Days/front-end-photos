import axios from "axios";
const REACT_APP_API = process.env.REACT_APP_API || "api"

// Fetch all images belonging to a user through an axios call to server.js
export const fetchImages = async (user) => {
  try {
    const response = await axios.get(`${REACT_APP_API}/images?user=${user}`);
    return response.data;

  } catch (error) {
    console.error(error);
    return [];
  }
}

// Create a new image through an axios call to server.js
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

// Update an existing image through an axios call to server.js
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

// Delete an existing image through an axios call to server.js
export const deleteImage = async (imageID) => {
  try {
    await axios.delete(`${REACT_APP_API}/images/${imageID}`);
    return true;
  } catch (error) {
    console.error("Issue with deleting image:", error);
    return false;
  }
}