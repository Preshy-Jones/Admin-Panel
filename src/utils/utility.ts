export const capitalizeFirstLetter = (str: string) => {
  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
};

export const statusGenerator = (value: string) => {
  const numericValue = Number(value);
  if (numericValue <= 250) {
    return "active";
  } else if (numericValue >= 250 && numericValue <= 500) {
    return "inactive";
  } else if (numericValue >= 500 && numericValue <= 750) {
    return "pending";
  } else if (numericValue >= 750 && numericValue <= 1000) {
    return "blacklisted";
  }
};
