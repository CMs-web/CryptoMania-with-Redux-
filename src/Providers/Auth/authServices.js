import axios from "axios";

const API_URL = "/api/user";

const registerUser = async (formData) => {
    const response = await axios.post(API_URL + "/register", formData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data
}
const loginUser = async (formData) => {
    const response = await axios.post(API_URL + "/login", formData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
}

const authServices = {
    registerUser,
    loginUser,
}
export default authServices