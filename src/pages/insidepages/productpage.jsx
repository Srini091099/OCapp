import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MOCKDATA } from "../../data.json";
import { Loginaftertabs } from "../../authorizepages/afetrloginpage";

export function ProductPage() {
    const { productID } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = MOCKDATA.products.find((item) => item.id === parseInt(productID));
        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            console.error("Product not found");
        }

        console.log("useEffect mounting phase");
    }, [productID]);

    if (!product) {
        return <div className="fs-4 text-danger">Product not found</div>;
    }

    return (
        <>
            <Loginaftertabs />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="row">
                            {product.images.map((image, index) => (
                                <div key={index} className="col-md-8">
                                    <Link to='/img'>
                                        <img
                                            src={image}
                                            alt={`Image ${index + 1}`}
                                            className="card-img-top img-fluid"
                                            style={{ marginBottom: "10px" }}
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <img
                                src={product.images[0]}
                                alt={`${product.title} - Image 1`}
                                className="img-fluid"
                                style={{ objectFit: "cover", height: "200px", marginBottom: "10px" }}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-column align-items-start">
                            <h1 className="fw-bolder text-dark">{product.title}</h1>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <div>
                                <Link to='/Addtocart' className="btn btn-warning">Add to cart</Link>
                                <Link to='/Buynow' className="btn btn-success">Buy now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
