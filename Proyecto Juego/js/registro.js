// Mostrar/ocultar contraseña
function togglePassword(id, icono) {
    const input = document.getElementById(id);
    if (input.type === 'password') {
        input.type = 'text';
        icono.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icono.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// Validación al enviar
document.getElementById('formRegistro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let valido = true;
    
    // Limpiar errores
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    // Nombre
    const nombre = document.getElementById('nombre').value.trim();
    if (nombre.length < 3) {
        document.getElementById('errorNombre').textContent = 
            'El nombre debe tener al menos 3 caracteres';
        valido = false;
    }
    
    // Email
    const email = document.getElementById('email').value.trim();
    const regexEmail = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    if (!regexEmail.test(email)) {
        document.getElementById('errorEmail').textContent = 
            'Ingresa un correo válido';
        valido = false;
    }
    
    // Contraseña
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('errorPassword').textContent = 
            'Mínimo 8 caracteres';
        valido = false;
    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/.test(password)) {
        document.getElementById('errorPassword').textContent = 
            'Debe tener mayúscula, minúscula y número';
        valido = false;
    }
    
    // Confirmar
    const confirmar = document.getElementById('confirmar').value;
    if (password !== confirmar) {
        document.getElementById('errorConfirmar').textContent = 
            'Las contraseñas no coinciden';
        valido = false;
    }
    
    // Si todo está bien
    if (valido) {
        document.getElementById('modalExito').classList.add('activo');
        this.reset();
    }
});

// Cerrar modal
function cerrarModal() {
    document.getElementById('modalExito').classList.remove('activo');
}