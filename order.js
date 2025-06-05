// Χρήστης επέλεξε template
  function addToCart(templateId) {
    sessionStorage.setItem('selectedTemplate', templateId);

    const displayField = document.getElementById("selectedDisplay");
    displayField.textContent = "Επέλεξες το: " + templateId;

    const hiddenInput = document.getElementById("selected_template");
    hiddenInput.value = templateId;
  }

  // Preview
  function previewTemplate(templateUrl) {
    window.open(templateUrl, '_blank');
  }

  // Set selected template before form submission
  document.querySelector("form").addEventListener("submit", function (e) {
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
