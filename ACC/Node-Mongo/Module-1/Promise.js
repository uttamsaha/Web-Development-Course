const myPromise = new Promise((resolve, reject) => {
  const user = null;
  if (!user) {
    reject("Something went wrong..");
  }
  setTimeout(() => {
    resolve("Successfully got the data");
  }, 1000);
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));
