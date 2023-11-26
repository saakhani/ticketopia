function Validation(values) {
    let errors = {};
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (values.email === " " || values.email === "") {
      errors.email = "Email is required";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Invalid email format";
    } else {
      errors.email = "";
    }
  
    if (values.password === " " || values.password === "") {
      errors.password = "Password is required";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Password must be at least 8 characters and include at least one letter and one digit";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  
  export default Validation;
  