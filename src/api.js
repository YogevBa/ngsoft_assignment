export const getDbData = () => {
  const data = fetch(
    'https://my-json-server.typicode.com/galits/testNgsoft/db'
  ).then((res) => res.json());
  return data;
};
