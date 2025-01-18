document.getElementById('togglePassword').addEventListener('click',function(){
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;

    //Cambiar el icono o texto del boton
    this.textContent = type === 'password' ? '👁' : 'pulpo';
});