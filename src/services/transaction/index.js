import axios from "axios"
import { RootPath } from "../config"

const token = localStorage.getItem("token");

const transaction = (path, id, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${RootPath}/${path}/${id}`,
            {
                image: data
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            },
            { headers: { Authorization: `Bearer ${token}` } },
        ).then((response) => {
            resolve(response)
        }, (error) => {
            reject(error);
        });
    })

    return promise;
}

export { transaction };