import axios from "axios";

export class HttpRequest {
  static get(url: string, credentialsKey: string, params: string) {
    return axios.get(`${url}/?apikey=${credentialsKey}&${params}`).then((response) => response.data);
  }
}
