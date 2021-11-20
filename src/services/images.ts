import axios from "axios";
const baseUrl = '/images';

const sendImage = async (image: File) => {
  const form = new FormData();
  form.append('image', image);

  const { data: response } = await axios.post<string>(baseUrl, form, {headers: { "Content-Type": 'multipart/form-data'}});
  return response;
};

export default { sendImage };
