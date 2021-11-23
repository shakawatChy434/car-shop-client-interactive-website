/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import './ServiceBooking.css'

const ServiceBooking = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://boiling-reaches-79167.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const nameRef = useRef();
    const emailRef = useRef();
    const productNameRef = useRef();
    const locationRef = useRef();
    const priceRef = useRef();
    const shippingRef = useRef();

    const handleSubmit = e => {

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const productName = productNameRef.current.value;
        const locationName = locationRef.current.value;
        const price = priceRef.current.value;
        const shipping = shippingRef.current.value;
        const addNewInfo = { name, email, productName, price, locationName, shipping };

        fetch("https://boiling-reaches-79167.herokuapp.com/order", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert(`Congress!${name}. It's Your.`);
                    e.target.reset();
                }
            })
        e.preventDefault();
    };



    return (

        <Container className="mb-4">
            <p className="text-danger topMargin" >SHOP JUNO TOYS & GAMES</p>
            <h2 className="all-heading">Shop</h2>
            <Row xs={1} md={2} className="d-flex justify-content-between align-items-center">
                <Col>
                    <img src={product.img} className="img-fluid w-75 mb-3 rounded" alt="" />
                    <p><span className="fw-bold text-decoration-underline">Description: </span>{product.description}</p>
                </Col>
                <Col>
                    <form className="shop py-3 " onSubmit={handleSubmit}>
                        <input disabled defaultValue={user.displayName} ref={nameRef} /> <br /> <br />
                        <input disabled defaultValue={user.email} ref={emailRef} /><br /> <br />
                        <input disabled defaultValue={product.name} ref={productNameRef} /> <br /> <br />
                        <input disabled defaultValue={product.price} ref={priceRef} /> <br /> <br />
                        <input type="text" ref={locationRef} placeholder="Location" /> <br />  <br />
                        <select className="form-select" ref={shippingRef} id="inputGroupSelect01">
                            <option value="5%/7D">Shipping 5%/7D</option>
                            <option value="10%/3D">Shipping  10%/3D</option>
                        </select> <br /><br /> <br />
                        <Button className="mt-5" type="submit" variant="contained"><i className="fas fa-shopping-basket"></i> Place Order</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
};
export default ServiceBooking;


// 