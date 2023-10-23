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
            interestedCompany.innerHTML = 'followed!';
        }
        isFollowed = !isFollowed; // 상태를 토글
    }

    // 초기 버튼 표시
    toggleFollow();

    // 클릭 이벤트를 추가하여 버튼 내용 변경 및 상태 변경
    interestedCompany.addEventListener("click", toggleFollow);
});

document.addEventListener("DOMContentLoaded", function() {
    // "스크랩" 버튼을 가져옴
    const saveButton = document.getElementById("save");
    let isSaved = false; // 초기에는 클릭되지 않은 상태

    function toggleSave() {
        if (!isSaved) {
            saveButton.innerHTML = '<i class="bi bi-star me-2"></i>스크랩';
        } else {
            saveButton.innerHTML = '<i class="bi bi-star-fill me-2"></i>Saved!';
        }
        isSaved = !isSaved; // 상태를 토글
    }

    // 초기 버튼 표시
    toggleSave();

    // 클릭 이벤트를 추가하여 버튼 내용 변경 및 상태 변경
    saveButton.addEventListener("click", toggleSave);
});