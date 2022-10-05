const API_URL = 'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';

export function getPictures() {
  return fetch(`${API_URL}`)
    .then(res => res.json());
}