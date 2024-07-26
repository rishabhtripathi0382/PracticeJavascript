const colors = ['green', 'yellow', 'grey', 'rgba(133,122,200)'];

const btn = document.getElementById('btn');
const mycolors = document.querySelector('.mycolors');

btn.addEventListener('click', function(){
    const random_number = getRandomNumber();
    console.log(random_number);
    document.body.style.backgroundColor = colors[random_number];
    mycolors.textContent = colors[random_number];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}