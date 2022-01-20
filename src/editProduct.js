import Modal from "./modal";
import {useState} from 'react';
import './editProduct.css';
import { doc, updateDoc } from "firebase/firestore";
import {db} from './config/firebaseConfig';

function EditProduct({open, onClose, toEditProductName, toEditProductModel, toEditDescription, id}) {

  const [productName, setProductName] = useState(toEditProductName);
  const [productModel, setProductModel] = useState(toEditProductModel);
  const [description, setDescription] = useState(toEditDescription);

  /* This function is to update FireStore DB */
  const handleUpdate = async (e) => {
    e.preventDefault();
    const productDocRef = doc(db, 'products', id);
    try{
      await updateDoc(productDocRef, {
        productName: productName,
        productModel: productModel,
        description: description
      })
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal modalLabel='Edit Product' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editProduct'>
        <input type='text' name='productName' onChange={(e) => setProductName(e.target.value)} value={productName}/>
        <input type='text' name='productModel' onChange={(e) => setProductModel(e.target.value)} value={productModel}/>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  );
};

export default EditProduct;
