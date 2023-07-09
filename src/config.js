const host =
  process.env.REACT_APP_TYPE === "local"
    ? process.env.REACT_APP_LOCAL
    : process.env.REACT_APP_AWS_URL;

export default host;
