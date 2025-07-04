let currentLang = 'ar';
let translations = {};

document.addEventListener('DOMContentLoaded', () => {
  loadLanguage(currentLang);

  document.getElementById('language-switcher').addEventListener('change', (e) => {
    currentLang = e.target.value;
    loadLanguage(currentLang);
  });
});

function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      translations = data;
      updateTexts();
    });
}

function updateTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.innerText = translations[key];
    }
  });
}

function showStats() {
  alert('📊 سيتم عرض الإحصائيات هنا.');
}

function showAutoReply() {
  alert('💬 هذه ميزة الرد التلقائي.');
}
