import React from "react";
import { useState } from "react";



function manuacturer() {

  const row = {
    padding: "20px",
    margin: "20px 0",
    display: "block",
    marginTop: "20px" 
  }

  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password1: "",
    Dropdown: "",
    LicenceNumber: ""
  })

  const HandleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
  }

  const submitForm = (e) => {
    e.preventDefault();
    const senddata = {
      FirstName:data.FirstName,
      LastName:data.LastName,
      Email:data.Email,
      Password1:data.Password1,
      Dropdown:data.Dropdown,
      LicenceNumber:data.LicenceNumber
    }
    console.log(senddata)
  }


  return (
    <section className="h-screen grid md:grid-cols-2">
      <div className="bg-gray-300 flex items-center " style={row} >
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1" >
                 Register here <br />   to add products
          </h1>

        <form onSubmit={submitForm}>
          <div style={row}>
          <div className="row" >
            <div className="col-md-6">First Name</div>
              <div className="col-md-6">
                <input type="text" name="FirstName" onChange={HandleChange} value = {data.FirstName}/>
            </div>
          </div>
          
          

          <div className="row" >
            <div className="col-md-6">Last Name</div>
            <div className="col-md-6">
            <input type="text" name="LastName" onChange={HandleChange} value = {data.LastName}/>
            </div>
          </div>
        

          <div className="row" >
            <div className="col-md-6">E-mail Address</div>
            <div className="col-md-6">
            <input type="text" name="Email" onChange={HandleChange}value = {data.Email}/>
            </div>
          </div>
          

          <div className="row" >
            <div className="col-md-6">Password</div>
            <div className="col-md-6">
            <input type="password" name="Password1" onChange={HandleChange} value = {data.Password1}/>
            </div>
          </div>
          

          <div className="row" >
            <div className="col-md-6">Select manufacture company</div>
            <div className="col-md-6">
            <select onChange={HandleChange} name="Dropdown" value = {data.Dropdown}>
              <option value="Apple">Apple.Inc</option>
              <option value="Samsung">Samsung Electronics Co.</option>
              <option value="Huwawei">Huwawei Technologies Co,Ltd.</option>
            </select>
            </div>
          </div>
          

          <div className="row" >
            <div className="col-md-6">Licence Number</div>
            <div className="col-md-6">
            <input type="text" name="LicenceNumber" onChange={HandleChange} value = {data.LicenceNumber}/>
            </div>
          </div>
          

          <div>
            <button name="Register1" style={{backgroundColor: "lightgreen"}} type="submit" value="Register"> Register</button>
          </div>
          </div>

        </form>
      </div>


      <div className="col-span-1 w-full h-full text-center bg-black py-32 flex items-center justify-center">
        <div className="flex w-full justify-center items-center">
          <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="flex-1 flex-col md:mr-10">
              <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                Or <br /> Register your company
              </h1>
              <div className="flex items-center justify-center">
                <form action="">
                <label style={{color: "red"}}>Manufacture Registration Numbner  </label>
                  <input type="text" name="RegistrationNumber"/>
                  <br />

                  <label style={{color: "red"}}>Manufacture Licence number  </label>
                  <input type="text" name="ManufacturerLicenceNumber"/>
                  <br />

                  <label style={{color: "red"}}>Business Name  </label>
                  <input type="text" name="firstName"/>
                  <br />

                  <label style={{color: "red"}}>Business Licence Number  </label>
                  <input type="text" name="BusinessLicenceNumber"/>
                  <br />
                  <button name="submit" style={{backgroundColor: "Background"}}> Sunmit</button>
                </form>
              </div>
              <div className="flex items-center justify-center">

                

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default manuacturer;
