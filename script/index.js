const p1 = document.querySelector('.p1')
p1.addEventListener('click',() => {
    alert('Hello World !')
})

const p2 = document.querySelector('.p2')
p2.addEventListener('click',() => {
    alert('Hello World !')
})
const p3 = document.querySelector('.p3')
p3.addEventListener('click',()=>{
    p1.style.backgroundColor = 'black'
    alert('ZDAROVA BRATVAAAAAAAAAA')
})
const list = document.querySelectorAll('li')
list.forEach(item=>{
    item.addEventListener('mouseenter',(ev)=>{
        const x = Math.floor(Math.random() * 256);
        const y = Math.floor(Math.random() * 256);
        const z = Math.floor(Math.random() * 256);
        const bgColor = "rgb(" + x + "," + y + "," + z + ")";
        ev.target.style.backgroundColor = bgColor
    })
})


