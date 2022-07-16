document.querySelector('.search-box').addEventListener('click', () => {
    document.querySelector('.search').focus();
});
document.querySelector('.search').addEventListener('keypress', e => {
    if(e.key === 'Enter') {
        let val = document.querySelector('.search').value;
        val !== '' && alert(`Googling: ${val}...`);
    }
})