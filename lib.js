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

//function to determine greatest number in a list
const findMax = function(numbers){
    return sortNumbers(numbers,"ascending").pop();
}
exports.findMax = findMax;

//function to determine smallest number in a list
const findMin = function(numbers){
    return sortNumbers(numbers,"descending").pop();
}
exports.findMin = findMin;

//function to calculate average of numbers
const calculateAverage = function(numbers){
  average = addNumbers(numbers)/numbers.length;
  average = average.toFixed(2);
  return average;
}
exports.calculateAverage = calculateAverage;

//function to calculate lengths of given strings
const getLengths = function(strings){
  let lengths = [];
  for(string of strings){
    lengths.push(string.length)
  }
  return lengths;
}
exports.getLengths = getLengths;

//function to count the odd numbers in a list
const countOddNumbers = function(numbers){
  let count = 0;
  count = filterNumbers(numbers,"odd").length;
  return count;
}
exports.countOddNumbers = countOddNumbers;

//function to count the even numbers in a list
const countEvenNumbers = function(numbers){
  let count = 0;
  count = filterNumbers(numbers,"even").length;
  return count;
}
exports.countEvenNumbers = countEvenNumbers;

//function to count numbers above certain threshold
const countNumbersAbove = function(numbers,threshold){
  let count = 0;
  for(number of numbers){
    number>threshold && count++;
  }
  return count;
}
exports.countNumbersAbove = countNumbersAbove;

//function to count numbers below certain threshold
const countNumbersBelow = function(numbers,threshold){
  let count = 0;
  for(number of numbers){
    number<threshold && count++;
  }
  return count;
}
exports.countNumbersBelow = countNumbersBelow;

//function to find index of a number in a given list.
const findIndex = function(numbers,number){
  for(index in numbers){
    if(numbers[index] == number){
    return (index);
    }
  }
  return -1;
}
exports.findIndex = findIndex;

//function to check whether given numbers are in ascending order or not
const isOrderAscending = function(numbers){
  for (let index = 0; index < numbers.length -1 ; index++){
    if(numbers[index]>numbers[index+1]){ 
      return false;
    }
  }
  return true;
}
exports.isOrderAscending = isOrderAscending;

//function to check whether given numbers are in descending order or not
const isOrderDescending = function(numbers){
  for (let index = 0; index < numbers.length -1 ; index++){
    if(numbers[index]<numbers[index+1]){ 
      return false;
    }
  }
  return true;
}
exports.isOrderDescending = isOrderDescending;

//function to extract digits of a number in an array
const extractDigits = function(number){
  let numberString = number.toString();
  let numbers = [];
  for(let digits of numberString){
    numbers.push(+digits);
  }
  return numbers;
}
exports.extractDigits = extractDigits;

//function to extract unique elements from an array
const extractUniques = function(numbers){
  let uniqueNumbers = [];
  for(number of numbers){
    !uniqueNumbers.includes(number) && uniqueNumbers.push(number);
}
return uniqueNumbers;
}
exports.extractUniques = extractUniques;

//function to create union array from two arrays
const unifyElements = function(firstList,secondList){
  let unionList = firstList;
  for(let number of secondList){
    unionList.push(number);
  }
  unionList = extractUniques(unionList);
  return unionList;
}
exports.unifyElements = unifyElements;

//function to create intersection array from two arrays
const findIntersection = function(firstList,secondList){
  let commonNumbers = [];
  for(let number of firstList){
    secondList.includes(number) && commonNumbers.push(number);
  }
  return commonNumbers;
}
exports.findIntersection = findIntersection;
