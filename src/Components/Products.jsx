import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
// import axios from "axios";
import { useHistory } from "react-router";
import { userRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/userRedux";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {

  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);
 const history = useHistory();
const dispatch = useDispatch()




  // console.log(cat, filters, sort);
  useEffect(() => {
    const getProducts = async () => {
      try{
        const res = await userRequest.get(cat ? `products?category=${cat}` : "products",);
        // console.log(res);
        setProducts(res.data)
      }catch(err){
       dispatch(removeUser());
       setTimeout(() => {
        history.push('/login')
       },1500)
        
       }
    };
    getProducts()
  },[cat,dispatch,history])


  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    products &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

// console.log(sort,filteredProducts)
  return (
    <Container>
      {cat
       ? filteredProducts.map((item) => <Product item={item} key={item._id} />) 
       : filteredProducts.map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;