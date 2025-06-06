function addToCart(templateId) {
  sessionStorage.setItem('selectedTemplate', templateId);

  const displayField = document.getElementById("selectedDisplay");
  const templateNames = {
    template1: "το πρώτο σχέδιο",
    template2: "το δεύτερο σχέδιο",
    template3: "το τρίτο σχέδιο"
  };

  const userFriendlyName = templateNames[templateId] || "κάποιο σχέδιο";
  displayField.textContent = `✔️ Έχεις επιλέξει ${userFriendlyName}.`;

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