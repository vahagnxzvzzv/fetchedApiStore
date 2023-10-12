import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDescription.css';

function ProductDescription() {

    const [data, setData] = useState([])

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)   
        .then((response) => response.json())
        .then((response) => {
            setData(response)
        })
    }, [id])

    return (
        <div>
            <img className="productImage" src={data.image} />
            <h2 className="productTitle">{data.title}</h2>
            <h2 className="productPrice">${data.price}</h2>
        </div>
    )
}

export default ProductDescription;