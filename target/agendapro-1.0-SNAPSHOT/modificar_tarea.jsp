<%-- 
    Document   : modificar_tarea
    Created on : 1 dic. 2024, 14:13:47
    Author     : alonz
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="java.sql.Connection, java.sql.PreparedStatement, java.sql.ResultSet" %>
<%@ page import="com.mycompany.agendapro.servlets.DatabaseConnection" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Modificar tarea</title>
        <link rel="stylesheet" href="css/Styles.css" type="text/css"/>
        <script>
            function cargarDatosTarea(tareaId) {
                fetch('CargarTareaServlet?idTarea=' + tareaId)
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('nombre').value = data.titulo;
                        document.getElementById('descripcion').value = data.descripcion;
                        document.getElementById('fecha').value = data.fechaLimite;
                        document.getElementById('prioridad').value = data.prioridad;
                        document.getElementById('categoria').value = data.categoria;
                        document.getElementById('idTarea').value = data.idTarea;
                    })
                    .catch(error => console.error('Error al cargar la tarea:', error));
            }
        </script>
    </head>
    <body>
         <div class="r1">
        <div class="r1-1">
            <h1>AgendaPro - Modificar Tarea</h1>
        </div>
        <ul class="r2">

            <li><a href="dashboard.jsp">Dashboard</a></li>
            <li><a href="calendario.jsp">Calendario</a></li>
            <li><a href="agregar_tarea.jsp">Agregar Tareas</a></li>
            <li><a href="modificar_tarea.jsp" class="activo">Modificar Tareas</a></li>
            <li><a href="historial.jsp">Historial</a></li>
            <li><a href="iniciar_sesion.jsp">Cerrar sesión</a></li>
        </ul>
    </div>
        <main>
     <div class="container">
                <h2>Modificar Tarea</h2>
                <!-- Selector de tareas -->
                <div class="input-group">
                    <label for="tareas">Seleccionar tarea:</label>
                    <select id="tareas" onchange="cargarDatosTarea(this.value)">
                        <option value="">-- Seleccione una tarea --</option>
                        <%
                            // Cargar las tareas del usuario desde la base de datos
                            Integer idUsuario = (Integer) session.getAttribute("idUsuario");
                            if (idUsuario != null) {
                                try (Connection con = DatabaseConnection.getConnection()) {
                                    String sql = "SELECT id_tarea, titulo FROM tareas WHERE id_usuario = ?";
                                    PreparedStatement ps = con.prepareStatement(sql);
                                    ps.setInt(1, idUsuario);
                                    ResultSet rs = ps.executeQuery();
                                    while (rs.next()) {
                        %>
                        <option value="<%= rs.getInt("id_tarea") %>"><%= rs.getString("titulo") %></option>
                        <%
                                    }
                                } catch (Exception e) {
                                    e.printStackTrace();
                                }
                            }
                        %>
                    </select>
                </div>
                <!-- Formulario para modificar tarea -->
                <form action="ModificarTareaServlet" method="post">
                    <input type="hidden" id="idTarea" name="idTarea">
                    <div class="input-group">
                        <label for="nombre">Nombre de la tarea:</label>
                        <input type="text" id="nombre" name="nombre" required>
                    </div>
                    <div class="input-group">
                        <label for="descripcion">Descripción:</label>
                        <textarea id="descripcion" name="descripcion" required></textarea>
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
                    <button type="submit" id="btn-modificar">Modificar Tarea</button>
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
