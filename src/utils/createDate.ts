const createDate = (separator: string = "-") => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${month}${separator}${day}${separator}${year}`;

  return formattedDate;
};

export default createDate;
