const cuadrosEl = document.getElementById('cuadros');
const btn = document.getElementById('btnSaltar');
const res = document.getElementById('resultado');

let paso = 1;
const TOTAL = 5;

for (let i = 1; i <= TOTAL; i++) {
  const c = document.createElement('div');
  c.className = 'cuadro';
  c.textContent = i;
  c.id = 'cuadro' + i;
  cuadrosEl.appendChild(c);
}
document.getElementById('cuadro1').classList.add('activo');

btn.onclick = () => {
  if (Math.random() < 0.75) {
    document.getElementById('cuadro' + paso).classList.remove('activo');
    document.getElementById('cuadro' + paso).classList.add('completado');
    paso++;
    if (paso > TOTAL) {
      res.textContent = "🎉 ¡Completaste la rayuela!";
      btn.disabled = true;
    } else {
      document.getElementById('cuadro' + paso).classList.add('activo');
      res.textContent = `✅ Saltaste al cuadro ${paso}`;
    }
  } else {
    res.textContent = "❌ ¡Te saliste de la línea! Vuelve a empezar.";
    document.querySelectorAll('.cuadro').forEach(c => c.classList.remove('activo','completado'));
    paso = 1;
    document.getElementById('cuadro1').classList.add('activo');
  }
};