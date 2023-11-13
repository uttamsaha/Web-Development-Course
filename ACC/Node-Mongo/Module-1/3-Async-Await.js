const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success");
    },1000)
})


const getData = async() => {
    const res = await promise;
    console.log(res);
}
getData();



//fetch method using async await
const getUser = async() => {
    const res = await fetch();
    const data = await res.json();
}