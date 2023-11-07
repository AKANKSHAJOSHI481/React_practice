import './App.css';
import { useState } from 'react';
function App() {
  const [formdata, setformdata] = useState({
    firstName: "",
    lastName : "",
    email:"",
    country : "",
    streetAddress : "",
    city : "",
    state:"",
    postalCode : "",
    candidates: false,
    pushNotifications: "",
    comments : false,
    offers : false,
  });
  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setformdata((prevFormdata)=>{
      return{
        ...prevFormdata,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }
  // console.log(formdata);
  function submitHandler(event){
    event.preventDefault();
    console.log("Form details : ");
    console.log(formdata);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor = "firstname">FirstName</label>
        <br/>
        <input 
          type = "text"
          placeholder = "Akanksha"
          name = "firstname"
          onChange={changeHandler}
          value = {formdata.firstName}
        />
        <br/>
        <label htmlFor = "lastname">LastName</label>
        <br/>
        <input
          type = "text"
          placeholder='Joshi'
          name = "lastname"
          onChange={changeHandler}
          value = {formdata.lastName}
        />
        <br/>
        <label htmlFor = "email">Email Address</label>
        <br/>
        <input
          type = "text"
          placeholder='akanksha.j20@book.com'
          name = "email"
          onChange={changeHandler}
          value={formdata.email}
        />
        <br/>
        <label htmlFor='country'>Country</label>
        <br/>
        <select
          // type='text'
          // placeholder='India'
          id = 'country'
          name = 'country'
          onChange={changeHandler}
          value={formdata.country}
        >
        <option value="India">India</option>
        <option value="Mexico">Mexico</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        </select>
        <br/>
        <label htmlFor='streetAddress'>Street Address</label>
        <br/>
        <input
          type="text"
          onChange={changeHandler}
          name="streetAddress"
          placeholder='Address'
          value={formdata.streetAddress}
        />
        <br/>
        <label htmlFor='city'>City</label>
        <br/>
        <input
          type='text'
          onChange={changeHandler}
          name = 'city'
          placeholder='enter city'
          value={formdata.ci}
        />
        <br/>
        <label htmlFor='state'>State/Province</label>
        <br/>
        <input
          type="text"
          placeholder='Enter state'
          onChange={changeHandler}
          name="state"
          value={formdata.state}
        />
        <br/>
        <label htmlFor='postalcode'>ZIP / PostalCode</label>
        <br/>
        <input
         type='text'
         onChange={changeHandler}
         placeholder='Enter PostalCode'
         name='postalCode'
         value={formdata.postalCode}
        />
        <br/>
        <label >By Email</label>
        <br/>
        <input
          type='checkbox'
          onChange={changeHandler}
          name = "byEmail1"
          id = "byEmail1"
          checked={formdata.comments}
        />
        <label htmlFor='byEmail1' >Comments</label>
        <br/>
        <input
          type='checkbox'
          onChange={changeHandler}
          name="byEmail2"
          id="byEmail2"
          checked={formdata.candidates}
        />
        <label htmlFor='byEmail2'>Candidates</label>
        <br/>
        <input
          type='checkbox'
          onChange={changeHandler}
          name="byEmail3"
          id="byEmail3"
          checked={formdata.offers}
        />
        <label htmlFor='byEmail3'>Offers</label>
        <br/> 
        <label htmlFor='pushNotification'>Push Notifications</label>
        <br/>
        <input
          type = 'radio'
          onChange={changeHandler}
          name = 'pushNotification'
          value = 'Everything'
          id = 'Everything'
          checked={formdata.pushNotifications === 'Everything'}
        />
        <label htmlFor='Everything'>Everything</label>
        <br/>
        <input
          type = 'radio'
          onChange={changeHandler}
          name = 'pushNotification'
          value = 'SameAsEmail'
          id = 'SameAsEmail'
          checked={formdata.pushNotifications === 'SameAsEmail'}
        />
        <label htmlFor='SameAsEmail'>Same as Email</label>
        <br/>
        <input
          type = 'radio'
          onChange={changeHandler}
          name = 'pushNotification'
          value = 'NoPush'
          id = 'NoPush'
          checked={formdata.pushNotifications === 'NoPush'}
        />
        <label htmlFor='NoPush'>No Push Notifications</label>
        <br/>
        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
