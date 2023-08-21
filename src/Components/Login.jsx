import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage, replace } from "formik"
import * as Yup from 'yup';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Questions from './Questions'
import "./login.css"

function Basic() {


   
    let navigate = useNavigate()
    // const submitdata = () => {
        
        // navigate("/Questions",{replace:true})
        // console.log(values)
        // if(selectval==""){
    //         // alert("select any")
    //     if(selectval == 'GDVE'){
    //         navigate('/Gdquestions')
    //     }

    //     // }
    //     console.log(selectval)
    //     navigate("/Questions")

    // }

    // const data=()=> {

    // }
    // console.log(contactNumber)
    // localStorage.setItem()

    // const classes = useStyles();
    return (
        <>
            {/* <h1>Form</h1> */}
            <Container maxWidth="xs">
                <Typography variant="h4" align="center" gutterBottom>
                    <i>   Some Details <br /> About You </i>
                </Typography>
                <Formik
                    initialValues={{ username: "", email: "", FatherName: "", contactNumber: "" }} //inital value start 

                    validationSchema={Yup.object({
                        username: Yup.string().min(3, "Minimum 3 Letters").required(),
                        FatherName: Yup.string().min(3, "Minimum 3 Letters").required(),
                        email: Yup.string().email("Invalid email address").required(),
                        contactNumber: Yup.number().min(10, "Minimum 10 Numbers").required(),
                        // color:Yup.string().required()
                    })}
                    onSubmit={(value)=>{
                        console.log(value)
                        // navigate("")
        navigate("/Questions",{replace:true})

                    }}
                >
                    <Form style={{ textAlign: "center" }}>
                        {/* UserName */}
                        <Field name={"username"}
                            as={TextField}
                            label="Enter Your Name"
                            //  name="password"
                            type="text"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        {/* <br/> */}
                        <b style={{ color: "red", fontWeight: "lighter" }}>

                            <ErrorMessage name={"username"} />
                        </b>
                        <br />
                        {/* FatherName */}
                        <Field name={"FatherName"}
                            as={TextField}
                            label="Father's Name"
                            //  name="password"
                            type="text"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        {/* <br/> */}
                        <b style={{ color: "red", fontWeight: "lighter" }}>

                            <ErrorMessage name={"FatherName"} />
                        </b>
                        <br />

                        {/* Email Address */}
                        <Field name={"email"}
                            // name={"username"}
                            as={TextField}
                            label="email@gmail.com"
                            //  name="password"
                            type="email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <br />
                        <b style={{ color: "red", fontWeight: "lighter" }}>

                            <ErrorMessage name={"email"} />
                        </b>
                        <br />
                        <Field name={"contactNumber"}
                            // name={"username"}
                            as={TextField}
                            label="Conatct No"
                            //  name="password"
                            type="number"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <br />
                        <b style={{ color: "red", fontWeight: "lighter" }}>

                            <ErrorMessage name={"contactNumber"} />
                        </b>
                        <br />
                        {/* <Field as="select" value={selectval} onChange={(e) => setselectval(e.target.value)}>
                            <option disabled selected>Select Option</option>
                            <option value={"GDVE"}>Graphic Designing Video Editing</option>
                            <option value={"Web&App"}>Web & App Development</option>
                            <option value={"CCO"}>Certified Computer Operator</option> </Field> */}
                     
                        <br />

                        <Button type="submit" variant="contained" color="primary" fullWidth >Submit</Button>

                    </Form>

                </Formik>
            </Container>
        </>

    )
}

export default Basic;
