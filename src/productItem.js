import Modal from "./modal";
import './productItem.css';

function ProductItem({onClose, open, productName, productModel, description}) {
  return (
    <Modal modalLabel='Product' onClose={onClose} open={open}>
      <div className='productItem'>
        <p><u>Name:</u> {productName}</p>
        <p><u>Model:</u> {productModel}</p>
        <p><u>Description:</u> {description}</p>
      </div>
    </Modal>
  )
};

export default ProductItem;
