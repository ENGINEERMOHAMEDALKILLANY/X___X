// تشغيل الصوت عند الضغط على الزر
function playAudio(id) {
    const audio = document.getElementById(id);
    if (audio) {
        audio.play();
    }
}