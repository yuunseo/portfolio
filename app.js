const emailBtn = document.getElementById('email-btn');
const githubBtn = document.getElementById('github-btn');
const contactInfo = document.getElementById('contact-info');

emailBtn.addEventListener('click', () => {
  // 이메일 연락처 보이게
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
  // 깃허브 연락처 보이게
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