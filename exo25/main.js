const num1=[1,2,3,4]
const num2=[...num1,6,7,8,9]
console.log(num2)


function mutiple1(...numbers){

    return numbers.reduce((total,mutiple1) => total*mutiple1,1)
}
console.log(mutiple1(2,3,4,5))
