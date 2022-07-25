import React, { useState, useEffect }  from "react";
import {Container, Form,Button} from "react-bootstrap"
import { useForm } from "react-hook-form";
import axios from "axios"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

function Feature() {
    const { register, handleSubmit } = useForm();
    const [login , setLogin] = useState(false);
    const getMember = async () => {
        await axios.get('/api/session')
        .then( (response) => {
            response.data.status==='connect'?setLogin(true):console.log(response);
            })
        .catch( (error) => console.log(error))}
    const postSubmit = async (data) => {
        await axios.post('/api/store',data)
        .then( (response) => {
            response.data.status==='connect'?alert("Your text is being uploaded!"):alert("Error");
            })
        .catch( (error) => console.log(error))}
    useEffect(()=>{
        getMember();
    })
        return (
            <>
            </>
        );
    }
export default Feature;