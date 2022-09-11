let stars = document.querySelectorAll('[id ^= "star"]');
let reaction = document.getElementById('reaction');
const reactions = ['128531',
                '128549',
                '128528',
                '128515',
                '128526'];

var clicked=false;

Array.prototype.forEach.call(stars, callback); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 

function callback(element) {

    element.addEventListener('mouseover', () => {
        let i = element.id.slice(-1);
        while (i>0 && !clicked){
            document.getElementById(`star${i}`).classList.add('checked')
            i--;
        }
    });
    
    element.addEventListener('mouseout', () => {
        let i = 1
        while (i<=5 && !clicked){
            document.getElementById(`star${i}`).classList.remove('checked')
            i++;
        }
    });
    
    element.addEventListener('click',()=>{
        clicked = true;
        let i = element.id.slice(-1);
        reaction.innerHTML = `&#${reactions[i-1]};`
        reaction.style.fontSize = `48px`;

        if(element.classList.contains('checked')){
            i++;
             while(i<=5){
                    document.getElementById(`star${i}`).classList.remove('checked')
                    i++    
                 }            
        }
        
        else{
            while(i>0){        
            document.getElementById(`star${i}`).classList.add('checked')
            i--;
            }
        }
    })
}


