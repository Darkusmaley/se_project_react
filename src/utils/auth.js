import { checkResponse } from "./api";
const baseUrl = "http://localhost:3001";
const baseHeader = { "Content-Type": "application/json" };

export const register = ({ name, avatar, email, password }) => {
  return (fetch(`${baseUrl}/signup`),
  {
    method: "Post",
    headers: `${baseHeader}`,
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(checkResponse);
};

export const authorizeUser = ({ email, password }) => {
  return (fetch(`${baseUrl}/signin`),
  {
    method: "Post",
    headers: `${baseHeader}`,
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const checkToken = (token) => {
  return (fetch(`${baseUrl}/users/me`),
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
