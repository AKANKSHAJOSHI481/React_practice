import "./App.css";
import { useState } from "react";

function App() {
  // const [firstName, setfirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  // function changeFirstNameHandler(event){
  //   setfirstName(event.target.value);
  // }
  // function changeLastNameHandler(event){
  //   setlastName(event.target.value);
  // }
  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: false,
    mode: "",
  });
  // console.log(formdata);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformdata((prevFormdata) => {
      return {
        ...prevFormdata,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the entireform ka data ......")
    console.log(formdata)
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br />
        <input
          type="text"
          placeholder="first Name"
          onChange={changeHandler}
          name="firstName"
          value={formdata.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formdata.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          onChange={changeHandler}
          name="email"
          value={formdata.email}
        />
        <br />
        <br />
        <textarea
          placeholder="enter your comments here"
          onChange={changeHandler}
          name="comments"
          value={formdata.comments}
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formdata.isVisible}
        />
        <label htmlFor="isVisible">Am I visible?</label>
        <br />
        <br />
        <fieldset>
          <legend>Mode : </legend>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-mode"
            id="Online-mode"
            checked={formdata.mode === "Online-mode"}
          />
          <label htmlFor="Online-mode">Online</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-mode"
            id="Offline-mode"
            checked={formdata.mode === "Offline-mode"}
          />
          <label htmlFor="Offline-mode">Offline</label>
        </fieldset>
        <br />
        <br />
        <label htmlFor="FavCar">Tell me about your favourite Car?</label>
        <select
          onChange={changeHandler}
          name="FavCar"
          id="FavCar"
          value={formdata.FavCar}
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Alto">Alto</option>
          <option value="Benz">Benz</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Tata">Tata</option>
          <option value="Santro">Santro</option>
        </select>
        
        {/* <input type = 'submit' value = 'submit'/> */}
        <br/>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
