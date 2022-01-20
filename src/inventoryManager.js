import './inventoryManager.css';
import Product from './product';
import {useState, useEffect} from 'react';
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import {db} from './config/firebaseConfig';
import { CSVLink } from "react-csv";
import AddProduct from './addProduct';

function InventoryManager({productName, productModel, description, id}) {

  const [openAddModal, setOpenAddModal] = useState(false);
  const [products, setProducts] = useState([]);

  /* This function is to get all products from FireStore DB in realtime */ 
  useEffect(() => {
    const ProductColRef = query(collection(db, 'products'), orderBy('created', 'desc'));
    onSnapshot(ProductColRef, (snapshot) => {
      setProducts(snapshot.docs.map(doc => ({
        id: doc.id,
        productName: doc.productName,
        productModel: doc.productModel,
        description: doc.description,
        data: doc.data()
      })))
    })
  },[]);

  const headers = [
    { label: "Product Id", key: "id" },
    { label: "Product Name", key: "productName" },
    { label: "Product Model", key: "productModel" },
    { label: "Product Description", key: "description" }
  ];

  const data = [
    {id: {id}, productName: {productName}, productModel: {productModel}, description: {description}}
  ];

  return (
    <div className='inventoryManager'>
      <header>Inventory Manager</header>
      <div className='inventoryManager__container'>
        <button 
          onClick={() => setOpenAddModal(true)}>
          Add Product
        </button>
        <div className='inventoryManager__products'>
          {products.map((product) => (
            <Product
              id={product.id}
              key={product.id}
              completed={product.data.completed}
              productName={product.data.productName}
              productModel={product.data.productModel}
              description={product.data.description}
            />
          ))}
        </div>
        <div className='inventoryManager__container'>
        <button>
        <CSVLink data={data} headers={headers}>Export Products Data</CSVLink>   
        </button>
        </div>
      </div>

      {openAddModal &&
        <AddProduct onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    </div>
  );
};

export default InventoryManager;
