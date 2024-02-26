import { useState } from "react";
//service
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

const UseForm = (initialValues, errorObj, setLoaderTime, eventId) => {
  //State Setting
  const [inputs, setInputs] = useState(initialValues);
  const [errors, setErrors] = useState(errorObj);

  // Submit Handling
  const handleSubmit = () => {
    let errorObject = {};
    Object.keys(inputs).forEach((input) => {
      let error = validator(input, inputs[input]);
      if (error !== undefined) errorObject[input] = error;
      setErrors((err) => ({
        ...err,
        [input]: error,
      }));
    });

    if (Object.values(errorObject).filter((err) => err === false).length === 0)
      setLoaderTime(true);

    setTimeout(() => {
      setLoaderTime(false);
    }, 3000);
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
      case "location":
        return firstNameValidator(value);
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

export default UseForm;
