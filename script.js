function downloadResume() {
    const element = document.getElementById("resume");
    const opt = {
        margin: 10,
        filename: "Sachin_Bhawar_Frontend_Developer_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Show loading indicator
    const btn = document.querySelector(".download-btn");
    btn.textContent = "Generating PDF...";
    btn.disabled = true;

    // Generate PDF
    html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
            // Reset button after generation completes
            btn.textContent = "Download as PDF";
            btn.disabled = false;
        });
}
