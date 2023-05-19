let f1 = document.forms.f1;

f1.move.addEventListener('click', () => {
    if (f1.source.value.length > 0) f1.dest.value = f1.source.value;
    f1.source.value = '';
})
f1.place.addEventListener('blur', (e) => {
    if (e.target.value.length > 0) e.target.placeholder = e.target.value;
    e.target.value = "";
})