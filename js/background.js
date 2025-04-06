(() => {
  const apiKey = "v0JoaSJSIKdLPDKadC6Vdf0zfmeTRjhxY0lFSOGHxgBMgH6dpSJ97NTW"; // 실제 API 키로 교체
  const maxPage = 100; // 최대 페이지 수 (필요에 따라 조정)
  const randomPage = Math.floor(Math.random() * maxPage) + 1;
  const perPage = 1; // 한 번에 1장의 사진만 요청
  
  // curated 엔드포인트를 사용하여 사진 요청
  const apiUrl = `https://api.pexels.com/v1/curated?per_page=${perPage}&page=${randomPage}`;
  
  fetch(apiUrl, {
    headers: {
      Authorization: apiKey
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("API 응답 데이터:", data);
      if (data.photos && data.photos.length > 0) {
        const photoUrl = data.photos[0].src.landscape;
        document.body.style.backgroundImage = `url(${photoUrl})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
      }
    })
    .catch(error => {
      console.error("랜덤 사진을 가져오는 중 오류 발생:", error);
    });
})();
