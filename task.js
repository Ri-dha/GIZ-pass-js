//to make the array immutable we add const


const numbers = [5,8,0,1,9,11,15,16];




//  Reading the data.txt file 

var fs = require ('fs')
var txt = fs.readFileSync('data.txt', 'utf8')


// storing the file data.txt in an array

let dataArray=[]


// turning the data array to an array of numbers 
dataArray=txt.split(',')
dataArray= dataArray.map(elem=> parseInt(elem, 10))


// making the numbers asceind 
function asc(ar){
    for(let i = 0 ; i < ar.length - 1  ; i++)
    {
        for(let j = 0 ; j < ar.length - 1 - i ; j++)
        {
            if(ar[j] > ar[j + 1])
            {
                [ar[j], ar[j+1]] = [ar[j+1], ar[j]]  

            }
        }
    }

console.log("Numbers list After Asc sorting: ", ar)
}


// making the numbers descend
function desc(arr){
    for(let i = 0 ; i < arr.length ; i++)
    {
        for(let j = 0 ; j < arr.length - 1 ; j++)
        {
            if(arr[j] < arr[j + 1])
            {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]  
         }
        }
    }
    
    console.log("Numbers list After Desc sorting: ", arr)
}


console.log("immutable numbers list: ", numbers)

// sort the numbers in ascending order, then store it in a new file called output.txt

asc(dataArray)
fs.writeFileSync('OutPut.txt', dataArray.toString());
