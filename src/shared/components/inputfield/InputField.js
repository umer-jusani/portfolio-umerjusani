"use client";
import { VisibilityIcon, VisibilityOffOutlinedIcon } from "@/shared/assets";
import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

const InputField = ({
  type = "text",
  placeholder,
  name,
  control,
  width = "min(100%, 55em)",
  rules,
  label,
  EndIcon,
  multiline = false,
  minRows = 1,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!control) {
    return (
      <TextField
        type={type}
        name={name} // ✅ Required for form submission!
        error={rest.error}
        helperText={rest.errorMessage}
        label={label}
        placeholder={placeholder}
        fullWidth
        multiline={multiline}
        minRows={minRows}
        sx={{
          width: width,
          backgroundColor: "background.paper",
          border: "2px solid #2b2b36",
          "&:focus": {
            border: "none",
            outline: "none",
          },
          "& .MuiInputBase-input": {
            color: "text.secondary",
            "&::placeholder": {
              color: "text.secondary",
              opacity: 1,
            },
          },
          "& .MuiInputLabel-root": {
            color: "text.secondary", // Set label color
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "text.secondary", // Keep label white when focused
          },
          ...rest.sx, // Merge with parent sx props
        }}
        InputLabelProps={{
          style: { color: "text.secondary" }, // Ensures label is white
        }}
        {...rest}
      />
    );
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          {...field}
          label={label}
          placeholder={placeholder}
          multiline={multiline}
          minRows={minRows}
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ""}
          FormHelperTextProps={{ sx: { color: "warning.main", ml: 0 } }}
          {...rest}
          slotProps={{
            input: {
              ...(type === "password" && {
                endAdornment: (
                  <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <VisibilityIcon
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </InputAdornment>
                ),
              }),
            },
          }}
        />
      )}
    />
  );
};

export default InputField;
