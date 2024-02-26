import { useState } from "react";

import {
  emailValidator,
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

  //validation
  const validator = (name, value) => {
    switch (name) {
      case "email":
        return emailValidator(value);
      case "category":
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
  // const handleGender = (e) => {
  //     setInputs((inputs) => ({
  //         ...inputs,
  //         ["gender"]: e,
  //     }));
  // };

  // category Handling
  const handleSubCategory = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      ["subcategory"]: e,
    }));
  };
  // category Handling
  const handleCategory = (e) => {
    let error = validator("category", e);
    setErrors({
      ...errors,
      ["category"]: error,
    });
    setInputs((inputs) => ({
      ...inputs,
      ["category"]: e,
    }));
  };

  // category Handling
  const handleCountry = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      ["country"]: e,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    handleCategory,
    handleSubCategory,
    handleCountry,
    inputs,
    errors,
    setErrors,
    setInputs,
  };
};

export default UseForm;
