function addToCart(templateId) {
  sessionStorage.setItem('selectedTemplate', templateId);

  const displayField = document.getElementById("selectedDisplay");

  const templateKey = `${templateId}_name`; // π.χ. template1_name
  const templateName = translations[templateKey] || "κάποιο σχέδιο";

  const messageTemplate = translations.template_selected || "✔️ Έχεις επιλέξει __TEMPLATE__.";
  const finalMessage = messageTemplate.replace("__TEMPLATE__", templateName);

  displayField.textContent = finalMessage;

  const hiddenInput = document.getElementById("selected_template");
  hiddenInput.value = templateId;
}



function previewTemplate(templateUrl) {
  window.open(templateUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function () {
    const selectedTemplate = sessionStorage.getItem('selectedTemplate');
    if (selectedTemplate) {
      document.getElementById("selected_template").value = selectedTemplate;
    }
  });

  document.querySelectorAll(".template-card").forEach(card => {
    card.addEventListener("click", function (e) {
      if (e.target.tagName === "BUTTON") return;
      const url = card.getAttribute("data-template-url");
      if (url) window.open(url, "_blank");
    });
  });
});



function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}