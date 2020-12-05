import React from 'react'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styled  from 'styled-components'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBook = () => {
    const StyledError = styled.div`
        color:red;
        display: inline-block;
        margin: 0 1rem;
        transition: margin  1s ease-in-out;
        vertical-align: baseline;
        font-size: 0.8em;
    `;
    
    const StyledFormContainer = styled.div`
        width: calc(100% - 13%);
        display: flex;
        justify-content: center; 
        margin-top: 5%;
    `;
    
    const StyledForm = styled.form`
        font-size: 1.3em;
        color: #858891;
        // background-color: yellow;  
        margin: 0;
        padding: 0;
        margin-left: auto;
        margin-right: auto;
        width: 51%;

        label, input {
            display : inline-block;
        }

        label {
            width: 42%;
        }
        
        input {
            border: 0px;
            border-bottom: 1px solid #942d947A;
            background-color: #f4f5f9;
        }

        input:focus {
            outline: none;
        } 

        button[type=submit] {
            margin-top: 2em;
            padding:5px 15px; 
            background: #723bda;
            border:0 none;
            cursor:pointer;
            -webkit-border-radius: 5px;
            border-radius: 5px;
            box-shadow: 0px -1px 5px 0px rgb(60 60 60 / 65%);
            color: #f8faff;
        }

        .form-group {
            margin-bottom: 0.8em;
        }
    `;

    return (
        <Formik
            initialValues={{ 
                bookName: '', 
                bookAuthor: '', 
                bookPrice: '', 
                bookDescription:'' 
            }}
            validationSchema={Yup.object({
                bookName: Yup.string().required('*'),
                bookAuthor: Yup.string().required('*'),
                bookPrice: Yup.number().typeError('Must be a number').required('*'),
                bookDescription: Yup.string().required('*')
            })}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                console.log(values)
                axios.post(`http://localhost:8080/api/books`, { values })
                .then(res => {
                    toast("Successfully added book !", {type : 'success'});
                    resetForm(); 
                })
                setSubmitting(false);
            }}
        >
            {formik => (
                <StyledFormContainer> 
                <StyledForm  onSubmit={formik.handleSubmit}>
                    <div className='form-group'> 
                        <label htmlFor="bookName">Book Name</label>
                        <input autoComplete="off" id="bookName" type="text" {...formik.getFieldProps('bookName')} />
                        {formik.touched.bookName && formik.errors.bookName ? (
                            <StyledError>{formik.errors.bookName}</StyledError>
                        ) : null}
                    </div>
                   
                    <div className='form-group'>                            
                        <label htmlFor="bookAuthor">Book Author</label>
                        <input autoComplete="off" id="bookAuthor" type="text" {...formik.getFieldProps('bookAuthor')} />
                        {formik.touched.bookAuthor && formik.errors.bookAuthor ? (
                            <StyledError>{formik.errors.bookAuthor}</StyledError>
                        ) : null}
                    </div> 
                    
                    <div className='form-group'>
                        <label htmlFor="bookPrice">Book Price</label>
                        <input autoComplete="off" id="bookPrice" type="bookPrice" {...formik.getFieldProps('bookPrice')} />
                        {formik.touched.bookPrice && formik.errors.bookPrice ? (
                            <StyledError>{formik.errors.bookPrice}</StyledError>
                        ) : null}
                    </div>

                    <div className='form-group'>        
                        <label htmlFor="bookDescription">Book Description</label>
                        <input autoComplete="off" id="bookDescription" type="bookDescription" {...formik.getFieldProps('bookDescription')} />
                        {formik.touched.bookDescription && formik.errors.bookDescription ? (
                            <StyledError>{formik.errors.bookDescription}</StyledError>
                        ) : null}
                    </div>
                    
                    <button type="submit">Submit</button>
                    <ToastContainer />

                </StyledForm>  
                </StyledFormContainer>
            )}
        </Formik>         
        
    )
}

export default AddBook