<%-- 
    Document   : crear_cuenta
    Created on : 1 dic. 2024, 12:27:38
    Author     : alonz
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Crear Cuenta</title>
        <link rel="stylesheet" href="css/Styles.css" type="text/css">
        <script>
        function showAlert(message, type) {
            alert(`${type.toUpperCase()}: ${message}`);
        }
    </script>
    </head>
    <body>
        <header class="r1">
        <div class="r1-1">
            <h1>AgendaPro - Crear Cuenta</h1>
        </div>
        <ul class="r2">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="iniciar_sesion.jsp" class="activo">Iniciar sesión/Crear cuenta</a></li>
        </ul>
    </header>
 <%-- Mostrar alertas según el estado --%>
    <% String status = request.getParameter("status"); %>
    <% if ("success".equals(status)) { %>
        <script>
            showAlert("Cuenta creada exitosamente.", "éxito");
        </script>
    <% } else if ("error".equals(status)) { %>
        <script>
            showAlert("Error al guardar los datos. Por favor, inténtelo de nuevo.", "error");
        </script>
    <% } %>

        <main>
            <section id="r7">
            <div id="r7-1">
                <h2>Crea tu cuenta</h2>
                <p>Por favor, completa los campos para registrarte.</p>

                <form action="Registerservlet" method="POST" style="width: 100%;">
                    <div class="input-group">
                        <label for="nombre">Nombre y Apellido:</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre completo" required>
                    </div>
                    
                    <div class="input-group">
                        <label for="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" placeholder="Ingrese su correo electrónico" required>
                    </div>
                    
                    <div class="input-group">
                        <label for="contrasena">Contraseña:</label>
                        <input type="password" id="contrasena" name="contrasena" placeholder="Ingrese su contraseña" required>
                    </div>

                    <div style="display: flex; gap: 15px; justify-content: center; margin-top: 20px;">
                        <button type="submit" id="r7-b">Crear Cuenta</button>
                    </div>
                </form>

                <p style="margin-top: 20px;">¿Ya tienes una cuenta? <a href="iniciar sesión.jsp">Inicia sesión aquí</a></p>
            </div>
                </section>
        </main>
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
</html>
