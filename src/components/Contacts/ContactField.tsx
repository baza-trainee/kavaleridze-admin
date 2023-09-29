import React from "react";
import { Controller, Control } from "react-hook-form";
import { Box, TextField, Button, InputLabel } from "@mui/material";
// import { Control, FieldValues } from "react-hook-form";

interface ContactFieldProps {
  label: string;
  fieldName: string;
  control: Control;
  onChange: (value: string) => void;
  onSave: () => void;
  isChanged: boolean;
}

const ContactField: React.FC<ContactFieldProps> = ({
  label,
  fieldName,
  control,
  onChange,
  onSave,
  isChanged,
}) => {
  return (
    <Box>
      <InputLabel
        sx={{
          marginBottom: "8px",
          color: "inherit",
          fontSize: { xs: "16px", lg: "18px" },
          fontWeight: "600",
        }}
      >
        {label}
      </InputLabel>
      <Controller
        name={fieldName}
        control={control}
        render={({ field }) => (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <TextField
              {...field}
              variant="outlined"
              onChange={(e) => onChange(e.target.value)}
            />
            <Button
              variant="secondary"
              color="primary"
              onClick={onSave}
              disabled={!isChanged}
            >
              Зберегти зміни
            </Button>
          </Box>
        )}
      />
    </Box>
  );
};

export default ContactField;
