export function getData(url, options) {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  })
    .then((response) => {
      if(!response.ok){
        throw new Error(response.statusText);
      }
      return response.json();
    })
}
