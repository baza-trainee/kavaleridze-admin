import React, { useState, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import PageTemplate from "../Common/PageTemplate";
import ContactField from "./ContactField";
import { Box } from "@mui/material";

import { getContactInfo, updateContactInfo } from "@/api";

type FieldName =
  | "phoneNumber"
  | "email"
  | "subwayRoute"
  | "funicularRoute"
  | "busRoute";

const Contacts: React.FC = () => {
  const [contactInfo, setContactInfo] = useState({
    phoneNumber: "",
    email: "",
    subwayRoute: "",
    funicularRoute: "",
    busRoute: "",
  });

  // const [formData, setFormData] = useState<Record<FieldName, string>>({
  //   phoneNumber: "(044) 425-33-97",
  //   email: "kavaleridzemuseum@gmail.com",
  //   subwayRoute:
  //     "до станції “Контрактова площа”, далі пройти пішки близько 1 км",
  //   funicularRoute:
  //     "від станції “Поштова площа” піднятися  до  Михайлівської площі, далі пройти по вулиці Володимирській до Андріївського узвозу, 21.",
  //   busRoute: "114 119 18ТР",
  // });

  const { control, handleSubmit, setValue, getValues } = useForm<FieldValues>({
    mode: "all",
    defaultValues: {
      phoneNumber: contactInfo.phoneNumber,
      email: contactInfo.email,
      subwayRoute: contactInfo.subwayRoute,
      funicularRoute: contactInfo.funicularRoute,
      busRoute: contactInfo.busRoute,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getContactInfo();

        setContactInfo(response.data);

        setValue("phoneNumber", response.data.phoneNumber || "");
        setValue("email", response.data.email || "");
        setValue("subwayRoute", response.data.subwayRoute || "");
        setValue("funicularRoute", response.data.funicularRoute || "");
        setValue("busRoute", response.data.busRoute || "");
      } catch (error) {
        console.error("Помилка при отриманні даних з серверу:", error);
      }
    };

    fetchData();
  }, [setValue]);

  const [fieldChanges, setFieldChanges] = useState<{
    [key in FieldName]: boolean;
  }>({
    phoneNumber: false,
    email: false,
    subwayRoute: false,
    funicularRoute: false,
    busRoute: false,
  });

  const handleInputChange = (field: FieldName, value: string) => {
    const isValueChanged = value !== getValues(field);

    setFieldChanges((prevChanges) => ({
      ...prevChanges,
      [field]: isValueChanged,
    }));

    setContactInfo((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    setValue(field, value);
  };

  const handleSave = async () => {
    try {
      // Надіслати усі дані об'єкта contactInfo на сервер
      await updateContactInfo(contactInfo);
      console.log("Дані відправлені на сервер:", contactInfo);

      // Скинути флажки змін у полях
      setFieldChanges({
        phoneNumber: false,
        email: false,
        subwayRoute: false,
        funicularRoute: false,
        busRoute: false,
      });
    } catch (error) {
      // Обробка помилок
      console.error("Помилка при відправленні даних на сервер:", error);
    }
  };

  return (
    <PageTemplate title="Редагувати контакти">
      <form onSubmit={handleSubmit(() => {})}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <ContactField
            label="Номер телефону"
            fieldName="phoneNumber"
            control={control}
            onChange={(value) => handleInputChange("phoneNumber", value)}
            onSave={() => handleSave()}
            isChanged={fieldChanges.phoneNumber}
            iconId="phone"
          />
          <ContactField
            label="Електронна адреса"
            fieldName="email"
            control={control}
            onChange={(value) => handleInputChange("email", value)}
            onSave={() => handleSave()}
            isChanged={fieldChanges.email}
            iconId="email"
          />
          <ContactField
            label="Метро"
            fieldName="subwayRoute"
            isMulti={true}
            rows={4}
            control={control}
            onChange={(value) => handleInputChange("subwayRoute", value)}
            onSave={() => handleSave()}
            isChanged={fieldChanges.subwayRoute}
          />
          <ContactField
            label="Фунікулер"
            fieldName="funicularRoute"
            isMulti={true}
            rows={4}
            control={control}
            onChange={(value) => handleInputChange("funicularRoute", value)}
            onSave={() => handleSave()}
            isChanged={fieldChanges.funicularRoute}
          />
          <ContactField
            label="Автобус"
            fieldName="busRoute"
            isMulti={true}
            rows={4}
            control={control}
            onChange={(value) => handleInputChange("busRoute", value)}
            onSave={() => handleSave()}
            isChanged={fieldChanges.busRoute}
          />
        </Box>
      </form>
    </PageTemplate>
  );
};

export default Contacts;
