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

