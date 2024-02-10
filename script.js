

document.getElementById('nav-toggle').addEventListener('click', function(){
    var navMenu = document.getElementById('nav-menu');
    if(navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
})

/* 平滑滚动到页面锚点 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});