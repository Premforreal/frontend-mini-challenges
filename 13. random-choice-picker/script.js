const tagsElements = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value);

    if(e.key == 'Enter'){
        setTimeout(()=>{
            e.target.value='';
        },10);
        randomSelect();
    };
});

function createTags(text){
    // console.log(text);
    const tags = text.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim());
    // console.log(tags); 
    tagsElements.innerHTML = '';

    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText = tag;
        tagsElements.appendChild(tagElement);
    });
}


function randomSelect(){
     const times = 50;

     const interval = setInterval(()=>{
            const randomTag = pickRandomTag();
            
            highLightTag(randomTag);

            setTimeout(()=>{
                unHighLightTag(randomTag);
            },100);
     },100);


     setTimeout(()=>{
        clearInterval(interval);

        setTimeout(()=>{
            const randomTag = pickRandomTag();
            highLightTag(randomTag);
        });

     },times*100);
};

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)] //math.random gives a random decimal      
};

function highLightTag(tag){
    tag.classList.add('highlight');
};

function unHighLightTag(tag){
    tag.classList.remove('highlight');
};
//<span class="tag">Choice 1</span>