let click_example = document.getElementById('onclick-example');
let mouseover_example = document.getElementById('mouseover-example');
let mouseout_example = document.getElementById('mouseout-example');
let key_example = document.getElementById('key-example');

click_example.addEventListener('click', () => {
        console.log('hi');
        click_example.style.color = 'blue';
        click_example.innerText = 'I\'m blue!';

    })

mouseover_example.addEventListener('mouseover', () => {
        mouseover_example.style.transition = 'opacity 2s';
        mouseover_example.style.opacity = 0;
})

mouseover_example.addEventListener('mouseout', () => {
        // mouseover_example.style.transition = 'opacity 2s';
        mouseover_example.style.opacity = 1;
})

// key_example.addEventListener('keyup', () => {
//     key_example.innerText = 'UP';
// })

// key_example.addEventListener('keydown', () => {
//     key_example.innerText = 'DOWN';
// })








// Functions

let a_input = document.getElementById('a-input');
let b_input = document.getElementById('b-input');
let sum_answer = document.getElementById('function-sum-example');

const sum = (a, b) => a + b;

function sumSubmitted() {
    let answer = sum(Number(a_input.value), Number(b_input.value));
    // console.log(answer)
    sum_answer.innerText = answer;

}

