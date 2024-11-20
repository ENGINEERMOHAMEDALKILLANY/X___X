// script.js
const letters = document.querySelectorAll(".letter");
const letterDisplay = document.getElementById("letter-display");
const signImage = document.getElementById("sign-image");

// حدث عند النقر على أي حرف
letters.forEach(letter => {
    letter.addEventListener("click", () => {
        const selectedLetter = letter.getAttribute("data-letter");
        letterDisplay.textContent = selectedLetter;

        // تحديد صورة الإشارة
        signImage.src = 'signs/${selectedLetter}.png';
        signImage.alt =' إشارة الحرف ${selectedLetter}';
    });
});