// set initial count
let count = 0;

// select valur and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrese")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count=0;
        }
        value.textContent = count;
    });
});