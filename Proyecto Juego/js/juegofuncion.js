// ===== BOTÓN REGRESAR =====
document.getElementById('btnRegresar').addEventListener('click', () => {
    if (history.length > 1) {
        history.back();
    } else {
        window.location.href = 'index.html';
    }
});