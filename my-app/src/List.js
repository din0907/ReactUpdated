import react, { useState } from 'react'
import Card from './Card';
import Modal from './modal';

const List = (props) => {
    const [isShowModalWindow, setIsShowModalWindow] = useState(false);
    const[modalData ,setModalData] = useState({});
    const EmployeeJSON = [
        {id:1,name:'Dinesh'},
        {id:2,name:'Din'},
        {id:3,name:'Dine'},
        {id:4,name:'Dines'}
    ]
    const [empData, setEmpData] = useState(EmployeeJSON);
    const addEmplyee = () => {
        setIsShowModalWindow(true);
    }
    const addEditRec = (data) => {
       if(!data.id) {
        data.id = empData.length +1;
            let updatedData = [...empData, data];
            setEmpData(updatedData);
       } else {
        const findIndex = empData.findIndex((rec) => {
            return rec.id === data.id
        })
        if(findIndex !== -1) {
            let updatedData = [...empData];
            updatedData[findIndex] = data;
            setEmpData(updatedData);
        }
       }
       setIsShowModalWindow(false);
    }
    const editData = (data) => {
        data.isEdit = true;
       setModalData(data);
       setIsShowModalWindow(true);
    }
    const deleteData = (id) => {
        const updatedData = empData.filter((rec) => {
            return rec.id !== id
        })
        setEmpData(updatedData);
    }
    const hideModal = () => {
        let obj = {};
        setModalData(obj);
        setIsShowModalWindow(false);
    }
    return (
        <>
            <button onClick={addEmplyee}>Add</button>
            {empData.map((rec) => {
                return (<Card data = {rec} editData = {editData} deleteData = {deleteData}/>)
            })}
            {isShowModalWindow && <Modal data = {modalData} addEditRec = {addEditRec} hideModal = {hideModal}/>}
            </>
    )
}
export default List;