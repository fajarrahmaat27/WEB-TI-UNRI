const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);



// foto kedua
const carousel1 = document.querySelector(".carousel1"),
firstimg1 = carousel1.querySelectorAll("img")[0],
arrowicons1 = document.querySelectorAll(".wrapper1 i");

let isdragstart1 = false, isdragging1 = false, prevpagex1, prevScrollLeft1, positionDiff1;

const showHideIcons1 = () => {
    // showing and hiding prev/next icon according to carousel1 scroll left value
    let scrollwidth1 = carousel1.scrollwidth1 - carousel1.clientWidth; // getting max scrollable width
    arrowicons1[0].style.display = carousel1.scrollLeft == 0 ? "none" : "block";
    arrowicons1[1].style.display = carousel1.scrollLeft == scrollwidth1 ? "none" : "block";
}

arrowicons1.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstimg1Width = firstimg1.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel1 scroll left else add to it
        carousel1.scrollLeft += icon.id == "left1" ? -firstimg1Width : firstimg1Width;
        setTimeout(() => showHideIcons1(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide1 = () => {
    // if there is no image left to scroll then return from here
    if(carousel1.scrollLeft - (carousel1.scrollwidth1 - carousel1.clientWidth) > -1 || carousel1.scrollLeft <= 0) return;

    positionDiff1 = Math.abs(positionDiff1); // making positionDiff1 value to positive
    let firstimg1Width = firstimg1.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel1 left to take middle img center
    let valDifference1 = firstimg1Width - positionDiff1;

    if(carousel1.scrollLeft > prevScrollLeft1) { // if user is scrolling to the right
        return carousel1.scrollLeft += positionDiff1 > firstimg1Width / 3 ? valDifference1 : -positionDiff1;
    }
    // if user is scrolling to the left
    carousel1.scrollLeft -= positionDiff1 > firstimg1Width / 3 ? valDifference1 : -positionDiff1;
}

const dragStart1 = (e) => {
    // updatating global variables value on mouse down event
    isdragstart1 = true;
    prevpagex1 = e.pageX || e.touches[0].pageX;
    prevScrollLeft1 = carousel1.scrollLeft;
}

const dragging1 = (e) => {
    // scrolling images/carousel1 to left according to mouse pointer
    if(!isdragstart1) return;
    e.preventDefault();
    isdragging1 = true;
    carousel1.classList.add("dragging");
    positionDiff1 = (e.pageX || e.touches[0].pageX) - prevpagex1;
    carousel1.scrollLeft = prevScrollLeft1 - positionDiff1;
    showHideIcons1();
}

const dragStop1 = () => {
    isdragstart1 = false;
    carousel1.classList.remove("dragging");

    if(!isdragging1) return;
    isdragging1 = false;
    autoSlide1();
}

carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("touchstart", dragStart1);

document.addEventListener("mousemove", dragging1);
carousel1.addEventListener("touchmove", dragging1);

document.addEventListener("mouseup", dragStop1);
carousel1.addEventListener("touchend", dragStop1);