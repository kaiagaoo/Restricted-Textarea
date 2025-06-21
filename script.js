const textarea = document.getElementById('messageBox');
const counter = document.getElementById('charCount');
const maxLength = 250;

textarea.addEventListener('input', () => {
    let text = textarea.value;

    if (text.length > maxLength) {
        text = text.slice(0, maxLength);
        textarea.value = text;
    }

    counter.textContent = `${text.length}/${maxLength}`;

    if (text.length >= maxLength) {
        textarea.classList.add('limit-reached');
    } else {
        textarea.classList.remove('limit-reached'); 
    }
        

});