let assert = require("assert");
let arrayFunctions = require("./lib.js");

let {createReverseFibonacciSeries,extractAlternatingElements,reverseList,addNumbers,filterNumbers} = arrayFunctions;
let {insertElement,deleteElement,sortNumbers,findMax,findMin,calculateAverage,getLengths,countOddNumbers,countEvenNumbers,countNumbersAbove,countNumbersBelow,findIndex,isOrderAscending,isOrderDescending,extractDigits} = arrayFunctions;

//-----------------------------------------------  //tests for sorting numbers
{
  {
    let input = [1,3,2,6,5];
    //sort array in ascending order
    let expectedOutput = [1,2,3,5,6];
    let actualOutput = sortNumbers(input,"ascending");
    assert.deepEqual(expectedOutput,actualOutput);
    //sort array in descending order
    expectedOutput = [6,5,3,2,1];
    actualOutput = sortNumbers(input,"descending");
    assert.deepEqual(expectedOutput,actualOutput);
    assert.deepEqual([1,3,2,6,5],input);
  }

  {
    let input = [0,1,0,1];
    //sort array in ascending order
    let expectedOutput = [0,0,1,1];
    let actualOutput = sortNumbers(input,"ascending");
    assert.deepEqual(expectedOutput,actualOutput);

    //sort array in descending order
    expectedOutput = [1,1,0,0];
    actualOutput = sortNumbers(input,"descending");
    assert.deepEqual(expectedOutput,actualOutput);
  }
  {
    let input = [-2,1,-1,8];
    //sort array in ascending order
    let expectedOutput = [-2,-1,1,8];
    let actualOutput = sortNumbers(input,"ascending");
    assert.deepEqual(expectedOutput,actualOutput);

    //sort array in descending order
    expectedOutput = [8,1,-1,-2];
    actualOutput = sortNumbers(input,"descending");
    assert.deepEqual(expectedOutput,actualOutput);
  }
}

//----------------------------------------------- //tests for deleting array elements
{
  {
    input = [1,2,3,4];
    expectedOutput = [1,2,4];
    actualOutput = deleteElement(input,2);
    assert.deepEqual(actualOutput,expectedOutput);
    assert.deepEqual([1,2,3,4],input);
  }
  {
    input = [1];
    expectedOutput = [];
    actualOutput = deleteElement(input,0);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4];
    expectedOutput = [1,2,3,4];
    actualOutput = deleteElement(input,4);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4];
    expectedOutput = "wrong Index"
    actualOutput = deleteElement(input,-1);
    assert.deepEqual(actualOutput,expectedOutput);
  }
}

//----------------------------------------------- //tests for inserting a element in a array
{
  {
    input = [1,2,3,4];
    expectedOutput = [1,2,5,3,4];
    actualOutput = insertElement(input,2,5);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4];
    expectedOutput = "wrong Index";
    actualOutput = insertElement(input,-1,5);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4];
    expectedOutput = [1,2,3,4,5];
    actualOutput = insertElement(input,4,5);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4];
    expectedOutput = "wrong Index";
    actualOutput = insertElement(input,7,5);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4];
    expectedOutput = [1,2,5,3,4];
    actualOutput = insertElement(input,2.5,5);
    assert.deepEqual(actualOutput,expectedOutput);
  }
}

//----------------------------------------------------------------test for filter elements as odd and even.
{
  {
    input = [1,2,3,4,5];
    expectedOutput = [2,4];
    actualOutput = filterNumbers(input,"even");
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4,5];
    expectedOutput = [1,3,5];
    actualOutput = filterNumbers(input,"odd");
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4,5];
    expectedOutput = "wrong choice";
    actualOutput = filterNumbers(input,"oddy");
    assert.deepEqual(actualOutput,expectedOutput);
  }
}

