import Modal from "./modal";
import {useState} from 'react';
import './addProduct.css';
import {db} from './config/firebaseConfig';
import {collection, addDoc, Timestamp} from 'firebase/firestore';

function AddProduct({onClose, open}) {

  const [productName, setProductName] = useState('');
  const [productModel, setProductModel] = useState('');
  const [description, setDescription] = useState('');

  /* This function is to add new product to FireStore DB */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'products'), {
        productName: productName,
        productModel: productModel,
        description: description,
        completed: false,
        created: Timestamp.now()
      })
      onClose();
    } catch (err) {
      alert(err)
    }
  };

  return (
    <Modal modalLabel='Add New Product' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addProduct' name='addProduct'>
        <input 
          type='text' 
          name='productName' 
          onChange={(e) => setProductName(e.target.value)} 
          value={productName}
          placeholder='Enter Product Name'/>
        <input 
          type='text' 
          name='productModel' 
          onChange={(e) => setProductModel(e.target.value)} 
          value={productModel}
          placeholder='Enter Product Model'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter Product Description'
          value={description}></textarea>
        <button type='submit'>Submit</button>
      </form> 
    </Modal>
  )
};

export default AddProduct;
