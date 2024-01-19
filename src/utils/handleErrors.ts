import alertModal from "./alertModal/alertModal";

const handleErrors = (error: string[] | string) => {
  if (Array.isArray(error)) {
    alertModal(error.join("\n"));
  } else {
    alertModal(error);
  }
};

export default handleErrors;
