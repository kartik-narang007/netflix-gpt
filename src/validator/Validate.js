export const checkValidate = (name, email, password) => {
  const errors = {};

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!name) {
    errors.name = "Name can not be empty";
  }

  if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!password) {
    errors.password = "Password password cannot be empty.";
  } else {
    if (password.length < 8 || password.length > 16) {
      errors.password = "Password must be between 8 and 16 characters.";
    }
    if (!/(?=.*[a-z])/.test(password)) {
      errors.password = "Password must contain at least one lowercase letter.";
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.password = "Password must contain at least one uppercase letter.";
    }
    if (!/(?=.*\d)/.test(password)) {
      errors.password = "Password must contain at least one digit.";
    }
  }

  return Object.keys(errors).length === 0 ? null : errors;
};
