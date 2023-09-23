import React, { useEffect, useState } from 'react';
import './employee.css';


function Employee() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setaddress] =useState('');
  const [phone, setPhone] = useState('');
  const [employee,setEmployee] =useState([]);

  
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleaddressChange = (event) => {
    setaddress(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleClick =(event) => {
    event.preventDefault()
    const employee = {firstName,lastName,address,phone}
    console.log(employee)
    fetch("http://localhost:8080/employee/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(employee)
    }).then(()=>{
      console.log("ADDED SUCCESSFULLY")
      
    })

  };

  useEffect(()=>{
    fetch("localhost:8080/employee/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setEmployee(result);
    }
  )
  },{})

  return (
    <div className="employee-container">
      <h1>Employee Management System</h1>
      
      <div className="input-container">
        <label htmlFor="firstName"></label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder="Enter First Name"
          className="text-input"
        />
      </div>

      <div className="input-container">
        <label htmlFor="lastName"></label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder="Enter Last Name"
          className="text-input"
        />
      </div>

      <div className="input-container">
        <label htmlFor="address"></label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleaddressChange}
          placeholder="Enter Address"
          className="text-input"
        />
      </div>

      <div className="input-container">
        <label htmlFor="phone"></label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Enter Phone Number"
          className="text-input"
        />
      </div>
      
      <div className="display-container">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>address: {address}</p>
        <p>Phone: {phone}</p>
      </div>

      <button type="submit" className="submit-button" onClick={handleClick}>
          ADD TO THE DATABASE
          </button>
          
    </div>
   
  );
}

export default Employee;