

function fetchUserDataSync() {
    alert("fetching user message");
    return{name:"late message"}


}


const user =fetchUserDataSync();

console.log("this message is late")


console.log("After 2 second")
setTimeout(()=>{
    console.log("message is late")},2000)


// function getUserData(callback){
    
// setTimeout(()=>{
//     console.log("message is late")},2000)

// }

// console.log("this is message come later")
// getUserData();
// console.log("this is quick message")