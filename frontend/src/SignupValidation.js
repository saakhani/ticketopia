function SignupValidation(values) {
    let errors = {};
    const name_pattern = /^[a-zA-Z]+$/;
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (values.firstname === " " || values.firstname === "") {
      errors.firstname = "First Name is required";
    } else if (!name_pattern.test(values.firstname)) {
        errors.firstname = "Name should only contain letters";
    } else {
      errors.firstname = "";
    }
  
    if (values.lastname === " " || values.lastname === "") {
      errors.lastname = "Last Name is required";
    } else if (!name_pattern.test(values.lastname)) {
        errors.lastname = "Name should only contain letters";
    } else {
      errors.lastname = "";
    }
  
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
  
  export default SignupValidation;
  