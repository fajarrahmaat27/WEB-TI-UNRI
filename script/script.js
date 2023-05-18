const hamburgerBtn = document.querySelector(".toggle .menu-btn")
const closeBtn = document.querySelector(".toggle .close-btn")
const menu = document.getElementsByClassName("sidebarmobile")[0]

function handleMenu() {
    menu.style.left = "-100vw"
    hamburgerBtn.addEventListener("click", () => {
        menu.style.left = "0"
        closeBtn.style.display = "block"
        hamburgerBtn.style.display = "none"
    })

    closeBtn.addEventListener("click", () => {
        menu.style.left = "-100vw"
        closeBtn.style.display = "none"
        hamburgerBtn.style.display = "block"
    })
}

handleMenu()

const parentDropdown = document.querySelectorAll(
    ".navbar-btm-menu .nav-item"
);

parentDropdown.forEach((dropdownItem, i) => {
    console.log(dropdownItem.lastElementChild)
    dropdownItem.addEventListener("mouseover", () => {
        dropdownItem.lastElementChild.style.display = "flex"
    });
    dropdownItem.addEventListener("mouseout", () => {
        dropdownItem.lastElementChild.style.display = "none"
    });
});