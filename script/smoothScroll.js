function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
    });
}