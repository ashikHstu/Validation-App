// Get the UI elements
let number=document.querySelector('#number');
let email=document.querySelector('#email');
let post_code=document.querySelector('#pc');


// Add Event Listener
number.addEventListener('click',validateNumber);
email.addEventListener('click',validateEmail);
post_code.addEventListener('click',validatePostCode);



function validateN(x)
{
    let re;
    re = /^(?:\+88|01)?\d{11}\r?$/;
    return re.test(x);
    // re = /^(+)?(88)?01[0-9]{9}$/;
   // return re.test(x);
}


function validateE(x)
{
    let  re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
    return re.test(x);

}

function validateP(x)
{
    let re = /^[0-9]{4}$/;
    
    return re.test(x);
}






function showAlert(message,className)
{
    let div=document.createElement('div');
    div.className=`alert  ${className}`;
    div.appendChild(document.createTextNode(message));
    let container=document.querySelector('.container');
    let table=document.querySelector('#email');
  
    container.insertBefore(div,table);

    setTimeout(()=>{
        document.querySelector('.alert').remove();
    },3000);
}



function validateNumber()
{
    
    let x=prompt("Enter Number to validate : ");

    if(validateN(x)){
       showAlert("Valid Number",'success');
    }
    else {
        showAlert('Not a valid number','error');

    }
}

function validateEmail()
{
    let x=prompt("Enter Email to validate : ");
    if(validateE(x))
    {
        showAlert("Valid Email Address",'success');
       
    }
    else {
        showAlert('Invalid Email','error');
    }
}

function validatePostCode()
{
    let x=prompt("Enter post-code to validate : ");
    if(validateP(x)){
        showAlert("Valid Post Code",'success');
    }
    else {
        showAlert('Invalid PostCode','error');
    }
}