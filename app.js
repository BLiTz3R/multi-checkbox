// Add event listeners
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));
const check = document.querySelector('.check');
const uncheck = document.querySelector('.uncheck');
check.addEventListener('click', checkAll);
uncheck.addEventListener('click', uncheckAll);

let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    // Check if shift pressed AND if checking the box
    if (e.shiftKey && this.checked) {
        // Loop over every single checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
};

// function checkAll() {
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].type == 'checkbox')
//         checkboxes[i].checked = true;
//     }
// }

// function uncheckAll() {
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].type == 'checkbox')
//         checkboxes[i].checked = false;
//     }
// }	

function checkAll() {
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
}

function uncheckAll() {
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}	