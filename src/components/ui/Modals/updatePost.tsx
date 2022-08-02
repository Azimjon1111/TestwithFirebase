import react, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";
interface UpdatePostModalProps {
  show: boolean;
  onCancel: () => void;
  onePostData: {
    id: number;
    userId: number;
    title: string;
    body: string;
  };
}
const UpdateModalPost = (props: UpdatePostModalProps) => {
  const [title, setTitle] = useState(props.onePostData.title);
  const [body, setBody] = useState(props.onePostData.body);
  useEffect(() => {
    setTitle(props.onePostData.title);
    setBody(props.onePostData.body);
  }, [props.onePostData]);
  const Submit = () => {
    let data = {
      id: 1,
      userId: props.onePostData.userId,
      title,
      body,
    };
    axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${props.onePostData.id}`,
        data
      )
      .then((res) => {
        props.onCancel();
        setBody("");
        setTitle("");
        alert("Post Updated");
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
          size="small"
        />
        <TextField
          label="Size"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          id="outlined-size-small"
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
export default UpdateModalPost;
