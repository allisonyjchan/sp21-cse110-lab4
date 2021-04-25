# Part 1
## Part 1a. A Quick Introduction
1. values added:  20
2. final result:  20

3. values added:  20
4. The code returns an error because we are trying to print out the value of the variable named result, but result is not accessible as it was declared inside a different block using the let keyword.

5. The code returns an error before anything can be printed because we are trying to reassign the value of result which we are not allowed to be because it was declared using const.
6. Same reasoning as above.

## Part 1b. A Little More of a Challenge
1. 3 is printed out because that is the value of the i at the end of the loop.
2. 150 is printed out beacause that is the last value of discountedPrice which comes from half of 300.
3. 150 is printed out because that is the value of finalPrice.  
4. This function returns the array [ 50, 100, 150 ].  

5. The code causes an error because we are trying to access i which was declared inside another code block using let, so it is out of scope.
6. The code causes an error because we are trying to access discountedPrice which was declared inside another code block using let, so it is out of scope.
7. 150 is printed.
8. This function returns the array [ 50, 100, 150 ].

9.  The code causes an error at line 11 because we are trying to access i, but i is declared inside another code block using let, so it is out of scope.
10. 3 is printed.
11. This function returns the array [ 50, 100, 150 ].

12. 
A. student.name;  
B. student['Grad Year'];  
C. student.greeting();  
D. student['Favorite Teacher'].name;
E. student.courseLoad[0];  

13.  
A. '32'  
B. 1  
C. 3
D. '3null'
E. 4
F. 0
G. '3undefined'
H. NaN

14.
A. true  
B. true  
C. true  
D. false
E. true
F. true

15. == attempts to convert types so that they match before trying to compare them while === will not try to convert types and will just return false if the operands are not the same type, even if they could technically be converted into a matching value in a different type.

17. modifyArray will return [ 2, 4, 6 ]. The function doSomething takes in a number as a parameter and doubles the value and then returns it. modifyArray is called with the array [1, 2, 3] and the doSomething function. The modifyArray function iterates through the given array and calls the function that is passed in, in this case the doSomething function on every element, then saves the result in a new array. In this case, each element is doubled and stored into a new array which is then returned which is why the result [ 2, 4, 6 ] is [ 1, 2, 3 ] but with every element doubled in value.

19.  
1  
4  
3  
2  
With the 2 appearing after a 1 second delay.
