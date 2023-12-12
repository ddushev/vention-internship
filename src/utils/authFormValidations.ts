interface authFields {
  username: string;
  password: string;
  rePassword?: string;
}

export function loginValidation(authFields: authFields) {
  const errors = [];

  if (authFields.username.length < 5) {
    errors.push("Username should be atleast 5 characters long!");
  }

  if (!/^[a-zA-Z0-9]{3,}$/.test(authFields.password)) {
    errors.push("Password should be minimum 3 alphanumeric characters");
  }

  if (errors.length > 0) {
    throw errors;
  }
}

export function registerValidation(authFields: authFields) {
  const errors = [];

  if (authFields.username.length < 5) {
    errors.push("Username should be atleast 5 characters long!");
  }

  if (!/^[a-zA-Z0-9]{3,}$/.test(authFields.password)) {
    errors.push("Password should be minimum 3 alphanumeric characters");
  }

  if (authFields.rePassword !== authFields.password) {
    errors.push("Passwords should match!");
  }

  if (errors.length > 0) {
    throw errors;
  }
}
