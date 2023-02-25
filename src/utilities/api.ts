import axios from "axios";

let url = "https://wc-express.commandprogramming.com/users";

export const createUser = async (user: any) => {
  return axios.post(url, user);
};
