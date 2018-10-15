let assert = require("assert");
let arrayFunctions = require("../lib/arrayFunctions.js");

//tests for sorting numbers
{
  {
    let input = [1,3,2,6,5];
    //sort array in ascending order
    let expectedOutput = [1,2,3,5,6];
    let actualOutput = arrayFunctions.sortNumbers(input,"ascending");
    assert.deepEqual(expectedOutput,actualOutput);
    //sort array in descending order
    expectedOutput = [6,5,3,2,1];
    actualOutput = arrayFunctions.sortNumbers(input,"descending");
    assert.deepEqual(expectedOutput,actualOutput);
    assert.deepEqual([1,3,2,6,5],input);
  }

  {
    let input = [0,1,0,1];
    //sort array in ascending order
    let expectedOutput = [0,0,1,1];
    let actualOutput = arrayFunctions.sortNumbers(input,"ascending");
    assert.deepEqual(expectedOutput,actualOutput);

    //sort array in descending order
    expectedOutput = [1,1,0,0];
    actualOutput = arrayFunctions.sortNumbers(input,"descending");
    assert.deepEqual(expectedOutput,actualOutput);
  }
  {
    let input = [-2,1,-1,8];
    //sort array in ascending order
    let expectedOutput = [-2,-1,1,8];
    let actualOutput = arrayFunctions.sortNumbers(input,"ascending");
    assert.deepEqual(expectedOutput,actualOutput);

    //sort array in descending order
    expectedOutput = [8,1,-1,-2];
    actualOutput = arrayFunctions.sortNumbers(input,"descending");
    assert.deepEqual(expectedOutput,actualOutput);
  }
}

//tests for deleting array elements
{
  {
    input = [1,2,3,4];
    expectedOutput = [1,2,4];
    actualOutput = arrayFunctions.deleteElement(input,2);
    assert.deepEqual(actualOutput,expectedOutput);
    assert.deepEqual([1,2,3,4],input);
  }
  {
    input = [1];
    expectedOutput = [];
    actualOutput = arrayFunctions.deleteElement(input,0);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4];
    expectedOutput = [1,2,3,4];
    actualOutput = arrayFunctions.deleteElement(input,4);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4];
    expectedOutput = "wrong Index"
    actualOutput = arrayFunctions.deleteElement(input,-1);
    assert.deepEqual(actualOutput,expectedOutput);
  }
}

//tests for inserting a element in a array
{
  {
    input = [1,2,3,4];
    expectedOutput = [1,2,5,3,4];
    actualOutput = arrayFunctions.insertElement(input,2,5);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4];
    expectedOutput = "wrong Index";
    actualOutput = arrayFunctions.insertElement(input,-1,5);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4];
    expectedOutput = [1,2,3,4,5];
    actualOutput = arrayFunctions.insertElement(input,4,5);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4];
    expectedOutput = "wrong Index";
    actualOutput = arrayFunctions.insertElement(input,7,5);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4];
    expectedOutput = [1,2,5,3,4];
    actualOutput = arrayFunctions.insertElement(input,2.5,5);
    assert.deepEqual(actualOutput,expectedOutput);
  }
}

//test for filter elements as odd and even.
{
  {
    input = [1,2,3,4,5];
    expectedOutput = [2,4];
    actualOutput = arrayFunctions.filterNumbers(input,"even");
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4,5];
    expectedOutput = [1,3,5];
    actualOutput = arrayFunctions.filterNumbers(input,"odd");
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    input = [1,2,3,4,5];
    expectedOutput = "wrong choice";
    actualOutput = arrayFunctions.filterNumbers(input,"oddy");
    assert.deepEqual(actualOutput,expectedOutput);
  }
}

//tests for finding sum of numbers in a list
{
  {
    input = [];
    expectedOutput = 0;
    actualOutput = arrayFunctions.addNumbers(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    let input = [1,2,3];
    let expectedOutput = 6;
    let actualOutput = arrayFunctions.addNumbers(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
}

//tests for reversing a list of numbers
{
  {
    let input = [];
    let expectedOutput = [];
    let actualOutput = arrayFunctions.reverseList(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
  {
    let input = [1,2,3,4,5];
    let expectedOutput = [5,4,3,2,1];
    let actualOutput = arrayFunctions.reverseList(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
}

//tests for extracting alternating elements of a list of numbers;
{
  {
    let input = [1,2,3,4,5];
    let expectedOutput = [1,3,5];
    let actualOutput = arrayFunctions.extractAlternatingElements(input);
    assert.deepEqual(actualOutput,expectedOutput);
  }
}
