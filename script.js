// 🟦 تابع باز و بسته کردن منوی موبایل
function toggleMenu() {
  const menu = document.getElementById('nav-links');
  menu.classList.toggle('show'); // وقتی کلیک شد، کلاس show اضافه یا حذف میشه
}

// 🟦 وقتی کل صفحه بارگذاری شد
document.addEventListener('DOMContentLoaded', function () {
  // فعال‌سازی AOS (انیمیشن اسکرول)
  AOS.init({
    duration: 1000,   // مدت زمان انیمیشن (میلی‌ثانیه)
    easing: 'ease-in-out', // حالت حرکت انیمیشن
    once: true        // فقط یک بار انیمیشن اجرا بشه
  });
});
