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

// 獎項下拉選單功能
document.addEventListener('DOMContentLoaded', function() {
    const awardToggles = document.querySelectorAll('.award-toggle');
    
    awardToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // 獲取對應的下拉內容ID
            const awardId = this.getAttribute('data-award');
            const dropdown = document.getElementById(awardId);
            
            // 切換當前下拉選單的顯示狀態
            this.classList.toggle('active');
            dropdown.classList.toggle('active');
            
            // 關閉其他打開的下拉選單
            awardToggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    const otherId = otherToggle.getAttribute('data-award');
                    const otherDropdown = document.getElementById(otherId);
                    
                    if (otherToggle.classList.contains('active')) {
                        otherToggle.classList.remove('active');
                        otherDropdown.classList.remove('active');
                    }
                }
            });
        });
    });
});