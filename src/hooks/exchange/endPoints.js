import api from "../../utils/api";



export const GetOne = async (countryName) => {
    let res = await api.get(`/exchange/lookup?name=${countryName}`, { headers: { authorization: `${localStorage.getItem("token")}` } });
    return res?.data;
}

