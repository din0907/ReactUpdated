import react from 'react'
const Card = (props) => {
    const EditRec = () => {
        props.editData(props.data);
    }
    const deleteRec = () => {
        props.deleteData(props.data.id);
    }
    return (
        <div style={{"border":"1px solid #000"}}>
             <p>{props.data.id} </p><p>{props.data.name}</p>
             <button onClick={EditRec}>Edit</button>
             <button onClick={deleteRec}>Delete</button>
        </div>
       
    )
}

export default Card;