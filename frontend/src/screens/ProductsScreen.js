import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { saveProducts, listProducts } from '../actions/productActions';

function ProductsScreen(props){
   
    const[modalVisible, setModalVisible] = useState(false);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [age, setAge] = useState('');
    const productList = useSelector(state=> state.productList);
    const {loading, products, error} = productList;
    const productSave = useSelector(state => state.productSave);

    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
    const dispatch = useDispatch();
    useEffect(()=> {
        
        dispatch(listProducts());

        return () => {
            //
        };
    },[]);


    const openModal = (product)=>{
        setModalVisible(true);

        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setCategory(product.category);
        setBrand(product.brand);
        setDescription(product.description);
        setStatus(product.status);
        setAge(product.age);

}

    const submitHandler = (e) => {
        
        e.preventDefault();
        dispatch(saveProducts({
            _id: id, 
            name, age, price, image, category, brand, 
            description, status}));
    }

    return <div className="content content-margined">
            <div className="product-header">
                <h3>Pets</h3>
                <button onClick= {()=>openModal([])}>Add Pet</button>
            </div>

{modalVisible &&
    <div className= "form">

            <form onSubmit= {submitHandler}>
                <ul className= "form-container">
                    <li>
                        <h3>
                            Add Pet for Sale or Adoption
                        </h3>
                    </li>
                    <li>
                        {loadingSave && <div>Loading Cuteness</div>}
                        {errorSave && <div>Cute Error: {errorSave}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">
                            Name of Pet 
                        </label>
                        <input 
                        type="text" 
                        name="name" 
                        value= {name}
                        id="name" 
                        onChange={(e) => setName(e.target.value)}></input>

                    </li>

                    <li>
                    <label htmlFor="age">
                            Age
                        </label>
                        <input 
                        type="Number" 
                        name="age" 
                        value= {age}
                        id="age" 
                        onChange={(e) => setAge(e.target.value)}></input>
                    </li>

                    <li>
                    <label htmlFor="price">
                            Price(Write Zero if For Adoption)
                        </label>
                        <input 
                        type="Number" 
                        name="price" 
                        value= {price}
                        id="price" 
                        onChange={(e) => setPrice(e.target.value)}></input>
                    </li>
                    <li>
                    <label htmlFor="image">
                        Add Image File Path
                        </label>
                        <input 
                        type="text" 
                        name="image" 
                        value= {image}
                        id="image" 
                        onChange={(e) => setImage(e.target.value)}></input>
                    </li>

                    <li>
                    <label htmlFor="category">
                            Enter Species(Cat/Dog/Bird):
                        </label>
                        <input 
                        type="text" 
                        name="category"
                        value= {category} 
                        id="category" 
                        onChange={(e) => setCategory(e.target.value)}></input> 
                </li>
                <li>
                    <label htmlFor="brand">
                        Breed
                        </label>
                        <input 
                        type="text" 
                        name="brand" 
                        value= {brand}
                        id="brand" 
                        onChange={(e) => setBrand(e.target.value)}></input>
                    </li>

                    <li>
                    <label htmlFor="description">
                        Description
                        </label>
                        <textarea 
                        type="text" 
                        name="description"
                        value= {description} 
                        id="description" 
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                    </li>
                    <li>
                    <label htmlFor="status">
                        For Adoption or for Sale
                        </label>
                        <input 
                        type="text" 
                        name="status" 
                        value= {status}
                        id="status" 
                        onChange={(e) => setStatus(e.target.value)}></input>
                    </li>

                    <li>
<button type= "submit" className= "button primary">{id?"Update This Pet": "Add to Inventory"}</button>
                    </li>
                    <li>
                        <button onClick= {()=>setModalVisible(false)} type= "button" className= "button secondary">Back</button>
                    </li>
                </ul>

            </form>
        </div>

}
        
            <div className= "product-list">

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Breed</th>
                            <th>Status</th>
                            
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map(product => (
                        <tr>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.age}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>{product.status}</td>
                            <td>
                                <button onClick= {()=>openModal(product)}>
                                    Edit
                                </button>
                                
                                <button>
                                    Delete
                                </button>

                            </td>
                        </tr>

                    ))}
                    

                    </tbody>
                </table>
            </div>

    </div>
    
    
  
}

export default ProductsScreen;