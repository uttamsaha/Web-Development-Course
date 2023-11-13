// steps 
/*
* Steps to use firebase
1. Create a project on console.firebase.google.com 
2. install firebase -> npm  install firebase
3. Register web app in firebase.
4.  Copy firebase config init with config from firebase project settings / firebase config setup into firebase.init.js
5. export default app from firebase.init.js
6. import firebase init.js into app.js 
7. import getAuth from firebase/auth and create const auth = getAuth(app) in app.js

8. Turn on google authentication from authentication option of console.firebase.google.com -> (firebase -> authentication -> enable google sign in)
9. create google provider in app.js in app function -> const provider = nw GoogleAuthProvider(auth,provider); 
10. Then sing in with google btn er event handler e -> singInWithPop(auth, provider)
.then(result = {
    const user = result.user;
    console.lgo(user);
})
.cath(error => {
    console.log(error);
})
*/