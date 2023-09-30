import React from "react";
import { Controller, Control } from "react-hook-form";
import { Box, TextField, Button, InputLabel, useTheme } from "@mui/material";

interface ContactFieldProps {
  label: string;
  fieldName: string;
  control: Control;
  onChange: (value: string) => void;
  onSave: () => void;
  isChanged: boolean;
  isMulti?: boolean;
  rows?: number;
  icon?: string;
}

const ContactField: React.FC<ContactFieldProps> = ({
  label,
  fieldName,
  control,
  onChange,
  onSave,
  isChanged,
  isMulti,
  rows,
  icon,
}) => {
  const theme = useTheme();
  return (
    <Box>
      <InputLabel
        sx={{
          marginBottom: "8px",
          color: theme.palette.text.primary,
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
              {...(icon && {
                InputProps: {
                  endAdornment: (
                    <Box
                      component="img"
                      src={icon}
                      alt="phone icon"
                      sx={{ width: "22px", height: "22px" }}
                    />
                  ),
                },
              })}
              {...field}
              multiline={isMulti}
              variant="outlined"
              rows={rows}
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
