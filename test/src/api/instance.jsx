import axios from "axios"

const instance = axios.create({
   baseURL:`http://localhost:3000` 
});

export const getAll = () => {
    return instance.get(`/products`);
}

export const getOne = (id) => {
    return instance.get(`/products/${id}`);
}

export const Create = (data) => {
    return instance.post(`/products`,data);
}

export const Update = (id,data) => {
    return instance.put(`/products/${id}`,data);
}

export const Remove = (id) => {
    return instance.delete(`/products/${id}`);
}