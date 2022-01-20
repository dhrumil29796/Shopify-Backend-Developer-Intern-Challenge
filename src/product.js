import './product.css';
import {useState} from 'react';
import ProductItem from './productItem';
import EditProduct from './editProduct';
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from './config/firebaseConfig';

function Product({id, productName, productModel, description, completed}) {

  const [checked, setChecked] = useState(completed);
  const [open, setOpen] = useState({edit:false, view:false});

  const handleClose = () => {
    setOpen({edit:false, view:false})
  };

  /* This function is to update FireStore DB */
  const handleChange = async () => {
    const ProductDocRef = doc(db, 'products', id)
    try{
      await updateDoc(ProductDocRef, {
        completed: checked
      })
    } catch (err) {
      alert(err)
    }
  };

  /* This function is to delete a document from FirStore DB */ 
  const handleDelete = async () => {
    const ProductDocRef = doc(db, 'products', id)
    try{
      await deleteDoc(ProductDocRef)
    } catch (err) {
      alert(err)
    }
  };

  return (
    <div className={`product ${checked && 'product--borderColor'}`}>
      <div>
        <input 
          id={`checkbox-${id}`} 
          className='checkbox-custom'
          name="checkbox" 
          checked={checked}
          onChange={handleChange}
          type="checkbox" />
        <label 
          htmlFor={`checkbox-${id}`} 
          className="checkbox-custom-label" 
          onClick={() => setChecked(!checked)} ></label>
      </div>
      <div className='product__body'>
        <p>{productName}</p>
        <p>{description}</p>
        <div className='product__buttons'>
          <div className='product__deleteNedit'>
            <button 
              className='product__editButton' 
              onClick={() => setOpen({...open, edit : true})}>
              Edit
            </button>
            <button className='product__deleteButton' onClick={handleDelete}>Delete</button>
          </div>
          <button 
            onClick={() => setOpen({...open, view: true})}>
            View
          </button>
        </div>
      </div>

      {open.view &&
        <ProductItem 
          onClose={handleClose} 
          productName={productName}
          productModel={productModel}
          description={description} 
          open={open.view} />
      }

      {open.edit &&
        <EditProduct 
          onClose={handleClose} 
          toEditProductName={productName}
          toEditProductModel={productModel}
          toEditDescription={description} 
          open={open.edit}
          id={id} />
      }
    </div>
  )
};

export default Product;