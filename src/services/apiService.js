// apiService.js
import axios from "axios";
import { ElMessageBox } from "element-plus";

async function searchItems(payload) {
  try {
    console.log("Sending axios request with payload: ", payload);
    const response = await axios.post(`${process.env.API_URL}search`, payload);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    ElMessageBox.alert("network error, please try again", "Info", {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: "OK",
    });
  }
}

async function refineSearchItems(queryObject) {
  try {
    const response = await axios.post(
      `${process.env.API_URL}refineSearch`,
      queryObject
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    ElMessageBox.alert("network error, please try again", "Info", {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: "OK",
    });
  }
}

async function askItemDetails(queryObject) {
  try {
    const response = await axios.post(`${process.env.API_URL}ask`, {
      queryObject,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    ElMessageBox.alert("network error, please try again", "Info", {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: "OK",
    });
  }
}

async function saveEmail(email) {
  try {
    console.log(process.env.API_URL);
    const response = await axios.post(`${process.env.API_URL}saveEmail`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    ElMessageBox.alert("network error, please try again", "Info", {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: "OK",
    });
  }
}

export default {
  searchItems,
  refineSearchItems,
  askItemDetails,
  saveEmail,
};
