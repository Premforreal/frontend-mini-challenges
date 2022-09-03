const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messeges =[   'Messege One',
                    'Messege Two',
                    'Messege Three',
                    'Messege Four']
const types = [
    'info','success','error'
]

button.addEventListener('click',()=>createNotification(/*'this is invalid data!','success'*/))

function createNotification(messege = null,type = null){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type: getRandomType())

    notif.innerText = messege ? messege : getRandomMessege()
    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },3000)
}


function getRandomMessege(){
    return messeges[Math.floor(Math.random()*messeges.length)]
}


function getRandomType(){
    return types[Math.floor(Math.random()*types.length)]
}