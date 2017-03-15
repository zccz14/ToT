import URLs from "../config";
export const Fetch = (method) => (url) => (data) => fetch(URLs.baseURL + url, {
  method,
  headers: {
    "Content-Type": "application/json"
  },
  credentials: 'include',
  body: JSON.stringify(data)
});

export default Fetch;