import axios from "axios";

const BASE_URL = "http://localhost:8081/api/";
// console.log(BASE_URL);

const instance = axios.create({
  baseURL: BASE_URL,
  auth: {
    username: "root",
    password: "password",
  },
});

export const getContactInfo = () => {
  console.log("BASE-URL from environment", BASE_URL);
  console.log("axios base url", instance.getUri());

  return instance.get("/museum_data");
};

interface ContactInfo {
  id?: string;
  phoneNumber: string;
  email: string;
  subwayRoute: string;
  funicularRoute: string;
  busRoute: string;
}

export const updateContactInfo = (data: ContactInfo) => {
  return instance.put("/admin/museum_data", data);
};
