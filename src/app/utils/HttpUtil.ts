import axios from "axios";

export class HttpUtil {
  static async get(url: string, credentialsKey: string, query: string) {
    console.log(`${url}/?apikey=${credentialsKey}&${query}`)
    return axios.get(`${url}/?apikey=${credentialsKey}&${query}`).then(response => response.data);
  }
}
