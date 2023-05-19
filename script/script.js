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

// const parentDropdown = document.querySelectorAll(
//     ".navbar-btm-menu .nav-item"
// );

// parentDropdown.forEach((dropdownItem, i) => {
//     console.log(dropdownItem.lastElementChild)
//     dropdownItem.addEventListener("mouseover", () => {
//         dropdownItem.lastElementChild.style.display = "block"
//     });
//     dropdownItem.addEventListener("mouseout", () => {
//         dropdownItem.lastElementChild.style.display = "none"
//     });
// });

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown1 = document.getElementsByClassName("dropdown1-btn");
var i;

for (i = 0; i < dropdown1.length; i++) {
  dropdown1[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {    
      dropdownContent.style.display = "block";
    }
  });
}

