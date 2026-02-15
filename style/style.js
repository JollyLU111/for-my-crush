const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// 1. Xử lý nút Không chạy trốn
noBtn.addEventListener('mouseover', () => {
    // Tính toán vị trí ngẫu nhiên trong phạm vi màn hình
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));
    
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// 2. Xử lý khi ấn nút Có
yesBtn.addEventListener('click', () => {
    alert("❤️");
    // Hoặc đổi nội dung câu hỏi
    document.getElementById('question').innerHTML = "Love youuuu! ❤️";
    document.getElementById('gif').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueXF4eXF4eXF4&ep=v1_gifs_search&rid=giphy.gif";
});
