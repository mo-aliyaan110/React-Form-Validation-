import React, { useState } from 'react';

const Form2 = ({changeFormData2, handleFormVisiblity, getFirstName, getLastName, getAddress, changeFormData3}) => {
    
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [address, setAddress] = useState('');
    const [fNameDisplay, setFnameDisplay] = useState('first name must contain atleast two characters and maximum of 50 characters');
    const [fNameEssential, setFnameEssential] = useState(false);
    const [LNameDisplay, setLnameDisplay] = useState('last name is optional');
    const [LNameEssential, setLnameEssential] = useState(false);

    const [addressDisplay, SetAddressDisplay] = useState("Address must be minimum of 10 characters");
    const [addressEssential, setAddressEssential] = useState(false);

    const [doneSaving, setDoneSaving] = useState(false);
    
    const handleFname = (e, check) => {
        const enteredValue = e.target.value;

        if(check == 'fname'){
            const numbers = new RegExp('(?=.*[0-9]){1,}');
            const isNumberInFname = numbers.test(enteredValue);
    
            if(enteredValue.length <= 1){
                setFnameDisplay("use atleast two letters in first name");
            }
            else if(enteredValue.length > 50){
                setFnameDisplay("use max of 50 letters for first name");
            }
            else if (isNumberInFname){
                setFnameDisplay("First name cannot contain numbers");
            }
            else{
                setFnameDisplay('');
                
                setFname(enteredValue);
            }
        }
        else{
            const numbers = new RegExp('(?=.*[0-9]){1,}');
            const isNumberInLname = numbers.test(enteredValue);
    
            if (isNumberInLname){
                setLnameDisplay("Last name cannot contain numbers");
            }
            else{
                setLnameDisplay('');
                setLname(enteredValue);
            }
        }
    }

    const handleAddress = (e) => {
        const enteredValue = e.target.value;
        if(enteredValue.length < 10){
            SetAddressDisplay("Address must contains atleast 10 characters")
        }
        else{
            SetAddressDisplay("");
            setAddress(enteredValue);
        }
        
    }

    const handleSave = () => {
        if(!doneSaving){
            if(fName.length || address.length <= 1){
                setFnameEssential(true);
                setAddressEssential(true);
            }
            if(fName && address){
                
                getFirstName(fName);
                getLastName(lName);
                getAddress(address);
                setDoneSaving(true);
                
            }
        }

    }
    const handleSaveandNext = (e) => {
        
        if(!doneSaving){
            if(fName.length || address.length <= 1){
                setFnameEssential(true);
                setAddressEssential(true);
            }
        
            if(fName && address){
                
                getFirstName(fName);
                getLastName(lName);
                getAddress(address);
                
                changeFormData3(true);
                changeFormData2(false);
                
            }
        }
        else{
            changeFormData3(true);
            changeFormData2(false);
            
        }
    }
    
    
    return(
        <div>
            <form className="ui form">
                <div className="field">
                    <label>FirstName &nbsp;&nbsp;&nbsp;&nbsp; {fNameEssential ?  fNameDisplay : null}</label>
                    <input onFocus={() => {setFnameEssential(true)}} onBlur={() => {setFnameEssential(false)}}  onChange={(e) => handleFname(e, 'fname')} type="text" name="First-Name" placeholder="firstName"/>
                </div>
                <div className="field">
                    <label>LastName &nbsp;&nbsp;&nbsp;&nbsp; {LNameEssential ?  LNameDisplay : null} </label>
                    <input onFocus={() => {setLnameEssential(true)}} onBlur={() => {setLnameEssential(false)}}  onChange={(e) => handleFname(e, 'lname')} type="text" name="LastName" placeholder="lastName"/>
                </div>
                <div className="field">
                    <label>Address &nbsp;&nbsp;&nbsp;&nbsp;{addressEssential ? addressDisplay : null }</label>
                    <input onFocus={() => {setAddressEssential(true)}} onBlur={() => {setAddressEssential(false)}}  onChange={(e) => handleAddress(e)} type="text" name="Address" placeholder="address"/>
                </div>
                <div style={{textAlign: 'center'}}>
                    <button className="ui button" onClick={() => handleFormVisiblity(true)} type="button">Back</button>
                    <button className="ui button" onClick={() => handleSave()} type="button">Save</button>
                    <button className="ui button" onClick={() => handleSaveandNext()} type="button">Save and Next</button>
                </div>
            </form>
        </div>
    )
}
export default Form2;