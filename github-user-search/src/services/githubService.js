import axios from "axios";

const API_URL = import.meta.env.VITE_GITHUB_API_URL;

export const searchUsers = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/search/users?q=${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
