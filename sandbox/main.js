// Define your function below:
async function resolveWithValue(pFn, string) {
  try {
    const result = await pFn(string);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
resolveWithValue(testerFunc, 'test input');
// testerFunc() takes in a string and returns a promise
let testerFunc = (str) => {
  if (Math.random() < 0.5) {
    return Promise.resolve(`Resolved with: ${str}`);
  } else {
    return Promise.reject(`Rejected with: ${str}`);
  }
};
