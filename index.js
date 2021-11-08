//write your code here
const averageInArray = numbers => {
    let average = 0;
    for(let i = 0;i < numbers.length; i++){
        average += numbers[i];
    }return average / numbers.length;
};
console.log(averageInArray([2,4,5,7,8]));