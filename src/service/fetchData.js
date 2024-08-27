import axios from "axios";

const API_URL = "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory";

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Axios automatically parses JSON
  } catch (err) {
    console.error("Error fetching data:", err);
    return null; // Or handle the error as needed
  }
};
