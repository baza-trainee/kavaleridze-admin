import React from "react";
import { Controller, Control } from "react-hook-form";
import {
  Box,
  TextField,
  Button,
  InputLabel,
  Typography,
  useTheme,
} from "@mui/material";
import SvgSpriteIcon from "../Common/SvgSprite";

interface ContactFieldProps {
  label: string;
  fieldName: string;
  control: Control;
  onChange: (value: string) => void;
  onSave: () => void;
  isChanged: boolean;
  isMulti?: boolean;
  rows?: number;
  iconId?: string;
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
  iconId,
}) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        component={InputLabel}
        variant="body1"
        sx={{
          marginBottom: "8px",
          color: theme.palette.text.primary,
          fontWeight: "600",
        }}
      >
        {label}
      </Typography>

      <Controller
        name={fieldName}
        control={control}
        render={({ field }) => (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "375px 154px", lg: "460px 350px" },
              gap: "24px",
            }}
          >
            <TextField
              sx={{
                input: {
                  fontSize: { xs: "14px", md: "16px" },
                },
              }}
              {...(iconId && {
                InputProps: {
                  endAdornment: (
                    <SvgSpriteIcon fontSize="small" iconId={iconId} />
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
              type="submit"
              variant="secondary"
              sx={{
                // fontSize: "40px",
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
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
