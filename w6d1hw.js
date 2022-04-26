// HOMEWORK
// Question 1

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ['Max', 'HAS', 'PuRple', 'dog']

function findWords(string, names){
        if(string.includes(names)){
            console.log("Matched dog_name")
        }else{
            console.log("No Matches")
        }
    }


console.log(findWords(dog_string, dog_names))








// Question 2

let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i, 1, "even index" )
        }
    }return arr 
}

console.log(replaceEvens(arr1))