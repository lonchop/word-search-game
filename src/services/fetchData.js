import axios from "axios";

export async function fetchData(wordsQuantity, charactersQuantity) {
  const options = {
    method: "GET",
    url: `https://clientes.api.greenborn.com.ar/public-random-word?c=${wordsQuantity}&l=${charactersQuantity}`,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
