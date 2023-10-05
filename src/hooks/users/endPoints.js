import api from "../../utils/api";


export const GetLogin = async (data) => {
    let res = await api.post("/users/login", data);
    return res?.data;
}
export const GetUser = async () => {
    let res = await api.get(`/users/getUser`, { headers: { authorization: `${localStorage.getItem("token")}` } });
    return res?.data;
}