let currentLang = 'el';

async function setLanguage(lang) {
  currentLang = lang;

  try {
    const res = await fetch('lang.json');
    const translations = await res.json();
    const t = translations[lang];

    // Ενημέρωση περιεχομένου
    document.querySelector('header h1').textContent = t.title;
    document.querySelector('header p').textContent = t.subtitle;
    document.querySelector('#how-it-works h2').textContent = t.how_it_works;
    document.querySelector('#how-it-works p').textContent = t.how_it_works_desc;
    document.querySelector('#templates h2').textContent = t.select_template;
    document.querySelector('#selectedDisplay').textContent = t.no_template;
    document.querySelector('#form h2').textContent = t.form_title;
    document.querySelector('#orderForm button').textContent = t.submit;
    document.querySelector('#chatbot-header').textContent = t.chatbot_header;
    document.querySelector('#chatbot-content p').textContent = t.chatbot_msg;
    document.getElementById("nav-home").textContent = t.nav_home;
    document.getElementById("nav-templates").textContent = t.nav_templates;
    document.getElementById("nav-form").textContent = t.nav_form;

    document.getElementById("chatbot-open").textContent = t.chatbot_open;
    document.getElementById("chatbot-title").textContent = t.chatbot_title;
    document.getElementById("chatbot-msg").textContent = t.chatbot_msg;
    document.getElementById("chatbot-yes").textContent = t.chatbot_yes;

    document.getElementById("form-name").placeholder = t.form_name;
    document.getElementById("form-email").placeholder = t.form_email;
    document.getElementById("form-age").placeholder = t.form_age;
    document.getElementById("form-bio").placeholder = t.form_bio;
    document.getElementById("form-purpose").placeholder = t.form_purpose;
    document.getElementById("form-submit").textContent = t.form_submit;



  } catch (err) {
    console.error("⚠️ Σφάλμα στη φόρτωση μεταφράσεων:", err);
  }
}

// 🔁 Συνάρτηση που συνδέεται με το toggle input
function toggleLanguage() {
  const checkbox = document.getElementById('langSwitch');
  const lang = checkbox.checked ? 'en' : 'el';
  setLanguage(lang);
}

// 🌐 Φόρτωσε αρχικά ελληνικά
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('el');
});
