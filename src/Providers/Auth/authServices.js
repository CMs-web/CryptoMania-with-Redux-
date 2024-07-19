import axios from "axios";

const registerUser = async (formData) => {
  const response = await axios.post(
    "https://authentication-2-qzge.onrender.com/api/user/register",
    formData
  );
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};
const loginUser = async (formData) => {
  const response = await axios.post(
    "https://authentication-2-qzge.onrender.com/api/user/login",
    formData
  );
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const authServices = {
  registerUser,
  loginUser,
};
export default authServices;
