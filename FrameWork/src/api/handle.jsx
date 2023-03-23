import  {instance}  from "./instance";

export const getAll = () => {
    return instance.get(`/products`);  
};

export const getOne = (id) => {
    return instance.get(`/products/${id}`);  
};

export const Add = (data) => {
    return instance.post(`/products`,data);
};

export const Update = (id,data) => {
    return instance.put(`/products/${id}`,data);  
};

export const Remove = (id) => {
    return instance.delete(`/products/${id}`);  
};