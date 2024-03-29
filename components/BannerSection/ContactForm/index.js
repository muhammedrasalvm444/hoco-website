import { StyledButton } from "@/components/StyledButton";
import SearchBox from "@/components/SearchBox";
import { Button, Input, TextField, TextareaAutosize } from "@mui/material";
import React from "react";

const ContactForm = () => {
  //   const handleSubmit = () => {
  //     console.log("d");
  //   };
  return (
    <div>
      <form
        className="flex flex-col items-center px-16 py-8 rounded-md bg-formBgColor"
        // onSubmit={handleSubmit}
      >
        <h1 className="my-5 text-2xl font-extrabold text-blueColor">
          Quick contact
        </h1>
        <TextField
          label="Email Address"
          variant="outlined"
          className="mb-3"
          fullWidth
          required
          style={{ backgroundColor: "#ffffff7f", borderColor: "#ffffff7f" }}
        />
        <TextareaAutosize
          aria-label="Accept Terms and Conditions"
          placeholder=""
          minRows={1}
          className="p-8 mb-3 border rounded"
          required
          style={{ backgroundColor: "#ffffff7f", borderColor: "#ffffff7f" }}
        />
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" required />
          <p className="text-sm text-gray-500">
            I accept the{" "}
            <a href="/terms-and-conditions" className="text-blue-500">
              Terms and Conditions
            </a>
          </p>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-4 bg-blueColor"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
