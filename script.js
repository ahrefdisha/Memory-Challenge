// Pehle sab cards open dikhao
for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item boxOpen'; // 👈 yeh change kara
    box.innerHTML = shuf_emojis[i];

    // onclick handler same hi rahega...
    box.onclick = function() {
        if (this.classList.contains('boxMatch') || this.classList.contains('boxOpen')) {
            return;
        }
        
        this.classList.add('boxOpen');
        
        setTimeout(function() {
            let openBoxes = document.querySelectorAll('.boxOpen');
            if (openBoxes.length > 1) {
                if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                    openBoxes[0].classList.add('boxMatch');
                    openBoxes[1].classList.add('boxMatch');
                    openBoxes[0].classList.remove('boxOpen');
                    openBoxes[1].classList.remove('boxOpen');

                    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                        alert('You win!');
                    }
                } else {
                    openBoxes[0].classList.remove('boxOpen');
                    openBoxes[1].classList.remove('boxOpen');
                }
            }
        }, 500);
    }

    document.querySelector(".game").appendChild(box);
}

// 👇 Add this after loop — hide all cards after 5 seconds
setTimeout(() => {
    let allItems = document.querySelectorAll('.item');
    allItems.forEach(item => {
        item.classList.remove('boxOpen');
    });
}, 5000); // 5 seconds
