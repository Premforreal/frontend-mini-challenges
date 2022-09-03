const input = document.getElementById('input')
const startgame = document.getElementById('start')
const submit = document.getElementById('submit')
var lives= 10
var list =[]


answer = Math.floor(Math.random() * 100) +1;


input.addEventListener('input',()=>submit.disabled = false)

startgame.addEventListener('click',()=>{
    window.location.reload();
})





submit.addEventListener('click',()=>{
    startgame.disabled=true;
    mynumber  =  parseInt(input.value)
    list.push(mynumber)

        if (mynumber===answer){
            document.getElementById("p1").innerHTML = "correct!";
            document.getElementById("low").innerHTML = "";
        }
        else{
            
            if (lives>0){
                lives-=1
                document.getElementById("lives").innerHTML = "lives remaining:"+(lives);
                document.getElementById("p1").innerHTML = "your submissions : "+list;

                if(mynumber>answer){
                    document.getElementById("low").innerHTML = "too high!";
                }else{
                    document.getElementById("low").innerHTML = "too low!";
                }


            }else{
                document.getElementById("lives").innerHTML = 'you lost!';
                document.getElementById("p1").innerHTML = "The answer is : "+answer;
                document.getElementById("low").innerHTML = "";
                submit.disabled = true;
                startgame.disabled=false;
            }
    }
    })


