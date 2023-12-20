const handleErrors = (error: unknown) => {
  if (Array.isArray(error)) {
    alert(error.join("\n"));
  } else {
    alert(error);
  }
};

export default handleErrors;
