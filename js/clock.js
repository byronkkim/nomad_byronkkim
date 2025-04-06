function updateClock() {
  const now = new Date();
  // 시, 분, 초를 두 자리로 표시
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// 시계 업데이트: 1초마다 updateClock 함수를 호출
setInterval(updateClock, 1000);
// 페이지가 로드될 때 바로 시계를 업데이트
updateClock();