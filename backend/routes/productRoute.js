import express from 'express';
import Product from '../models/productModel';
import {isAuth, isAdmin} from '../util';

const router = express.Router();

router.get("/", async (req, res) =>{
  const products = await Product.find({});
  res.send(products);
});

router.get("/:id", async (req, res) =>{
  const product = await Product.findOne({_id: req.params.id});
  if(product){
    res.send(product);
  }else{
    res.send(404).send({message: "Pet Unavailable."})
  }
  
});

router.post("/", async (req, res) =>{
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    image: req.body.image,
    price: req.body.price,
    brand: req.body.brand,
    description: req.body.description,
    age: req.body.age,
    status: req.body.status,
  });
  const newProduct = await product.save();
  if(newProduct){
    return res.status(201).send({message: 'New Pet added', data: newProduct});
  }
  return res.status(500).send({message: 'Error in Adding Pet'});

});

router.put("/:id", async (req, res) =>{
  const productId = req.params.id;
  const product = await Product.findOne({_id: productId});
  if(product){
    product.name =  req.body.name;
    product.category = req.body.category;
    product.image = req.body.image;
    product.price = req.body.price;
    product.brand = req.body.brand;
    product.description = req.body.description;
    product.age = req.body.age;
    product.status = req.body.status;
    const updatedProduct = await product.save();
    if(updatedProduct){
      return res.status(200).send({message: 'Pet Details Changed', data: updatedProduct});
    }  
  }
  return res.status(500).send({message: 'Error in Changing Details.'});
  
  
 
});

router.delete("/:id", async(req, res) =>{
  const deletedProduct = await Product.findById(req.params.id);
  if(deletedProduct){
    await deletedProduct.remove();
    res.send({msg: "Pet removed from Inventory."});
  }else{
    res.send({msg: "Error in removing pet from Inventory."});
  }
})
  

export default router;
