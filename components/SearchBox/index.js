import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const SearchTextField = () => {
  return (
    <TextField
      placeholder="Search For..."
      variant="filled"
      fullWidth
      sx={{
        "& input": {
          border: "none",
          color: "gray",
          fontSize: "1rem",
        },
        "& .MuiFilledInput-root": {
          backgroundColor: "#f9f9fc",
        },
        "& .MuiFilledInput-underline:after": {
          borderBottom: "none",
        },
        "& .MuiInputLabel-filled": {
          transform: "translate(12px, 14px) scale(1)",
          color: "white",
          fontSize: "1rem", // Set the default font size for the label
        },
        // Responsive styles
        "@media (max-width: 600px)": {
          "& input": {
            fontSize: "0.8rem", // Set a smaller font size for smaller screens
          },
          "& .MuiInputLabel-filled": {
            fontSize: "0.8rem",
          },
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={{ margin: "" }}>
            <SearchIcon
              sx={{
                fontSize: "2rem",
                backgroundColor: "white",
                padding: "8px",
                borderRadius: "2px",
              }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchTextField;
