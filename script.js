// ===============================
// FLOWAI MAIN SCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // 1. FAQ ACCORDION
    // =========================
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });


    // =========================
    // 2. AI DEMO GENERATOR
    // =========================
    const generateBtn = document.getElementById("generateBtn");
    const promptInput = document.getElementById("prompt");
    const resultBox = document.getElementById("result");

    if (generateBtn) {
        generateBtn.addEventListener("click", () => {

            const prompt = promptInput.value.trim();

            if (prompt === "") {
                resultBox.innerText = "Please enter a prompt first.";
                return;
            }

            // Fake AI response (demo purpose)
            resultBox.innerText = "Generating...";

            setTimeout(() => {
                resultBox.innerText =
                    "✨ AI Response:\n\n" +
                    "Based on your prompt: \"" + prompt + "\"\n\n" +
                    "AI-generated content is here. This is a demo output showing how your assistant will respond in real version.";
            }, 1200);
        });
    }


    // =========================
    // 3. CONTACT FORM
    // =========================
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            alert("Message sent successfully! We will contact you soon.");

            contactForm.reset();
        });
    }


    // =========================
    // 4. NAV ACTIVE LINK (optional)
    // =========================
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

});