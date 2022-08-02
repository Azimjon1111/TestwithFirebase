import SweetAlert from "react-bootstrap-sweetalert";
import axios from 'axios'
interface DeletePostModalProps{
    show: boolean;
    onCancel: () => void;
    id: number;
  }
const DeletePostModal = (props: DeletePostModalProps)=>{
    const deletePost = ()=>{
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
        .then((res)=>{
            console.log(res)
           alert('Successfully deleted')
           props.onCancel()
        }).catch((err)=>{console.log(err)})
    }
    return(
        <SweetAlert
        show={props.show}
  warning
  showCancel
  confirmBtnText="Yes, delete it!"
  confirmBtnBsStyle="danger"
  title="Are you sure?"
  onConfirm={()=>{deletePost()}}
  onCancel={props.onCancel}
  focusCancelBtn
>
  You will not be able to recover this imaginary file!
</SweetAlert>
    )
}
export default DeletePostModal;