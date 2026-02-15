const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const musicLove = document.querySelector('#music-love');

// Mẹo lách luật: Nhạc sẽ phát ngay khi bro click vào bất kỳ đâu trên trang
document.body.addEventListener('click', () => {
    // Chỉ phát nếu nhạc đang dừng (để tránh bị lặp âm thanh khi click nhiều lần)
    if (musicLove.paused) {
        musicLove.play();
    }
}, { once: true }); // "once: true" giúp lệnh này chỉ chạy duy nhất 1 lần đầu tiên

// Logic nút "Không" chạy trốn
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Khi nhấn nút "Có"
yesBtn.addEventListener('click', () => {
    alert("Tớ biết ngay mà! 🥰");
    // Có thể chuyển hướng sang một trang web khác hoặc đổi nhạc tại đây
});
