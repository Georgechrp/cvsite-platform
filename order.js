document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Τα στοιχεία υποβλήθηκαν! (Εδώ μπαίνει Firestore αποθήκευση)");
    // TODO: Add Firebase integration here
});



function previewTemplate(templateUrl) {
    window.open(templateUrl, '_blank');
}

document.querySelector("form").addEventListener("submit", function(e) {
    const selectedTemplate = sessionStorage.getItem('selectedTemplate');
    if (selectedTemplate) {
        document.getElementById("selected_template").value = selectedTemplate;
    }
});



function addToCart(templateId) {
    sessionStorage.setItem('selectedTemplate', templateId);

    const displayField = document.getElementById("selectedDisplay");
    displayField.textContent = "Επέλεξες το: " + templateId;

    const hiddenInput = document.getElementById("selected_template");
    hiddenInput.value = templateId;

    alert("Προστέθηκε στο καλάθι το: " + templateId + ". Μπορείς να συνεχίσεις με τη φόρμα.");
}

function previewTemplate(templateUrl) {
    window.open(templateUrl, '_blank');
}

function closeModal() {
    const modal = document.getElementById("previewModal");
    const iframe = document.getElementById("previewFrame");
    iframe.src = "";
    modal.style.display = "none";
}
