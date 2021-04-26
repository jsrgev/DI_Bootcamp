// Instructions

// Using this object :

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

//     Copy this object using the method that was taught in today’s lesson.

let copyGroceries = {...groceries};


//     Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?

groceries.totalPrice = "35$";
it should only modify the original object


//     Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?

groceries.other.payed = false;
yes it will be in both because each points to the other. because we didn't do a deep clone.








