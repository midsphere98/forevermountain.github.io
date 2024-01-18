// page progress-bar
console.log('script loaded');

const progressBar = document.querySelector('.progress_bar');

let scrollTop, totalPageY, currPercent;

window.addEventListener('scroll', function (e) {
    // 스크롤한 높이
    scrollTop = document.documentElement.scrollTop;
    // 전체 페이지 높이 - 사용자 페이지 높이 
    totalPageY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    currPercent = scrollTop / totalPageY;

    // 프로그래스바
    progressBar.style.width = currPercent * 100 + '%';
});

// animation
AOS.init({
            duration: 800,
            easeing: 'ease-in-out',
        });


// slide
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 3000,
  },
});

const imgA = document.querySelector('#mainImg');
const imgSlides = document.querySelectorAll('.main_img');

function reSizing() {
    const aWidth = imgA.offsetWidth; 
    const aHeight = imgA.offsetHeight; 
    
    imgSlides.forEach(element => {
        if (element.id !== 'mainImg') {
            element.style.width = aWidth + 'px';
            element.style.height = aHeight + 'px';
        }
    });
}
window.addEventListener('resize', reSizing);

// 초기 실행
reSizing();