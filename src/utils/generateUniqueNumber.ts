export const generateUniqueNumber = () => {
  const timestamp = Date.now();
  const randomComponent = Math.floor(Math.random() * 10000);
  return timestamp * 10000 + randomComponent;
};
