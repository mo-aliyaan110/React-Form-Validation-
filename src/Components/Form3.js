import React, {useState} from 'react';

const Form3 = ({getCountryCode, getPhone, changeFormData3, changeFormData2, changeReadyToPostData, changeFormData1}) => {
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [phoneDisplay, setPhoneDisplay] = useState('Phone number must be 10 characters long');
    const [phoneEssential, setPhoneEssential] = useState(false);

    const [mainDisplay, setMainDisplay] = useState('Select the country code, enter phone, check the box');
    const [mainDisplayEssential, setmainDisplayEssential ] = useState(false);

    

    const handleCountryClick = (e) => {
        const enteredValue = e.target.value;
        setCountry(enteredValue);
    }
    const handleNumber = (e) => {
        const enteredValue = e.target.value;
        if(enteredValue.length >= 0 && enteredValue.length < 10 ){
            setPhoneDisplay("Phone number must be atleast 10 numbers long");  
        }
        else if((enteredValue.length > 10)){
            setPhoneDisplay("Phone number must be only 10 numbers long");  
        }
        else{
            setPhoneDisplay("");
            setPhone(enteredValue);
        }
    }
    const handleCheck = (e) => {
        const checkbox = e.target;
        if(checkbox.checked){
            
            setIsChecked(true);
        }
        else{
            
            setIsChecked(false);
        }
    }
    const handleSave = () => {
        if(country.length <= 0 && !isChecked && phone.length <= 0){
            setmainDisplayEssential(true);
        }
        else if(!isChecked){
            setmainDisplayEssential(true);
        }
        else{
            getCountryCode(country)
            getPhone(phone)
            changeReadyToPostData(true);
            
            
        }
    }
    return(
        <div>
            <form class="ui form">
                <div style={{textAlign: 'center'}}>{mainDisplayEssential ? mainDisplay: null }</div>
                <div class="field">
                    <label>Country Code</label>
                    <select onChange={(e) => handleCountryClick(e)}>
                        <option name='country code' value='country code'>Country code</option>
                        <option value='+1'>+1</option>
                        <option value='+91'>+91</option>
                    </select>
                </div>
                <div class="field">
                    <label>Phone Number &nbsp;&nbsp;&nbsp;&nbsp; {phoneEssential ? phoneDisplay : null}</label>
                    <input onFocus={() => {setPhoneEssential(true)}} onBlur={() => {setPhoneEssential(false)}} type="number" onChange={(e) => handleNumber(e)} name="phone-number" placeholder="phone number"/>
                </div>
                <div class="field">
                    <div>
                        <input onChange={(e) => handleCheck(e)} type="checkbox"  tabindex="0" />
                        <label >Accept Terms And Conditions </label>
                    </div>
                </div>
                
                <div style={{textAlign: 'center'}}>
                    <button class="ui button" onClick={() => {changeFormData2(true);changeFormData3(false);} } type="button">Back</button>
                    <button class="ui button" onBlur={() => setmainDisplayEssential(false)} onClick={() => handleSave()} type="button">Save</button>
                </div>
            </form>
        </div>
    )
}
export default Form3;