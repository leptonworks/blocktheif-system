import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Product from "../../../../../contract/artifacts/contracts/Greeter.sol/Product.json";
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: '999'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80%',
    overflow: 'auto'
  }
};

const contractAddress = "0x73511669fd4dE447feD18BB79bAFeAC93aB7F31f";
const ABI = Product.abi;
const provider = new ethers.providers.JsonRpcProvider(
  "http://localhost:8545"
);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, ABI, signer);

function ViewProducts() {
  const [productCount, setProductCount] = useState(0);
  const [productIds, setProductIds] = useState([]);
  const [productData, setProductData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function getProductIds() {
      const count = await contract.getProductCount();
      setProductCount(count.toString());
      const ids = await contract.getProductIds();
      const idArray = ids.map((id) => id.toNumber());

      // Create an array to store the products
      const products = [];

      // Loop through each product ID
      for (const id of idArray) {
        const product = await contract.getProduct(id);
        const [name, emei, color, size, price, timestamp] = product;

        // Add the product to the array
        products.push({
          id,
          name,
          emei,
          color,
          size,
          price: ethers.utils.formatEther(price),
          timestamp: new Date(timestamp.toNumber() * 1000).toLocaleString(),
        });
      }

      // Set the product data state with the array of products
      setProductData(products);
    }

    getProductIds();
  }, []);

  const filteredProducts = productData.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  function handleViewDetails(product) {
    setSelectedProduct(product);
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setSelectedProduct(null);
    setModalIsOpen(false);
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="mt-16 px-4 py-6 sm:px-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">View Products</h2>
          <div className="flex justify-end mb-4">
            <input type="text" placeholder="Search products" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="border border-gray-400 p-2 rounded-md" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{filteredProducts.map((product) => (
<div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
<div className="px-4 py-2">
<h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
<p className="text-sm text-gray-500 mb-2">EMEI: {product.emei}</p>
<button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
onClick={() => handleViewDetails(product)}>View Details</button>
</div>
</div>
))}
</div>
<Modal
         isOpen={modalIsOpen}
         onRequestClose={handleCloseModal}
         style={customStyles}
         contentLabel="Product Details Modal"
         ariaHideApp={false}
       >
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
<div className="px-4 py-2">
<h3 className="text-lg font-bold text-gray-800 mb-2">{selectedProduct?.name}</h3>
<p className="text-sm text-gray-500 mb-2">EMEI: {selectedProduct?.emei}</p>
<p className="text-sm text-gray-500 mb-2">Color: {selectedProduct?.color}</p>
<p className="text-sm text-gray-500 mb-2">Size: {selectedProduct?.size}</p>
<p className="text-xl font-bold text-gray-800 mb-2">${selectedProduct?.price}</p>
<p className="text-sm text-gray-500 mb-2">Timestamp: {selectedProduct?.timestamp}</p>
<button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                     onClick={handleCloseModal}>Close</button>
</div>
</div>
</Modal>
</div>
</div>
</div>
);
}

export default ViewProducts;