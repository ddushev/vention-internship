interface authFields {
  username: string;
  password: string;
  rePassword?: string;
}

export default function authFormValidations(authFields: authFields) {
  const errors = [];

  if (authFields.username.length < 5) {
    errors.push("Username should be atleast 5 characters long!");
  }

  if (!/^[a-zA-Z0-9]{3,}$/.test(authFields.password)) {
    errors.push("Password should contain only alphanumerics and have a length of 3 characters!");
  }

  if (authFields.rePassword && authFields.rePassword !== authFields.password) {
    errors.push("Passwords should match!");
  }

  if (errors.length > 0) {
    throw errors;
  }
}
