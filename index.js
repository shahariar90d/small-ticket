const allBtn = document.getElementsByClassName('seat-btn');
let count = 0;
let seatsLeftCount = 40;
let totalPrice = 0;

const applyBtn = document.getElementById('apply');
for(let btn of allBtn){
    // console.log(btn);
    // seat count section
    
    btn.addEventListener('click', function(event){
        
        // you cannot select more than 4
        if(count >= 4){
            alert('You cannot selected more then 4 ticket')
            return;
        }