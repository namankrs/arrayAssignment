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

function isEven(number){
  if(number%2 == 0) return true;
  return false;
}

function isOdd(number){
  if(number%2 != 0) return true;
  return false;
}



//function to filter odd and even elements.
const filterNumbers = function(numbers,choice){
  if(choice != "even" && choice !="odd"){
    return("wrong choice");
  }
  const classifiedNumbers = {};
  let split = [];
  split[0] = "even";
  split[1] = "odd";
  classifiedNumbers["even"] = numbers.filter(isEven);
  classifiedNumbers["odd"] = numbers.filter(isOdd);
  return classifiedNumbers[choice];
}
exports.filterNumbers=filterNumbers;

function sum(a,b){
  return a+b;
}

//function for finding sum of numbers in a list
const addNumbers = function(numbers){
  let result = numbers.reduce(sum);
  return result;
}
exports.addNumbers = addNumbers;

//function to print the return a list of numbers in reverse order
const reverseList = function(list){
  function insertElement(result,element){
    result.unshift(element);
    return result;   
  }
  reversedList = list.reduce(insertElement,[]);
  return reversedList;
}
exports.reverseList = reverseList;

function isIndexEven(element,index){
  if(index%2==0) return true;
  return false;
}
    
//function to return every second element of an array
const extractAlternatingElements = function(numbers){
  extractedElements = numbers.filter(isIndexEven)
  return extractedElements;
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

function findGreater(a,b){
  if(a>b) return a;
  return b;
}

function findSmaller(a,b){
  if(a<b) return a;
  return b;
}

//function to determine greatest number in a list
const findMax = function(numbers){
  greatestNumber = numbers.reduce(findGreater)
  return greatestNumber;
}
exports.findMax = findMax;

//function to determine smallest number in a list
const findMin = function(numbers){
  smallestNumber = numbers.reduce(findSmaller);
  return smallestNumber;
}
exports.findMin = findMin;

//function to calculate average of numbers
const calculateAverage = function(numbers){
  average = numbers.reduce(sum)/numbers.length;
  return average;
}
exports.calculateAverage = calculateAverage;

function findLength(string){
  return string.length;
}

//function to calculate lengths of given strings
const getLengths = function(strings){
  lengths = strings.map(findLength);
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

function isGreaterGenerator(threshold){
  return function(number){
    if(number>threshold) return true;
    return false;
  }
}

//function to count numbers above certain threshold
const countNumbersAbove = function(numbers,threshold){
  isGreater = isGreaterGenerator(threshold);
  count = numbers.filter(isGreater).length;
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

//function to find unique elements in first array only i.e difference of two arrays
const filterDifferences = function(firstList,secondList){
  let uniques = [];
  for(number of firstList){
    !secondList.includes(number) && uniques.push(number);
  }
  return uniques;
}
exports.filterDifferences = filterDifferences;

//function to check whether a set is a proper subset of another set or not
const isSubset = function(list2,list1){
  let result = true;
  for(number of list2){
    (!list1.includes(number)) && (result=false);
  }
  return result;
}
exports.isSubset = isSubset;

//function to zip two arrays
const zipNumbers = function(list1,list2){
  length = Math.min(list1.length,list2.length);
  let zippedNumbers = [];
  for(let index=0; index<length; index++){
    zippedNumbers[index] = [list1[index],list2[index]];
  }
  return zippedNumbers;
}
exports.zipNumbers = zipNumbers;

const rotateElements = function(numbers,index){
  let length = numbers.length;
  for(let count = numbers.length-1; count>=index; count--){
    numbers.unshift(numbers.pop());
  }
  return numbers;
}
exports.rotateElements = rotateElements;

//function to partition a array based on a value
const splitNumbers = function(numbers,value){
  let firstPart = [];
  let lastPart = [];
  for(let number of numbers){
    number<=value && firstPart.push(number);
    number>value && lastPart.push(number);
  }
  return [firstPart,lastPart];
}
exports.splitNumbers = splitNumbers;
