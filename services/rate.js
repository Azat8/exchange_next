import instance from "./axiosInstance"

export const calculateRate = (from, to, amount) => {
    return instance.get('/api/quote', {params: {from_currency_code: from, to_currency_code: to, amount}});
}