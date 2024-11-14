'use strict';
// write code here
const inputs = document.querySelectorAll('form input');
inputs.forEach((input)=>{
    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', input.id);
    const labelText = input.name.toUpperCase();
    label.textContent = labelText;
    input.setAttribute('placeholder', labelText);
    input.parentNode.insertBefore(label, input);
});

//# sourceMappingURL=index.f75de5e1.js.map
