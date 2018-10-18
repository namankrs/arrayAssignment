let assert = require("assert");
let arrayFunctions = require("./lib.js");

let createReverseFibonacciSeries = arrayFunctions.createReverseFibonacciSeries;
let extractAlternatingElements = arrayFunctions.extractAlternatingElements;
let reverseList = arrayFunctions.reverseList;
let addNumbers = arrayFunctions.addNumbers;
let filterNumbers = arrayFunctions.filterNumbers;
let insertElement = arrayFunctions.insertElement;
let deleteElement = arrayFunctions.deleteElement;
let sortNumbers = arrayFunctions.sortNumbers;
let findMax = arrayFunctions.findMax;
let findMin = arrayFunctions.findMin;
let calculateAverage = arrayFunctions.calculateAverage;
let getLengths = arrayFunctions.getLengths;
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

//--------------tests for calculating lenghts of given strings
{
  const testgetLengths = function(input,expectedOutput){
    assert.deepEqual(getLengths(input),expectedOutput);
  }

  testgetLengths(["naman","rahul","chandan"],[5,5,7]);
  testgetLengths([],[]);
  
}
  
  