//----------------------------------------------------------------tests for finding sum of numbers in a list
{
  {
    input = [];
    expectedOutput = 0;
    actualOutput = addNumbers(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    let input = [1,2,3];
    let expectedOutput = 6;
    let actualOutput = addNumbers(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
}

//-----------------------------------------------------------------tests for reversing a list of numbers
{
  {
    let input = [];
    let expectedOutput = [];
    let actualOutput = reverseList(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    let input = [1,2,3,4,5];
    let expectedOutput = [5,4,3,2,1];
    let actualOutput = reverseList(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
}

//---------------------------------------------------------tests for extracting alternating elements of a list of numbers;
{
  {
    let input = [1,2,3,4,5];
    let expectedOutput = [1,3,5];
    let actualOutput = extractAlternatingElements(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    let input = [];
    let expectedOutput = [];
    let actualOutput = extractAlternatingElements(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
}

//------------------------------------------------------tests for reverse fibonacci series
{
  {
    let input = 5;
    let expectedOutput = [3,2,1,1,0];
    let actualOutput = createReverseFibonacciSeries(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    let input = 0;
    let expectedOutput = [];
    let actualOutput = createReverseFibonacciSeries(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    let input = 1;
    let expectedOutput = [0];
    let actualOutput = createReverseFibonacciSeries(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    let input = 2;
    let expectedOutput = [1,0];
    let actualOutput = createReverseFibonacciSeries(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
}

//------------------------------------------tests for determining greatest  and smallest number in a list. 
{
  {
    let input = [1,2,4,3,6,5];
    let expectedOutput = 6;
    let actualOutput = findMax(input)
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    let input = [1,2,4,3,6,5];
    let expectedOutput = 1;
    let actualOutput = findMin(input)
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    let input = [];
    let expectedOutput = undefined;
    let actualOutput = findMin(input)
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    let input = [];
    let expectedOutput = undefined;
    let actualOutput = findMax(input)
    assert.deepEqual(actualOutput,expectedOutput);
  }

}

//-------------------tests to calculate average of given numbers
{
  {
    let input = [1,2,3,4,5]
    let expectedOutput = 3;
    let actualOutput = calculateAverage(input);
  }
  {
    let input =  [-1,-2,2,1];
    let expectedOutput = 0;
    let actualOutput = calculateAverage(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
}

//--------------tests for calculating lengths of given strings
{
  const testgetLengths = function(input,expectedOutput){
    assert.deepEqual(getLengths(input),expectedOutput);
  }
  testgetLengths(["naman","rahul","chandan"],[5,5,7]);
  testgetLengths([],[]);
}
  
//------------tests for counting odd numbers in a list
{
  const testCountOddNumbers = function(input,output){
    assert.deepEqual(countOddNumbers(input),output)
  }
  testCountOddNumbers([1,2,3,4,5],3);
  testCountOddNumbers([2,4],0);
}

//------------tests for counting even numbers in a list
{
  const testCountEvenNumbers = function(input,output){
    assert.deepEqual(countEvenNumbers(input),output);
  }
  testCountEvenNumbers([1,2,3,4,5],2);
  testCountEvenNumbers([1,3],0);
}

//------------tests for countNumbersAbove()
{
  const testCountNumbersAbove = function(input,threshold,output){
    assert.deepEqual(countNumbersAbove(input,threshold),output);
  }
  testCountNumbersAbove([1,2,3,4,5],2,3);
  testCountNumbersAbove([],1,0);
}

//------------tests for countNumbersBelow()
{
  const testCounterNumbersBelow = function(input,threshold,output){
    assert.deepEqual(countNumbersBelow(input,threshold),output);
  }
  testCounterNumbersBelow([1,2,3,4,5],2,1);
  testCounterNumbersBelow([],0,0);
}

//----------------test for finding index of a given number
{
  const testFindIndex = function(numbers,number,expectedOutput){
    assert.deepEqual(findIndex(numbers,number),expectedOutput);
  }
  testFindIndex([1,2,3,4],3,2);
  testFindIndex([1,2,3,4],5,-1);
}

//--------------test for isOrderAscending()
{
  const testIsOrderAscending = function(numbers,expectedOutput){
    assert.deepEqual(isOrderAscending(numbers),expectedOutput);
  }
  testIsOrderAscending([1,2,3,4],true);
  testIsOrderAscending([1,4,2,4],false);
  testIsOrderAscending([],true);
}

//--------------test for isOrderDescending()
{
  const testIsOrderDescending = function(numbers,expectedOutput){
    assert.deepEqual(isOrderDescending(numbers),expectedOutput);
  }
  testIsOrderDescending([1,2,3,4],false);
  testIsOrderDescending([1,4,2,4],false);
  testIsOrderDescending([],true);
  testIsOrderDescending([8,5,3,1],true);
}

//----------------test for extractdigits();
{
  const testExtractDigits = function(input,expectedOutput){
    assert.deepEqual(extractDigits(input),expectedOutput);
  }
  testExtractDigits(123,[1,2,3]);
}

