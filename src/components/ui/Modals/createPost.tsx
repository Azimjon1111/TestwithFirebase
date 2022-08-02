import react, { FunctionComponent, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";
import React from "react";
interface CreatePostModalProps {
  show: boolean;
  onCancel: () => void;
  children?: React.ReactNode;
}
// export interface SweetAlertOptionalPropsWithDefaults {
//   allowEscape?: boolean;
//   closeOnClickOutside?: boolean;
//   inputType?: string;
//   customClass?: string;
//   validationMsg?: string;
//   validationRegex?: RegExp;
//   hideOverlay?: boolean;
//   show?: boolean;
//   required?: boolean;
//   disabled?: boolean;
//   focusConfirmBtn?: boolean;
//   focusCancelBtn?: boolean;
//   confirmBtnBsStyle?: string;
//   cancelBtnBsStyle?: string;
//   showCloseButton?: boolean;
//   beforeMount?: () => any;
//   afterMount?: () => any;
//   beforeUpdate?: (
//     prevProps: SweetAlertProps,
//     prevState: SweetAlertState
//   ) => any;
//   afterUpdate?: (props: SweetAlertProps, state: SweetAlertState) => any;
//   beforeUnmount?: () => any;
//   style?: CSSProperties;
//   closeBtnStyle?: CSSProperties;
//   timeout?: number;
//   openAnim?: boolean | SweetAlertAnimationProps;
//   closeAnim?: boolean | SweetAlertAnimationProps;
//   reverseButtons?: boolean;
//   dependencies?: any[];
// }
const CreatePostModal: React.FC<CreatePostModalProps> = (props) => {
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
