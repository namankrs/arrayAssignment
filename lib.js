const swapNumbers = function(a,b,numbers){
  if(numbers[a]>numbers[b]){
    numbers[a]=numbers[a]+numbers[b]-(numbers[b]=numbers[a]);
  }
}
const passForAscending = function(numbers){
  length = numbers.length;
  for(let index=0; index<length; index++){
    swapNumbers(index,index+1,numbers)
  }
  return numbers;
}

const passForDescending = function(numbers){
  length = numbers.length;
  for(index=0; index<length; index++){
    swapNumbers(index+1,index,numbers)
  }
  return numbers;
}
//fuction for sorting array of numbers.
const sortNumbers= function(numbers,typeOfSort){
  let sortedNumbers = [];
  let length = numbers.length;
  for(let index=0; index<length; index++){
    sortedNumbers[index] = numbers[index];
  }
  if(typeOfSort == "ascending"){
    for(let index=0; index<length; index++){
      passForAscending(sortedNumbers);
    }
  }
  if(typeOfSort == "descending"){
    for(let index=0; index<length; index++){
      passForDescending(sortedNumbers);
    }
  }
  return sortedNumbers;
}
exports.sortNumbers=sortNumbers;

//function for deleting array element
const deleteElement = function(array,index){
  if(index<0){
    return("wrong Index");
  }
  index = Math.floor(index);
  let length = array.length;
  let newArray = [];
  for(let count=0; count<index; count++){
    newArray[count] = array[count];
  }
  for(let count=index+1; count<length; count++){
    newArray[count-1] = array[count];
  }
  return newArray;
}
exports.deleteElement = deleteElement;

//function for inserting an element into array 
const insertElement = function(array,index,element){
  index = Math.floor(index);
  length = array.length;
  if(index<0 || index>length){
    return("wrong Index");
  }
  let newArray = [];
  for(let count=0; count<index; count++){
    newArray[count] = array[count];
  }
  newArray[index] = element;
  for(let count=index+1; count<=length; count++){
    newArray[count] = array[count-1];
  }
  return newArray;
}
exports.insertElement = insertElement;

//function to filter odd and even elements.
const filterNumbers = function(numbers,choice){
  if(choice != "even" && choice !="odd"){
    return("wrong choice");
  }
  const classifiedNumbers = {};
  let split = [];
  split[0] = "even";
  split[1] = "odd";
  classifiedNumbers["even"] = [];
  classifiedNumbers["odd"] = [];
  let length = numbers.length
  for(let index=0; index<length; index++){
    let remainder = numbers[index]%2
    classifiedNumbers[split[remainder]].push(numbers[index]); 
  }
  return classifiedNumbers[choice];
}
exports.filterNumbers=filterNumbers;

//function for finding sum of numbers in a list
const addNumbers = function(numbers){
  let sum = 0;
  for(number of numbers){
    sum+= number;
  }
  return sum;
}
exports.addNumbers = addNumbers;let sum = 0;

//function to print the return a list of numbers in reverse order
const reverseList = function(list){
  let reversedList = [];
  for (number of list){
    reversedList.unshift(number);
  }
return reversedList;
}
exports.reverseList = reverseList;

//function to return every second element of an array
const extractAlternatingElements = function(numbers){
  let extractedElements = {};
  extractedElements[1] = [];
  extractedElements[0] = [];
  for(index in numbers){
    extractedElements[index%2].push(numbers[index]);
  }
  return extractedElements[0];
}
exports.extractAlternatingElements = extractAlternatingElements;

//function to generate fibonacci series
const generateFibonacciSeries = function(noOfTerms){
  let a = -1;
  let b = 1;
  let series = [];
  for (let count = 0; count<noOfTerms; count++){
    nextTerm = a+b;
    series.push(nextTerm);
    a = b;
    b = nextTerm;
  }
  return series;
}

//function to generate reverse fibonacci series 
const createReverseFibonacciSeries = function(noOfTerms){
  let series = reverseList(generateFibonacciSeries(noOfTerms));
  return series;
}
exports.createReverseFibonacciSeries = createReverseFibonacciSeries;

