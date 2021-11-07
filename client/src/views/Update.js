import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import ProductForm from "../components/ProductForm";

function Update(props) {
  const { id } = props;
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateProduct = (product) => {
    axios
      .put(`http://localhost:8000/api/product/${id}`, product, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrors(err.response.data);
      });
  };
  return (
    <div>
      <h2
        style={{
          maxWidth: "500px",
          width: "100%",
          margin: "auto",
          textAlign: "center",
          fontFamily: "fantasy",
        }}
      >
        Edit Product
      </h2>
      <Link to="/">Home</Link>
      {loaded && (
        <ProductForm
          onSubmitProp={updateProduct}
          initialTitle={product.title}
          initialPrice={product.price}
          initialBrand={product.brand}
          initialQuantity={product.quantity}
          initialAbout={product.about}
          initialImageLink={product.imageLink}
          errors={errors}
        />
      )}
    </div>
  );
}

export default Update;
