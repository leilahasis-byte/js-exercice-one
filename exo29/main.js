// const user={
//     id:1,
//     name:"narin",
//     city:"mosku"
// }

// console.log(user.name)
// const jsonString=JSON.stringify(user);
// console.log(jsonString);
// const parseDATA=JSON.parse(jsonString)
// console.log(parseDATA);


async function fetchData() {
    console.log("start fetching data");
    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await response.json();

    console.log("response:",data)
}
fetchData();
