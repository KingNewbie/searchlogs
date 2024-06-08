import axios from 'axios';

const fetchDataFromEndpoint = async (endpoint) => {
  try {
    const response = await axios.get(`http://10.59.12.212:8000${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchDataFromEndpoint;