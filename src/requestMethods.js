import axios from "axios";

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTRkMTNkMTI5NzRmNTUxMDBiODcxMyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzg5NzgzNDEsImV4cCI6MTYzOTIzNzU0MX0.KEmBxIHdAMQVSZdaRD3TtTNfRz0i1CMvGvfNBEl-v0A"

// const BASE_URL = "http://localhost:8000/api/";
const BASE_URL = "https://ecommerce-node-server.vercel.app/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;



export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

