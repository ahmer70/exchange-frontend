import api from "../../utils/api";

export const Register = async (data) => {
    let res = await api.post("/vehicles/register", data, { headers: { authorization: `${localStorage.getItem("token")}` } });
    return res?.data;
}

export const GetList = async () => {
    let res = await api.get(`/vehicles/getList`, { headers: { authorization: `${localStorage.getItem("token")}` } });
    return res?.data;
}
export const GetFile = async (fileId) => {
    let res = await api.get(`/vehicles/files/${fileId}`, { headers: { authorization: `${localStorage.getItem("token")}` } });
    return res?.data;
}

