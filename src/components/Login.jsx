import React, { useState , useEffect} from "react";
import bkgrnd from "../assets/vhstropic.gif";

const Login = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => { //create function to handle changes to input and update the initialValues as user types
    console.log(e.target);
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value}); //set form value as object, firstly setting it to initial state ...formValues. then set name as key(by wraping in square brackets[]) and take in the value of the input the user types as the new value

  }

  const handleSubmit = (e) => {// onclick on submit button
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  }


  useEffect(() => { 
     //this handles a console log for when form is submitted
    console.log(formErrors)

    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    } 
  }, [formErrors])

  const validate = (values) => { //create validate function that takes in values
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; //used in form validation, find on web
    
    if(!values.username) {//check for each of the values
    
      errors.username = "Username is required!";

    }
    if(!values.email) {//check for each of the values
    
      errors.email = "Email is required!";

    }else if (!regex.test(values.email)) {
      errors.email = "this is not a valid email" // checking to makesure email fits regex parameters, if it doesnt console log this message
    }
    if(!values.password) {//check for each of the values
    
      errors.password = "Password is required!";

    }else if (values.password !== values.password2) {
      errors.email = "passwords are not identical"
    }
    if(!values.password2) {//check for each of the values
    
      errors.password2 = "Confirm Password is required!";

    }else if (values.password !== values.password2) {
      errors.email = "passwords are not identical"
    }
    return errors;
  };

  return (
    <div className=" mt-6 body grid grid-cols-1 sm:grid-col-2 h-screen w-full">
      <div
        // style={{ backgroundImage: `url(${bkgrnd})` }}
        className=" bg-black block h-20"
        >
        <h1 className=" my-4 text-orange-400 text-5xl text-center font-bold">
          THE VHS CLUB
        </h1>
        {/* <img src={bkgrnd} alt="" className="relative w-full h-full object-cover" /> */}
      </div>

      <div className=" border border-black flex flex-col justify-center mb-20  sm:mx-12 lg:mx-60 ">
        <div className=" block relative z-2 p-2 pb-1 ">

        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="p-2 my-8 text-center text-black bg-orange-400 border border-orange-500 shadow-md 
        shadow-orange-900">Signed in succesfully</div>
        ) : 

        ( 
                  <pre>{JSON.stringify(formValues,undefined,2)}</pre>

        )}


          <form onSubmit={handleSubmit}
            action=""
            className=" max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
          >
            <h3 className="text-3xl dark:text-orange-400 text-center font-bold p-3">
              SIGN UP
            </h3>
            <div className="flex flex-col text-gray-400 py-1">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
                className="rounded-lg bg-gray-700 mt-2 p-2 
            focus:border-blue-500 focus:bg-grey-800 focus:border"
              />
            </div>
            <p className="text-orange-400">{formErrors.username}</p>

            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-grey-800 focus:border"
              />
            </div>
            <p className="text-orange-400">{formErrors.email}</p>

            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-grey-800 focus:border"
              />
            </div>
            <p className="text-orange-400">{formErrors.password}</p>


            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                name="password2"
                placeholder="Confirm Password"
                value={formValues.password2}
                onChange={handleChange}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-grey-800 focus:border"
              />
            </div>
            <p className="text-orange-400">{formErrors.password2}</p>


            <button
              type="submit"
              className="w-full mt-5 py-2 text-white bg-black-300 rounded border border-orange-500 shadow-md shadow-orange-900 hover:bg-orange-400 hover:text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
