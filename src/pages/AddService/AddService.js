import React from 'react';
import axios from 'axios';
import './AddService.css'
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://boiling-reaches-79167.herokuapp.com/product', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Add Product");
                    reset();
                }
            })



        // fetch('https://boiling-reaches-79167.herokuapp.com/products', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         if (result.insertedId) {
        //             alert("Add Product");
        //             reset();
        //         }
        //     })
    }
    return (
        <div className="add-service">
            <h2>Please Add A Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })}
                    placeholder="Name"
                />
                <textarea {...register("description",)} placeholder="description" />
                <input type="number" {...register("price",)} placeholder="price" />
                <input type="number" {...register("year",)} placeholder="year" />
                <input type="text" {...register("race",)} placeholder="race" />

                <input type="text" {...register("type",)} placeholder="type" />
                <input {...register("img",)} placeholder="img" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;