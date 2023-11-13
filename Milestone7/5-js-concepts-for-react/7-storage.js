const addToLocalStorage = () => {
    const inputId = document.getElementById('storage-id');
    const id = inputId.value;

    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    if(id && value){
        localStorage.setItem(id, value);
    }

    inputId.value = '';
    valueInput.value = '';
}