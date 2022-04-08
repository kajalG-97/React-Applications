import { createContext, useState } from "react";
import axios from "axios";

export const RegistrationContext = createContext();

export const RegistrationContextProvider = ({ children }) => {
    const [data, setData] = useState({
        name: "",
        age: "",
        DOB: "",
        address: "",
        state: "",
        pincode: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData({
            ...data,
            [id]: value
        })
    }
    const handleSubmit = (e) => {
        axios.post("http://localhost:5555/users", data).then((response) => console.log(response.data));

    }
    console.log('data', data);

    const { name, age, DOB, address, state, pincode } = data;

    return (
        <RegistrationContext.Provider value={{ name, age, DOB, address, state, pincode, handleChange ,handleSubmit}}>{children}</RegistrationContext.Provider>
    )
}