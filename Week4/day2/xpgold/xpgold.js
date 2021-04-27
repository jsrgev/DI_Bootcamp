// Exercise 1 : Landscape

//     Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion


let landscape = function()
{
 let result = "";
 let flat = function(x) // (4)
 {
   for(let count = 0; count<x; count++) //will run 4 times
   {
     result = result + "_";
   }
 }
 let mountain = function(x) // (4)
 {
   result = result + "/"
   for(let counter = 0; counter<x; counter++)
   {
     result = result + "'"  //  /'
   }
   result = result + "\\"
 }

  //these functions are called within the landscape function
flat(4);         //  produces ____
mountain(4);     //  /''''\\
flat(4)          // ____ again
return result;
}

landscape()


// output should be ____/''''\\____

