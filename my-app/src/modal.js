import react, { useState } from 'react'

const Modal = (props) => {
    const {
        data
    } = props;
    const [modalData,setModalData] = useState(data);
    const [name, setName] = useState(data.name);
    const onchangeHandler = (e) => {
        setName(e.target.value);
        let obj = {
            ...data,
            name:e.target.value
        }
        setModalData(obj);
    }
    const addEmp = () => {
        props.addEditRec(modalData);
    }
    const hideModal = () => {
        props.hideModal();
    }
    return (
        <>
            <input type= "text" value = {name} onChange = {onchangeHandler}/>
            <button onClick={hideModal}>Cancel</button>
            <button onClick={addEmp}>{props.data.isEdit && <span>update</span>}
            {!props.data.isEdit && <span>add</span>}
            </button>
        </>
    )
}
export default Modal;



