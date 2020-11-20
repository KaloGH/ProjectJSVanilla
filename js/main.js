import { pageLoader } from './startLoader.js';

function changeBGStyle() {
    document.body.innerHTML = '';
    //loader.remove();
    
    //document.body.style.backgroundColor = "#f0efef";
}

function getLoginAnimations() {

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');


    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });


    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

}

function showLogin() {
    const contenidoLogin = `
    <div id="loginBody">
    <span class="brandLogin">Krypto Koin</span>
    <div class="loginContainer" id="container">
    <div class="form-container sign-up-container">
    <form action="#">
    <h1 class="loginH1">Crear Cuenta</h1>
    <input type="text" placeholder="Nombre y Apellidos" name="nombre">
    <input type="text" placeholder="Username" name="username">
    <input type="email" placeholder="Correo Electronico" name="email">
    <input type="password" placeholder="Contraseña" name="passwd">
    <button class="loginButton">Registrar</button>
    </form>
    </div>
    <div class="form-container sign-in-container">
    <form action="#">
    <h1 class="loginH1">Iniciar Sesion</h1>
    <input type="email" placeholder="Correo Electronico" name="email">
    <input type="password" placeholder="Contraseña" name="passwd">
    <button class="loginButton">Iniciar</button>
    </form>
    </div>
    <div class="overlay-container">
    <div class="overlay">
    <div class="overlay-panel overlay-left">
    <h1 class="loginH1">Bienvenido de nuevo</h1>
    <p>Para mantenerte conectado, porfavor inicie sesion.</p>
    <button class="loginButton ghost" id="signIn">Iniciar Sesion</button>
    </div>
    <div class="overlay-panel overlay-right">
    <h1 class="loginH1">Bienvenido Amigo</h1>
    <p>Registrate para disfrutar de Krypto Koin.</p>
    <button class="loginButton ghost" id="signUp">Registrate</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    <script src="main.js"></script>
    <script src="https://unpkg.com/ionicons@4.2.2/dist/ionicons.js"></script>`;
    
    document.body.innerHTML = contenidoLogin;
    $('#container').fadeOut(0);
    $('#container').fadeIn("slow");
    
    
}

document.addEventListener('DOMContentLoaded', () => {
    
    
    pageLoader()
        .then(() => {
            
            changeBGStyle();
            
        })
        .then(() => {
            
            showLogin();
            getLoginAnimations();
            
        });


});
