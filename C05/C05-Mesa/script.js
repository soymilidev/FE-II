/* function darkTheme() {
    document.querySelector('body').classList.toggle('dark')
};
 */

const switcher = document.querySelector('.btn');
console.log(switcher);

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    

    let className = document.body.className;
    if (className == "light") {
        this.textContent = "Modo claro";
    }
    else {
        this.textContent = "Modo oscuro";
    }
});