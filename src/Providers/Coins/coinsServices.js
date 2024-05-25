import axios from "axios"

export const fetchTrendCoins = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    return(res.data.coins)
}
export const fetchSingleCoin = async (id) => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return res.data
}



