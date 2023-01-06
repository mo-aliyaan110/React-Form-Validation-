import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';



const App = () => {
    
    const [showForm1, setForm1] = useState(true);
    const [showForm2, setForm2] = useState(false);
    const [showForm3, setForm3] = useState(false);
    const [readyToPostData, setreadyToPostData] = useState(false);
    const [dataPosted, setDataPosted] = useState(false);

    const posturl = 'https://codebuddy.review/submit'; 


    // function to change the form1 state
    const changeFormData = (data) => {
        setForm1(data);
    }
    const changeFormData2 = (data) => {
        setForm2(data);
    }
    const changeFormData3 = (data) => {
        setForm3(data);
    }
    const changeReadyToPostData = (data) => {
        setreadyToPostData(data);
    }
    const changedataPosted = (data) => {
        setDataPosted(data);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [countryCode, setcountryCode] = useState('');
    const [phone, setPhone] = useState('');
    // function to getEmail from child
    const getEmail = (data) => {
        setEmail(data);
    }
    const getPassword = (data) => {
        setPassword(data);
    }
    const getFirstName = (data) => {
        setFirstName(data);
    }
    const getLastName = (data) => {
        setLastName(data);
    }
    const getAddress = (data) => {
        setAddress(data);
    }
    const getCountryCode = (data) => {
        setcountryCode(data);
    }
    const getPhone = (data) => {
        setPhone(data);
    }
    // useEffect starts
        useEffect(() => {
            const postData = async() => {
                await axios.post(posturl, {
                    "emailId": email,
                    "password": password,
                    "firstName": firstName,
                    "lastName": lastName,
                    "address": address,
                    "countryCode": countryCode,
                    "phoneNumber": phone
                })
        
            }
            if(readyToPostData){
                postData();
                setDataPosted(true);
            }    
        }, [readyToPostData, email, password, firstName, lastName, address, countryCode, phone]);
    // useEffect ends

    const whichForm = (form1, form2, form3) => {
        if(form1){
            return(
                <Form1 changeFormData2 = {changeFormData2} handleFormVisiblity = {changeFormData} getEmailFunc = {getEmail} getPassFunc = {getPassword}/>

            )
        }
        if(form2){
            return(
                <Form2 getFirstName = {getFirstName} getLastName={getLastName} getAddress = {getAddress} handleFormVisiblity = {changeFormData} changeFormData2 = {changeFormData2} changeFormData3 = {changeFormData3}/>
            )
        }
        if(form3){
            return(
                <Form3 changeFormData1={changeFormData} changeReadyToPostData={changeReadyToPostData} changeFormData3={changeFormData3} changeFormData2={changeFormData2} getCountryCode={getCountryCode} getPhone={getPhone} />
            )
        }
        
    }
    
    return(
        <div style={{marginTop: '30px'}} className='ui container'>
            {
                whichForm(showForm1, showForm2, showForm3)
            }   
        </div>
    )
}
export default App;