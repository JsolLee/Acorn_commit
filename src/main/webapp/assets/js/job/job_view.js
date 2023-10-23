document.addEventListener("DOMContentLoaded", function() {
    // interested_company 요소를 가져옴
    const interestedCompany = document.getElementById("interested_company");
    let isFollowed = false; // 초기에는 클릭되지 않은 상태

    // 마우스가 요소 위에 올라갔을 때 아이콘 변경
    interestedCompany.addEventListener("mouseover", function() {
        if (!isFollowed) {
            interestedCompany.innerHTML = '<i class="bi bi-heart-fill me-2"></i>관심 기업';
        }
    });

    // 마우스가 요소에서 벗어났을 때 아이콘 변경
    interestedCompany.addEventListener("mouseout", function() {
        if (!isFollowed) {
            interestedCompany.innerHTML = '<i class="bi bi-heart me-2"></i>관심 기업';
        }
    });

    function toggleFollow() {
        if (isFollowed) {
            interestedCompany.innerHTML = '<i class="bi bi-heart me-2"></i>관심 기업';
        } else {
            interestedCompany.innerHTML = '<i class="bi bi-heart-fill me-2"></i>followed!';
        }
        isFollowed = !isFollowed; // 상태를 토글
    }

    // 초기 버튼 표시
    toggleFollow();

    // 클릭 이벤트를 추가하여 버튼 내용 변경 및 상태 변경
    interestedCompany.addEventListener("click", toggleFollow);
});

document.addEventListener('DOMContentLoaded', function () {
    var copyButton = document.getElementById('copy');
    var cardText = document.querySelector('.card-text');

    if (copyButton && cardText) {
        copyButton.addEventListener('click', function () {
            // 선택 영역을 만들고 텍스트를 복사
            var range = document.createRange();
            range.selectNode(cardText);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);

            try {
                // 복사 명령 실행
                document.execCommand('copy');
                alert('텍스트가 클립보드에 복사되었습니다.');
            } catch (err) {
                console.error('텍스트 복사 중 오류가 발생했습니다: ', err);
            }

            // 선택 영역 제거
            window.getSelection().removeAllRanges();
        });
    }
});