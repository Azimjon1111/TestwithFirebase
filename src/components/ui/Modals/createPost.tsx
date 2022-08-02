import react, { FunctionComponent, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";
import React from "react";
export interface SweetAlertOptionalPropsWithDefaults {
  show?: boolean;
  title?: string;
  showConfirm?: boolean;
  onCancel: () => void;
  children: Element[];
}
interface CreatePostModalProps {
  show: boolean;
  onCancel: () => void;
  children?: SweetAlertOptionalPropsWithDefaults;
}
const CreatePostModal: React.FC<CreatePostModalProps> = (props: CreatePostModalProps) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const Submit = () => {
    let data = {
      id: 1,
      title,
      body,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => {
        props.onCancel();
        setBody("");
        setTitle("");
        alert("Post created");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SweetAlert
      show={props.show}
      title="Create a new post"
      showConfirm={false}
      onCancel={props.onCancel}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
        <TextField
          label="Size"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
      </Box>
      <Button
        onClick={() => {
          Submit();
        }}
        variant="contained"
      >
        Submit
      </Button>
    </SweetAlert>
  );
};
export default CreatePostModal;
