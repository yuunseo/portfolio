// 버튼, 연락처 부분의 DOM 요소 불러오기
const emailBtn = document.getElementById('email-btn');
const githubBtn = document.getElementById('github-btn');
const contactInfo = document.getElementById('contact-info');

// 클릭 이벤트 발생 시, 
emailBtn.addEventListener('click', () => {
  contactInfo.style.display = 'block';
  contactInfo.innerHTML = `
     <p>
      <i class="fas fa-envelope"></i> 
      <a href="mailto:dbstj7457@naver.com">
        dbstj7457@naver.com
      </a>
    </p>
  `;
});

githubBtn.addEventListener('click', () => {
  contactInfo.style.display = 'block';
  contactInfo.innerHTML = `
    <p>
      <i class="fab fa-github"></i> 
      <a href="https://github.com/yuunseo" target="_blank" rel="noopener noreferrer">
        github.com/yuunseo
      </a>
    </p>
  `;
});

document.querySelectorAll('.project').forEach(p => {
  p.addEventListener('click', () => {
    window.location.href = 'projects.html';  
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.querySelector('.timeline');
  const items = document.querySelectorAll('.timeline-item');
  const mainSection = document.getElementById('main-section');

  window.addEventListener('scroll', () => {
    const mainBottom = mainSection.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // main-section 아래를 충분히 지나가면 타임라인 애니메이션 시작
    if (mainBottom < windowHeight * 0.5) {
      timeline.classList.add('active');

      // 각 타임라인 아이템에도 active 클래스 붙여서 개별 애니메이션 실행
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.3 + 0.3}s`; // 0.3초 간격으로 딜레이 설정
        item.classList.add('active');
    });

    }
  });
});


/* 마우스 갖다 대면 이미지 떠오르는 */
document.querySelectorAll('.timeline-item').forEach(item => {
  const text = item.querySelector('.project');
  const img = item.querySelector('.hover-image');

  if (text && img) {
    text.addEventListener('mouseenter', () => {
      img.classList.add('show');
    });
    text.addEventListener('mouseleave', () => {
      img.classList.remove('show');
    });
  }
});