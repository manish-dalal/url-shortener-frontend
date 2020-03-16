import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_SERVER_URL;

const APICaller = ({
  method = "get",
  reqUrl = "",
  data = {},
  headers = {
    "content-type": "application/json",
    Accept: "application/json"
  }
}) => {
  let ipToken = localStorage.getItem("ipToken");
  if (!ipToken) {
    ipToken = "token" + new Date().getTime().toString(36);
    localStorage.setItem("ipToken", ipToken);
  }
  headers = { ...headers, ipToken };

  return new Promise(async (resolve, reject) => {
    let url = `${apiBaseUrl}${reqUrl}`;
    // console.log(url, "data", data, "method", method, "header", headers);
    let options = {
      method,
      url,
      data,
      headers
    };
    if (method.toLowerCase() === "get") delete options["data"];
    axios({ ...options })
      .then(response => {
        // console.log("%c{res}", "color: green", " => ", response); // eslint-disable-line no-console
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export default APICaller;
