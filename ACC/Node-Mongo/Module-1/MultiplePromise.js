const myPromise = new Promise((resolve, reject) => {
    const user = {id: 1};
    if (!user) {
      reject("Something went wrong..");
    }
    setTimeout(() => {
      resolve({name: "John"});
    }, 1000);
  });

  const ids = [1,2,3,4];
  let userData = [];
  for(let i = 0; i < ids.length; i++){
    const userId = ids[i];
    userData.push(myPromise);
  }

  Promise.all(userData).then(res => console.log(res));
    