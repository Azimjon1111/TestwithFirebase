import react, { useState, useEffect } from "react";
import axios from "axios";
import CreatePostModal from "../ui/Modals/createPost";
import DeletePostModal from "../ui/Modals/deletePost";
import UpdatePostModal from "../ui/Modals/updatePost";
const MainPage = () => {
  interface ItemProps {
    id: number;
    userId: number;
    title: string;
    body: string;
  }
  const [data, setData] = useState([]);
  const [onePostData, setOnePostData] = useState<ItemProps>({
    id: 0,
    userId: 0,
    title: "",
    body: "",
  });
  const [modalShow, setModalShow] = useState(false);
  const [updateModalShow, setUpdateModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CreatePostModal
        show={modalShow}
        onCancel={() => {
          setModalShow(false);
        }}
      />
      <DeletePostModal
        id={onePostData.id}
        show={deleteModalShow}
        onCancel={() => {
          setDeleteModalShow(false);
        }}
      />
      <UpdatePostModal
        onePostData={onePostData}
        show={updateModalShow}
        onCancel={() => {
          setUpdateModalShow(false);
        }}
      />
      <div style={{ margin: "50px" }}>
        <h1>Main Page</h1>
        <button
          onClick={() => {
            setModalShow(true);
          }}
        >
          Create
        </button>
        <table>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
          {data.map((item: ItemProps, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                <button
                  onClick={() => {
                    setUpdateModalShow(true);
                    setOnePostData(item);
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    setDeleteModalShow(true);
                    setOnePostData(item);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
export default MainPage;
