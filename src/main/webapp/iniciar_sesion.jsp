<%-- 
    Document   : iniciar_sesion
    Created on : 1 dic. 2024, 17:28:05
    Author     : alonz
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>iniciar</title>
    </head>
    <body>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Bienvenido de devuelta</title>
        <link rel="stylesheet" href="css/Styles.css" type="text/css"/>
    </head>
    <body>
    <body>
    <header class="r1">
        <div class="r1-1">
            <h1>AgendaPro</h1>
        </div>
        <ul class="r2">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="iniciar_sesion.jsp" class="activo">Iniciar sesión/Crear cuenta</a></li>
        </ul>
    </header>

    <!-- Contenedor Principal -->
    <main>
        <!-- Formulario de inicio de sesión -->
        <section id="r7">
            <div id="r7-1">
                <h2>Bienvenido de vuelta</h2>
                <p>Por favor, ingresa tus credenciales para continuar.</p>
                
              
                <form action="LoginServlet" method="POST">
                    <div class="input-group">
                        <label for="input1">Nombre y apellido:</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre completo" required>
                    </div>
                    <div class="input-group">
                        <label for="input2">Correo electrónico:</label>
                        <input type="email" id="email" name="email" placeholder="Ingrese su correo" required>
                    </div>
                    <div class="input-group">
                        <label for="input3">Contraseña:</label>
                        <input type="password" id="contrasena" name="contrasena" placeholder="Ingrese su contraseña" required>
                    </div>
                    <div style="display: flex; gap: 15px; justify-content: center; margin-top: 20px;">
                        <button type="submit" id="r7-b">Iniciar sesión</button>
                        <button id="r7-b-create" onclick="window.location.href='crear_cuenta.jsp'">Crear cuenta</button>
                    </div>
                </form>
            </div>
        </section>
    </main>

    <!-- Pie de Página -->
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2024 AgendaPro. Todos los derechos reservados.</p>
            <ul class="footer-links">
                <li><a href="politica.jsp">Política de privacidad</a></li>
                    <li><a href="terminos.jsp">Términos y condiciones</a></li>
                    <li><a href="contacto.jsp">Contacto</a></li>
            </ul>
        </div>
    </footer>
</body>
    </body>
</html>
