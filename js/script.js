// this javascript
const toggleBtn =document.querySelector('.toggle_btn')
const toggleBtnIcon =document.querySelector('.toggle_btn i')
        const dropdownmenu =document.querySelector('.dropdown_menu')

        toggleBtn.onclick =function () {
            dropdownmenu.classList.toogle('open')
            const isOpen =dropdownmenu.classList.contains('open')

            toggleBtnIcon.classList= isOpen
            ? 'fa-solid fa-xmark'
            :'fa-solid fa-bars'
        }