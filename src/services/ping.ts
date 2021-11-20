import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const sendPing = async () => {
  const { data: pong } = await axios.get<string>(`${baseUrl}/ping`);
  return pong;
};

export default { sendPing };