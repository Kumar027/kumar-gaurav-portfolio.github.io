
const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(btn => {
    btn.addEventListener('click', () => {
        const body = btn.nextElementSibling;
        body.style.display = body.style.display === "block" ? "none" : "block";
    });
});
