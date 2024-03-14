const baseUrl = "http://localhost:3001";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error:${res.status}`);
};

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const getClothingItems = () => {
  const jwt = localStorage.getItem("jwt");
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  });
};

export const addClothingItems = ({ name, imageUrl, weather }) => {
  const jwt = localStorage.getItem("jwt");
  return request(`${baseUrl}/items`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    }),
  });
};

export const deleteClothingItems = (_id) => {
  const jwt = localStorage.getItem("jwt");
  return request(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  });
};

export const likeCard = (_id) => {
  const jwt = localStorage.getItem("jwt");
  return request(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  });
};

export const unlikeCard = (_id) => {
  const jwt = localStorage.getItem("jwt");
  return request(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  });
};

const api = {
  addClothingItems,
  deleteClothingItems,
  getClothingItems,
  likeCard,
  unlikeCard,
};

export default api;
