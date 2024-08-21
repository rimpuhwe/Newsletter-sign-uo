const setupBoard = document.getElementById('setup');
const messageBoard = document.getElementById('message');
const userEmail = document.querySelector("input[type='email']");
const subscribeBtn = document.getElementById('subscription-btn');
const bolder = document.getElementById('bolder');
const exitBtn =document.getElementById('dismisal-btn');

function work(){
    if(userEmail.value === ''){
        alert('enter a valid email');
    }
    else{
        setupBoard.style.display = 'none';
        messageBoard.innerHTML = `
         <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
        <div class="space"></div>
        <div id="Thanks-mgs">
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span><strong>${userEmail.value}</strong></span>. Please open it and click the button inside to confirm your subscription</p>
        </div>
        <div class="space"></div>
        <div>
            <button id="dismisal-btn" class="btn">Dismiss message</button>
        </div>`;
        messageBoard.classList.remove('hidden');
    }
    
}
function exit(){
    messageBoard.classList.add('hidden');
    setupBoard.style.display = 'block';
}
subscribeBtn.addEventListener('click', work);
exitBtn.addEventListener('click', exit);
