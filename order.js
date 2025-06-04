function selectTemplate(templateId) {
    alert("Επέλεξες το: " + templateId + ". Συμπλήρωσε τη φόρμα για να συνεχίσεις.");
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Τα στοιχεία υποβλήθηκαν! (Εδώ μπαίνει Firestore αποθήκευση)");
    // TODO: Add Firebase integration here
});



function previewTemplate(templateUrl) {
    window.open(templateUrl, '_blank');
}


function closeModal() {
    const modal = document.getElementById("previewModal");
    const iframe = document.getElementById("previewFrame");
    iframe.src = ""; // clear src
    modal.style.display = "none";
}
