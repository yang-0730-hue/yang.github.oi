// 當頁面滾動時改變導航欄樣式
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// 平滑滾動到錨點
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 添加頁面載入動畫
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});

// 添加課程卡片動畫
const courseCards = document.querySelectorAll('.course-card');
const awardItems = document.querySelectorAll('.award-item');

// 使用Intersection Observer API來檢測元素是否在視口中
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// 觀察所有課程卡片和獎項
courseCards.forEach(card => {
    observer.observe(card);
});

awardItems.forEach(item => {
    observer.observe(item);
});
