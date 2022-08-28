const billAmount=document.querySelector("#bill-amount");
const givenAmount=document.querySelector("#given-amount");
const checkButton=document.querySelector("#check-button");
const errorMessage=document.querySelector(".error-show");

const noOfNotes=document.querySelectorAll(".noOfNote");

const numberOfNotes=[2000,500,100,50,10,5,1];
function calculateBill() {
    errorMessage.style.display="none"

    if(billAmount.value >0){
        if(Number(givenAmount.value) >= Number(billAmount.value)){
            const subtractValue= givenAmount.value - billAmount.value;
            console.log(subtractValue);
            calculateReturn(subtractValue);
            errorMessage.style.display="block"
            errorMessage.innerText="Amount should be return " + subtractValue;
        }else{
            errorMessage.style.display="block"
        errorMessage.innerText="Hey!!!! You have to pay the full amount"

        }
    }else{
        errorMessage.style.display="block"
        errorMessage.innerText="Bill amount must be greater than 0"
    }
}
function calculateReturn(subtractValue) {
    for(let i=0;i<numberOfNotes.length;i++){
        const remainNumber=Math.trunc(subtractValue / numberOfNotes[i])
       
        //testing code
        // console.log(remainNumber);
       
       subtractValue = subtractValue % numberOfNotes[i];
       noOfNotes[i].innerText=remainNumber;
     //testing
    //    console.log(remainNumber);
   }
}
checkButton.addEventListener('click',calculateBill);