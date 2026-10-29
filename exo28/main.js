function fetchUserData() {
    return new Promise((resolve,reject)=> { 
        setTimeout(()=>{
        const success=false;

        if(success){
            resolve({id:1,name:"john smith"});

        } else{
            reject("failed to fetch user data");
        }
    },2000);

    

    })
}

// fetchUserData()
// .then((data) => console.log("user data",data))
// .catch((err) => console.log(err))



async function displayaUerData() {
try{
            const user=await fetchUserData();
               console.log(user) 

   } catch(err){
    console.log(err)


   }
}

displayaUerData();