document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        document.body.style.opacity = 0;
        setTimeout(() => {
            window.location = this.href;
        }, 300);
    });
});

window.onload = () => {
    document.body.style.opacity = 1;
};
