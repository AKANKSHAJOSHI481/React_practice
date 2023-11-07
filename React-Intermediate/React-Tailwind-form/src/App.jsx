import "./App.css";
import { useState } from "react";
function App() {
  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    candidates: false,
    pushNotification: "",
    comments: false,
    offers: false,
  });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformdata((prevFormdata) => {
      return {
        ...prevFormdata,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  // console.log(formdata);
  function submitHandler(event) {
    event.preventDefault();
    console.log("Form details : ");
    console.log(formdata);
  }
  return (
    <div className="flex flex-col items-center w-full md:max-w-[50%] mx-auto shadow p-8">
      <form className = "space-y-2" onSubmit={submitHandler}>
        <label htmlFor="firstname">FirstName</label>
        <br />
        <input
          type="text"
          placeholder="Akanksha"
          name="firstName"
          id="firstname"
          onChange={changeHandler}
          value={formdata.firstName}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br />
        <label htmlFor="lastname">LastName</label>
        <br />
        <input
          type="text"
          placeholder="Joshi"
          name="lastName"
          onChange={changeHandler}
          value={formdata.lastName}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="text"
          placeholder="akanksha.j20@book.com"
          name="email"
          onChange={changeHandler}
          value={formdata.email}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          // type='text'
          // placeholder='India'
          id="country"
          name="country"
          onChange={changeHandler}
          value={formdata.country}
          className="text-sm font-medium leading-6 text-gray-900 outline mt-2 rounded-md"
        >
          <option value="India">India</option>
          <option value="Mexico">Mexico</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
        </select>
        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          onChange={changeHandler}
          name="streetAddress"
          placeholder="Address"
          value={formdata.streetAddress}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          onChange={changeHandler}
          name="city"
          placeholder="enter city"
          value={formdata.ci}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br />
        <label htmlFor="state">State/Province</label>
        <br />
        <input
          type="text"
          placeholder="Enter state"
          onChange={changeHandler}
          name="state"
          value={formdata.state}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br />
        <label htmlFor="postalcode">ZIP / PostalCode</label>
        <br />
        <input
          type="text"
          onChange={changeHandler}
          placeholder="Enter PostalCode"
          name="postalCode"
          value={formdata.postalCode}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br />
        <fieldset>
          <legend>By Email</legend>
          <br />
          <div className="flex">
            <input
              type="checkbox"
              onChange={changeHandler}
              name="comments"
              id="comments"
              checked={formdata.comments}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
          <br />
          <div className="flex">
            <input
              type="checkbox"
              onChange={changeHandler}
              name="candidates"
              id="cnadidates"
              checked={formdata.candidates}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>
          <br />
          <div className="flex">
            <input
              type="checkbox"
              onChange={changeHandler}
              name="offers"
              id="offers"
              checked={formdata.offers}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
        <br />
        <fieldset>
          <label htmlFor="pushNotification">Push Notifications</label>
          <p>These are delivered via SMS to your mobile phone.</p>
          <br />
          <input
            type="radio"
            onChange={changeHandler}
            name="pushNotification"
            value="Everything"
            id="psuhEverything"
            // checked={formdata.pushNotifications === "Everything"}
          />
          <label htmlFor="pushEverything">Everything</label>
          <br />
          <input
            type="radio"
            onChange={changeHandler}
            name="pushNotification"
            value="SameAsEmail"
            id="pushEmail"
            // checked={formdata.pushNotifications === "SameAsEmail"}
          />
          <label htmlFor="pushEmail">Same as Email</label>
          <br />
          <input
            type="radio"
            onChange={changeHandler}
            name="pushNotification"
            value="NoPush"
            id="NoPushNotification"
            // checked={formdata.pushNotifications === "NoPush"}
          />
          <label htmlFor="NoPushNotification">No Push Notifications</label>
        </fieldset>
        <br />
        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>
      </form>
    </div>
  );
}

export default App;
