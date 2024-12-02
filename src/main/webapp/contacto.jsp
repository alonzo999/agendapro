<%-- 
    Document   : contacto
    Created on : 1 dic. 2024, 14:29:14
    Author     : alonz
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>contacto</title>
        <link rel="stylesheet" href="css/Styles.css">
         <style>
            .content {
                margin: 50px auto;
                width: 80%;
                padding: 20px;
                border: 2px solid #0056b3;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                background-color: #ffffff;
                line-height: 1.8;
                font-size: 1.1em;
                color: #333;
            }
            .content h2 {
                color: #0056b3;
                margin-bottom: 20px;
                text-align: center;
            }
            .input-group {
                margin-bottom: 15px;
            }
            .input-group label {
                display: block;
                font-weight: bold;
                margin-bottom: 5px;
            }
            .input-group input,
            .input-group textarea {
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 1em;
            }
            .input-group button {
                background-color: #0056b3;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1em;
            }
            .input-group button:hover {
                background-color: #003d80;
            }
            .status-message {
                text-align: center;
                margin-top: 20px;
            }
            .status-message.success {
                color: green;
            }
            .status-message.error {
                color: red;
            }
        </style>
    </head>
    <body>
         <div class="r1">
        <div class="r1-1">
            <h1>AgendaPro - Contacto</h1>
        </div>
        <ul class="r2">
            <li><a href="index.html">Inicio</a></li>
        </ul>
    </div>
        <main>
        <div class="content">
                <h2>Contáctanos</h2>
                <form action="contactoServlet" method="POST">
                    <div class="input-group">
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required>
                    </div>
                    <div class="input-group">
                        <label for="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="input-group">
                        <label for="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
                    </div>
                    <div class="input-group">
                        <button type="submit">Enviar Mensaje</button>
                    </div>
                </form>

                <!-- Mensaje de estado -->
                <div class="status-message">
                    <% String status = request.getParameter("status"); %>
                    <% if ("success".equals(status)) { %>
                        <p class="success">¡Tu mensaje ha sido enviado exitosamente!</p>
                    <% } else if ("error".equals(status)) { %>
                        <p class="error">Ocurrió un error al enviar tu mensaje. Por favor, inténtalo nuevamente.</p>
                    <% } %>
                </div>
            </div>
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
