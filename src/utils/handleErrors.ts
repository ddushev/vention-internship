import alertModal from "./alertModal/alertModal";

const handleErrors = (error: unknown) => {
  if (Array.isArray(error)) {
    alertModal(error.join("\n"));
  } else {
    alertModal(error as string);
  }
};

export default handleErrors;
