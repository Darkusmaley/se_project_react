const baseUrl = "http://localhost:3001";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error:${res.status}`);
};

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const getClothingItems = (jwt) => {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer ${jwt}`,
    },
  });
};

export const addClothingItems = ({ name, imageUrl, weather }, jwt) => {
  return request(`${baseUrl}/items`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    }),
  });
};

export const deleteClothingItems = (id, jwt) => {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer ${jwt}`,
    },
  });
};

export const likeCard = (_id, token) => {
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const unlikeCard = (_id, token) => {
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "authorization": `Bearer ${token}`,
    },
  }).then(checkResponse);
};

const api = {
  addClothingItems,
  deleteClothingItems,
  getClothingItems,
  likeCard,
  unlikeCard,
};

export default api;
