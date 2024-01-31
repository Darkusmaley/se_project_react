const baseUrl = "http://localhost:3001";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error:${res.status}`);
};

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

const getClothingItems = () => {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const addClothingItems = ({ name, imageUrl, weather }) => {
  return request(`${baseUrl}/items`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    }),
  });
};

export const deleteClothingItems = (id) => {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const api = {
  addClothingItems,
  deleteClothingItems,
  getClothingItems,
};

export default api;
