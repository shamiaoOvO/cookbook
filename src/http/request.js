import axios from "axios";

class Request {
    get(url = "") {
        if (url === "") {
            return Promise.reject(new Error("url is requested"));
        }
        return axios.get(url);
    }
}

export default new Request();
