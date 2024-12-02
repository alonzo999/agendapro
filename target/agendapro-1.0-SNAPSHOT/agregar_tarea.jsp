<%-- 
    Document   : agregar_tarea
    Created on : 1 dic. 2024, 14:01:11
    Author     : alonz
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" href="css/Styles.css" type="text/css"/>
    </head>
    <body>
        <div class="r1">
        <div class="r1-1">
            <h1>AgendaPro - Agregar Tarea</h1>
        </div>
        <ul class="r2">

            <li><a href="dashboard.jsp">Dashboard</a></li>
            <li><a href="calendario.jsp">Calendario</a></li>
            <li><a href="agregar_tarea.jsp" class="activo">Agregar Tareas</a></li>
            <li><a href="modificar_tarea.jsp">Modificar Tareas</a></li>
            <li><a href="historial.jsp">Historial</a></li>
            <li><a href="iniciar_sesion.jsp">Cerrar sesión</a></li>
        </ul>
    </div>
        <main>
    <div class="container">
        <h2>Agregar Nueva Tarea</h2>
        <form action="TareaServlet" method="post">
            <div class="input-group">
        <label for="nombre">Nombre de la tarea:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Ingrese el nombre de la tarea" required>
    </div>

    <div class="input-group">
        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" name="descripcion" placeholder="Ingrese una descripción"></textarea>
    </div>

    <div class="input-group">
        <label for="fecha">Fecha de entrega:</label>
        <input type="date" id="fecha" name="fecha" required>
    </div>

    <div class="input-group">
        <label for="prioridad">Prioridad:</label>
        <select id="prioridad" name="prioridad" required>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
        </select>
    </div>

    <div class="input-group">
        <label for="categoria">Categoría:</label>
        <select id="categoria" name="categoria" required>
            <option value="Trabajo">Trabajo</option>
            <option value="Estudio">Estudio</option>
            <option value="Personal">Personal</option>
        </select>
    </div>

    <button type="submit" id="btn-agregar">Agregar Tarea</button>
        </form>
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
