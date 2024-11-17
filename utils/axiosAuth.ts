import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.createsend.com/api/v3.3',
  headers: {
    Authorization: `Basic ${Buffer.from(process.env.CAMPAIGN_API_KEY + ':').toString('base64')}`,
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
