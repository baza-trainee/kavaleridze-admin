import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import PageTemplate from "../Common/PageTemplate";
import ContactField from "./ContactField";
import { Box } from "@mui/material";

type FieldName = "phoneNumber" | "email" | "metro" | "funicular" | "bus";

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState<Record<FieldName, string>>({
    phoneNumber: "(044) 425-33-97",
    email: "kavaleridzemuseum@gmail.com",
    metro: "до станції “Контрактова площа”, далі пройти пішки близько 1 км",
    funicular:
      "від станції “Поштова площа” піднятися  до  Михайлівської площі, далі пройти по вулиці Володимирській до Андріївського узвозу, 21.",
    bus: "114 119 18ТР",
  });

  const { control, handleSubmit, setValue, getValues } = useForm<FieldValues>({
    mode: "all",
    defaultValues: {
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      metro: formData.metro,
      funicular: formData.funicular,
      bus: formData.bus,
    },
  });

  const [fieldChanges, setFieldChanges] = useState<{
    [key in FieldName]: boolean;
  }>({
    phoneNumber: false,
    email: false,
    metro: false,
    funicular: false,
    bus: false,
  });

  const handleInputChange = (field: FieldName, value: string) => {
    const isValueChanged = value !== getValues(field);

    setFieldChanges((prevChanges) => ({
      ...prevChanges,
      [field]: isValueChanged,
    }));

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    setValue(field, value);
  };

  const handleSave = (field: FieldName, value: string) => {
    const dataToSend = {
      [field]: value,
    };
    console.log("Дані відправлені на сервер:", dataToSend);

    setFieldChanges((prevChanges) => ({
      ...prevChanges,
      [field]: false,
    }));
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
            onSave={() => handleSave("phoneNumber", getValues("phoneNumber"))}
            isChanged={fieldChanges.phoneNumber}
            iconId="phone"
          />
          <ContactField
            label="Електронна адреса"
            fieldName="email"
            control={control}
            onChange={(value) => handleInputChange("email", value)}
            onSave={() => handleSave("email", getValues("email"))}
            isChanged={fieldChanges.email}
            iconId="email"
          />
          <ContactField
            label="Метро"
            fieldName="metro"
            isMulti={true}
            rows={4}
            control={control}
            onChange={(value) => handleInputChange("metro", value)}
            onSave={() => handleSave("metro", getValues("metro"))}
            isChanged={fieldChanges.metro}
          />
          <ContactField
            label="Фунікулер"
            fieldName="funicular"
            isMulti={true}
            rows={4}
            control={control}
            onChange={(value) => handleInputChange("funicular", value)}
            onSave={() => handleSave("funicular", getValues("funicular"))}
            isChanged={fieldChanges.funicular}
          />
          <ContactField
            label="Автобус"
            fieldName="bus"
            isMulti={true}
            rows={4}
            control={control}
            onChange={(value) => handleInputChange("bus", value)}
            onSave={() => handleSave("bus", getValues("bus"))}
            isChanged={fieldChanges.bus}
          />
        </Box>
      </form>
    </PageTemplate>
  );
};

export default Contacts;
