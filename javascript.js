var number = document.querySelectorAll(".number") , 
    operation = document.querySelectorAll(".operator") , 
    clear = document.querySelectorAll(".clear") ,
    equals = document.querySelector(".equals") ,
    topText = document.querySelector('.top-text') , 
    bottomText = document.querySelector('.bottom-text') , 
    del=document.querySelectorAll(".del") , 
    substraction = document.getElementById("substraction"),
    multiple = document.getElementById("multiple") ,
    percentage = document.getElementById("percentage"),
    addition = document.getElementById("addition"),
    division = document.getElementById("division"),
    operator = undefined,
    result = undefined;


// show the clicked number on the screen

const  printNumber = e => {
    const clickedItem = e.target;

    // prevent the dash from repeting more than once in a number

    if(clickedItem.innerHTML === '.' && bottomText.innerHTML.includes('.'))
    return
    else
    {
        // adding a 0 if the user clicked the dash first 
        
        if (clickedItem.innerHTML === '.' && bottomText.innerHTML === '') {
            bottomText.innerHTML += '0' + clickedItem.innerHTML;
        }
        else {
            bottomText.innerHTML += clickedItem.innerHTML;
        }
    }
    }

// calling the printNumber in every button

number.forEach ( button => button.addEventListener ( "click" , printNumber ) ) ;

// clear all the text fields function

const clearit = () => {
    bottomText.innerHTML="";
    topText.innerHTML="";
    }

// calling the clearit function in every button

clear.forEach( button => button.addEventListener ( "click" , clearit ) )

// deleting exactly one number from the current input text field

const deleteOneNumber = () => { bottomText.innerHTML = bottomText.innerHTML.substr( 0 , bottomText.innerHTML.length - 1 ) }

// calling the deleteOneNumber function

del.forEach( button => button.addEventListener ( 'click' , deleteOneNumber ) )


//when the user click an operation we clear the bottom text field and we fill the top one with the choosen operation


const buildOperation = e => { 

    //here we are preventing the user to add more than two parts of an operation
if(topText.innerHTML === "")
{
    operator = undefined;
        // specifying the selected operation
        const clickedItem = e.target;
    
        // associate it with the operator variable
        operator = clickedItem.innerHTML;
        // filing the top text with the bottom text content concatenated with the content of calc var
                topText.innerHTML += bottomText.innerHTML + " " ;
        // clearing the bottom text for the next traitement
                bottomText.innerHTML="";
}

}

// calling the calculate function

operation.forEach(button => {
    button.addEventListener("click",buildOperation);
});

// the function to calculate 2 values

const calculate = e =>{
    result = undefined;
    switch (operator) {
        case '*':
            result = parseFloat(topText.innerHTML) * parseFloat(bottomText.innerHTML);
            topText.innerHTML = result;
            bottomText.innerHTML = '';
            operator = undefined;
            break;
        case '/':
            result = parseFloat(topText.innerHTML) / parseFloat(bottomText.innerHTML);
            topText.innerHTML = result;
            bottomText.innerHTML = '';
            operator = undefined;
            break;
        case '-':
            result = parseFloat(topText.innerHTML) - parseFloat(bottomText.innerHTML);
            topText.innerHTML = result;
            bottomText.innerHTML = '';
            operator = undefined;
            break;
        case '+':
            result = parseFloat(topText.innerHTML) + parseFloat(bottomText.innerHTML);
            topText.innerHTML = result;
            bottomText.innerHTML = '';
            operator = undefined;
            break;
        case '%':
            result = (parseFloat(topText.innerHTML) * 100) / parseFloat(bottomText.innerHTML);
            topText.innerHTML = result;
            bottomText.innerHTML = '';
            operator = undefined;
            break;
        default:
            bottomText.innerHTML= 'ERROR';
            break;
    }
}

// calling the calculate function 

equals.addEventListener ( 'click' , calculate ) ;




