// alert("hey")

// document.querySelector("#one").addEventListener("click", function(){
//     document.querySelector("#input1").innerHTML = document.querySelector("#input1").innerHTML  + 
//     "1" 
// })
// document.querySelector("#two").addEventListener("click", function(){
//     document.querySelector("#input1").innerHTML = document.querySelector("#input1").innerHTML  + 
//     "2" 
// })
// document.querySelector("#plus").addEventListener("click", function(){
//     document.querySelector("#input1").innerHTML = document.querySelector("#input1").innerHTML  + 
//     "+"  
// })
// document.querySelector("#ans").addEventListener("click", function(){
//     document.querySelector("#input2").innerHTML = document.querySelector("#input1").innerHTML
// })

// function valuebtn(e){
//     res.screen.value += e.value;
// }
let res = "";
let resF = "=";

let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", function(e){
        console.log(e.target.innerHTML);
        if(e.target.innerHTML== "="){
            resF = eval(res);
            document.querySelector("#input2").innerHTML = resF;


        }else if(e.target.innerHTML== "AC"){
            resF = "";
            res = "";
            document.querySelector("#input2").innerHTML = resF;
            document.querySelector("#input1").innerHTML = res;
        }
        else if(e.target.innerHTML=="C"){
            // document.querySelector("#input1").innerHTML = ;


            //document.querySelector("#input1").innerHTML.length = len;
            //document.querySelector("#input1").innerHTML.substring(0, len - 1 ) = ss
            //.substring(0, sub.length - 1 )
            let string = document.querySelector("#input1").innerHTML;
            let f = string.substring(0, string.length - 1 );
            document.querySelector("#input1").innerHTML = f;

        }
        else if(e.target.innerHTML=="..."){
            res = "coming soon";
           
            document.querySelector("#input1").innerHTML = res;

        }
        else{
            res =  res + e.target.innerHTML;
            document.querySelector("#input1").innerHTML = res;
        }
    })
})