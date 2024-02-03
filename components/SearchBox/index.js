// components/SearchBox.js

import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <TextField
      placeholder="Search For..."
      variant="filled"
      fullWidth
      InputProps={{
        style: { width: "100%" }, // Ensure full width
        endAdornment: (
          <InputAdornment position="end" sx={{ margin: "" }}>
            <SearchIcon
              sx={{
                fontSize: "2rem", // Adjust the size as needed
                // color: "gray", // Adjust the color as needed
                backgroundColor: "white", // Background color of the icon
                padding: "3px",
                borderRadius: "2px",
                // Padding around the icon
              }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBox;
