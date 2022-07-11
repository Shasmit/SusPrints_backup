const selectType = document.querySelector('.onSelect');

function getInput(el){
    const option = el.value;
    if (option == 'Most Selling Collection'){
        selectType.style.display = 'block';
    }
    else{
        selectType.style.display = 'none';
    }
}
//Expected output: hello
