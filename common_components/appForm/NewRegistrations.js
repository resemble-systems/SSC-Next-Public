import { useState } from "react";
import { fetchService } from "../../services/fetchService";
//constant
import { CONST } from "../../constant";
// Validator
import {
  emailValidator,
  firstNameValidator,
  lastNameValidator,
  dropDownValidator,
} from "../../services/validationService";
import { useRouter } from "next/router";

const UseRegForm = (
  fromObject,
  errorObj,
  setLoaderTime,
  setRegisterDone,
  eventId
) => {
  //State Setting
  const [inputs, setInputs] = useState(fromObject);
  const [errors, setErrors] = useState(errorObj);
  const router = useRouter();

  // Submit Handling
  const handleSubmit = async (inputs) => {
    let errorObject = {};
    Object.keys(inputs).forEach((input) => {
      let error = validator(input, inputs[input]);
      if (error !== undefined) errorObject[input] = error;
      setErrors((err) => ({
        ...err,
        [input]: error,
      }));
    });

    if (
      Object.values(errorObject).filter((err) => err === false).length === 0
    ) {
      setLoaderTime(true);

      // let url = process.env.BASE_URL + "/user-registrations";
      let sp_url = process.env.FLOW_URL.REGISTER;
      let body = {
        FirstName: inputs.firstName,
        LastName: inputs.lastName,
        Email: inputs.email,
        Gender: inputs.gender,
        UserType: inputs.user,
        EmployeeId: inputs.employeeId,
        Location: inputs.location,
        Phone: inputs.phoneNumber,
      };
      let sp_body = {
        FirstName: inputs.firstName ? inputs.firstName : "",
        LastName: inputs.lastName ? inputs.lastName : "",
        Email: inputs.email ? inputs.email : "",
        Gender: inputs.gender.length > 0 ? inputs.gender : "",
        UserType: inputs.user.length > 0 ? inputs.user : "",
        EmployeeId: inputs.employeeId ? inputs.employeeId : "",
        Location: inputs.location.length > 0 ? inputs.location : "",
        Phone: inputs.phoneNumber ? inputs.phoneNumber : "",
      };
      // let response = await fetchService(url, CONST.API_METHOD.POST, body);
      let sp_response = await fetchService(
        sp_url,
        CONST.API_METHOD.POST,
        sp_body,
        true
      );

      // if () {
      // if (response.id && sp_response && sp_response.status === 202) {
      if (/* sp_response.id && */ sp_response && sp_response.status === 202) {
        setLoaderTime(false);
        setRegisterDone(true);
        setInputs(fromObject);
        setErrors(errorObj);
      } else {
        setLoaderTime(false);
        alert("Oops! Something went wrong.");
      }
      // console.log("===HandleSubmit", inputs);
      // inputs ? console.log("input present") : console.log("input not present");
    }
    // setTimeout(() => {
    //   console.log("eventId==>", eventId);
    //   setLoaderTime(false);
    // }, 3000);
  };

  // Validator Function
  const validator = (name, value) => {
    switch (name) {
      case "firstName":
        return firstNameValidator(value);
      case "lastName":
        return lastNameValidator(value);
      case "email":
        return emailValidator(value);
      case "user":
        return dropDownValidator(value);
    }
  };

  // Input Change Handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let error = validator(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  // Gender Handling
  const handleGender = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      ["gender"]: e,
    }));
  };

  // User Handling
  const handleUser = (e) => {
    let error = validator("user", e);
    setErrors({
      ...errors,
      ["user"]: error,
    });
    setInputs((inputs) => ({
      ...inputs,
      ["user"]: e,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    handleUser,
    handleGender,
    inputs,
    errors,
    setErrors,
    setInputs,
  };
};

export default UseRegForm;
