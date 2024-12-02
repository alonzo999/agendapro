<%-- 
    Document   : politica
    Created on : 1 dic. 2024, 14:27:36
    Author     : alonz
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Politica</title>
         <link rel="stylesheet" href="css/Styles.css">
         <style>
            .content {
                margin: 50px auto;
                width: 80%;
                padding: 20px;
                border: 2px solid #0056b3; /* Borde azul */
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                background-color: #ffffff;
                line-height: 1.8;
                font-size: 1.1em;
                color: #333;
            }
            .content h2 {
                color: #333;
                margin-top: 20px;
            }
            .content ul {
                margin: 10px 0 10px 20px;
                list-style: disc;
            }
        </style>
    </head>
    <body>
         <div class="r1">
        <div class="r1-1">
            <h1>AgendaPro - Politicas</h1>
        </div>
        <ul class="r2">
            <li><a href="index.html">Inicio</a></li>
        </ul>
    </div>
        <main>
        <div class="content">
            <h2>1. Introducción</h2>
            <p>
                En AgendaPro, tu privacidad es nuestra prioridad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
            </p>

            <h2>2. Información que recopilamos</h2>
            <ul>
                <li>Datos personales: nombre, dirección de correo electrónico, información de contacto.</li>
                <li>Datos técnicos: dirección IP, tipo de navegador y sistema operativo.</li>
                <li>Información de uso: cómo utilizas la aplicación.</li>
            </ul>

            <h2>3. Cómo utilizamos tu información</h2>
            <p>
                Usamos tu información para:
            </p>
            <ul>
                <li>Proporcionarte acceso a nuestras herramientas de organización.</li>
                <li>Enviarte alertas sobre tus tareas y actividades.</li>
                <li>Mejorar la funcionalidad de nuestra aplicación.</li>
            </ul>

            <h2>4. Compartir datos</h2>
            <p>
                No compartimos tus datos personales con terceros, excepto cuando sea necesario para cumplir con la ley o con tu consentimiento explícito.
            </p>

            <h2>5. Seguridad</h2>
            <p>
                Implementamos medidas de seguridad para proteger tu información contra accesos no autorizados y pérdida de datos.
            </p>
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
