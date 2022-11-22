const header = document.getElementsByClassName("header");
const outer = document.getElementsByClassName("outer");
const container = document.getElementsByClassName("container");
const check = document.getElementById("checkbox-outer");
// console.log(header,outer,container);
let isDark =false;

check.addEventListener("click",()=>{
    if(isDark){
        header[0].setAttribute("id","light");
        outer[0].setAttribute("id","light");
        container[0].setAttribute("id","light");
    }
    else{
         header[0].setAttribute("id","dark");
         outer[0].setAttribute("id","dark");
         container[0].setAttribute("id","dark");
    }
    isDark = !isDark;
});
