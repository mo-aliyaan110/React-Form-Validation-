import React, { useState } from 'react';

const Form1 = ({getEmailFunc, getPassFunc, handleFormVisiblity, changeFormData2}) => {
    const [email, setEmail] = useState('');
    const [emailEssential, setEmailEssential] = useState(false);
    const [emailMessage, setEmailMessage] = useState('Email must be a valid one');
    const [password, setPwd] = useState('');
    const [displayMessage, setDisplayMessage] = useState('Use 8 or more characters with a mix of letters, numbers & symbols');
    const [pwdEssentials, setPwdEssentials] = useState(false);

    const [doneSaving, setDoneSaving] = useState(false);
    const handleEmailFocus = () => {
        setEmailEssential(true);
    }
    const handleEmailBlur = () => {
        setEmailEssential(false);
    }
    const handleEmail = (e) => {
        const emailRegex = new RegExp('(?=.*[a-z0-9]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z]{2,8}))');
        const validEmail = emailRegex.test(e.target.value);
        if(validEmail){
            setEmailMessage('')
            setEmailEssential(false);
            setEmail(e.target.value);
        }
    }
    
    const handleFocus = () => {
        setPwdEssentials(true);
    }
    const handleBlur = () => {
        setPwdEssentials(false);
    }
    const checkPwd = (e) => {
        const enteredValue = e.target.value;
        if(enteredValue.length < 8){
            setDisplayMessage("Password length is small, must contains 8 or more characters");
        }
        else{
            setDisplayMessage("");
            setPwd(enteredValue);
        }
    }


        const lowerCase = new RegExp('(?=.*[a-z]{2,})');
        const upperCase = new RegExp('(?=.*[A-Z]{2,})');
        const numbers = new RegExp('(?=.*[0-9]){2,}');
        const specialChars = new RegExp('(?=.*[!@#$%^&*]{2,})');

        const passedLowerCase = lowerCase.test(password);
        const passedUpperCase = upperCase.test(password);
        const passedNumbers = numbers.test(password);
        const passedSpecialChars = specialChars.test(password);


    const handleSave = (e) => {
        const enteredValue = e.target.value;
        setPwd(enteredValue);

        

        if(!doneSaving){
            if(!email){
                setEmailMessage('email cannot be empty');
                setEmailEssential(true);
            }
            if( !passedLowerCase || !passedUpperCase || !passedNumbers || !passedSpecialChars){
                setDisplayMessage('Use a mix of two capital letters, two small, two numbers and two special characters');
                setPwdEssentials(true);
                
            }
            else{

                setPwd(enteredValue);
                getEmailFunc(email);
                getPassFunc(password);
                setDoneSaving(true);
                
            }
        }

    }
    const handleSaveandNext = (e) => {
        const enteredValue = e.target.value;
        if(!email){
            setEmailMessage('email cannot be empty');
            setEmailEssential(true);
        }
        if(!doneSaving){
            if( !passedLowerCase || !passedUpperCase || !passedNumbers || !passedSpecialChars ){
                setDisplayMessage('Use a mix of two capital letters, two small, two numbers and two special characters');
                setPwdEssentials(true);
            }
            else{
                
                setPwd(enteredValue);
                getEmailFunc(email);
                getPassFunc(password);
                console.log("Passed every test");
                setDoneSaving(true);
                console.log(">>>>>>>disabled FORM1 and enabled form2<<<<");
                console.log(">>>In form1<<<<<<---Final saved password is: ", password);
                changeFormData2(true);
                handleFormVisiblity(false);
                
            
            }
        }
        else{
            
            changeFormData2(true);
            handleFormVisiblity(false);
        }
    }
    return(
        <div>
            <form className="ui form">
                <div className="field">
                    <label>Email id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {emailEssential ? emailMessage : null}</label>
                    <input onChange={(e) => handleEmail(e)} type="email" onBlur={() => handleEmailBlur()} onFocus={() => handleEmailFocus()} name="email-id" placeholder="Email id"/>
                </div>
                <div className="field">
                    <label>Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {pwdEssentials ? displayMessage : null}</label>
                    <input onBlur={() => handleBlur()} onFocus={() => handleFocus()} onChange={(e) => checkPwd(e)} type="text" name="Password" placeholder="Password"/>
                </div>
                <div style={{textAlign: 'center'}}>
                    <button className="ui button" onBlur={() => {setEmailEssential(false);setPwdEssentials(false) } } onClick={(e) => handleSave(e)} type="button">Save</button>
                    <button className="ui button" onClick={(e) => handleSaveandNext(e)} type="button">Save and Next</button>
                </div>
            </form>
        </div>
    )
}
export default Form1;