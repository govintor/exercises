//Create a conditonal that checks their age
const age = 16
//If under 16, tell them they can not drive
if ( age <16){
       console.log ('they can not drive')
}else if (age <18){
    console.log ('tell them they can\'t hate from outside the club, because they can\'t even get in')

}else if (age < 21){
    console.log ('tell them they can not drink')
} else if (age <25){
    console.log ('them they can not rent cars affordably')
} else if (age <30){
    console.log ('affordably')
} else if (age-= 30){
    console.log ('there is nothing left to look forward to'
    )
}

document.querySelector('h1').addEventListener('click', checkage)
const p = document.querySelector ('p')

function (){
    let age =Number(document.querySelector('input').value)
        if ( age <16){
        console.log ('they can not drive')
 }else if (age <18){
     p.innerText ='they can not drink'
 
 }else if (age < 21){
   p.innerText = 'they can not rent cars affordably'
 } else if (age <25){
     p.innerText = 'they can not rent cars affordably'
 } else if (age <30){
    p.innerText = 'they can not rent fancy cars affordably'
 } else if (age-= 30){


     p.innerText = 'tell them there is nothing left to look forward too'
     
 }
}

//If under 18, tell them they can't hate from outside the club, because they can't even get in

//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
