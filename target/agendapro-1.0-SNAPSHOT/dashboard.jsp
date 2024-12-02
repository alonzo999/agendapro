<%-- 
    Document   : dashboard
    Created on : 1 dic. 2024, 13:50:23
    Author     : alonz
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%@ page import="com.mycompany.agendapro.servlets.DatabaseConnection" %>
<%
    // Recuperar el ID del usuario de la sesión
    Integer idUsuario = (Integer) session.getAttribute("idUsuario");
    String nombreUsuario = (String) session.getAttribute("nombreUsuario");

    if (idUsuario == null) {
        // Si no hay un usuario en sesión, redirigir a la página de inicio de sesión
        response.sendRedirect("iniciar_sesion.jsp");
        return;
    }
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Dashboard</title>
        <link rel="stylesheet" href="css/Styles.css" type="text/css"/>
        <script src="js/scripts.js"></script>
    </head>
    <body>
        <div class="r1">
            <div class="r1-1">
                <h1>AgendaPro - Dashboard</h1>
            </div>
            <ul class="r2">
                <li><a href="dashboard.jsp" class="activo">Dashboard</a></li>
                <li><a href="calendario.jsp">Calendario</a></li>
                <li><a href="agregar_tarea.jsp">Agregar Tareas</a></li>
                <li><a href="modificar_tarea.jsp">Modificar Tareas</a></li>
                <li><a href="historial.jsp">Historial</a></li>
                <li><a href="CerrarSesionServlet">Cerrar sesión</a></li>
            </ul>
        </div>

        <main>
             <div class="container">
                <h2>Bienvenido, <%= nombreUsuario %>!</h2>
                <div class="dashboard-section">
                    <h3>Tareas pendientes</h3>
                    <ul id="tareas">
                        <% 
                            try (Connection con = DatabaseConnection.getConnection()) {
                                String sql = "SELECT id_tarea, titulo, descripcion, fecha_limite, prioridad, categoria FROM tareas WHERE id_usuario = ? AND estado = 'pendiente'";
                                PreparedStatement ps = con.prepareStatement(sql);
                                ps.setInt(1, idUsuario);
                                ResultSet rs = ps.executeQuery();

                                while (rs.next()) {
                                    int idTarea = rs.getInt("id_tarea");
                                    String titulo = rs.getString("titulo");
                                    String descripcion = rs.getString("descripcion");
                                    String fechaLimite = rs.getString("fecha_limite");
                                    String prioridad = rs.getString("prioridad");
                                    String categoria = rs.getString("categoria");
                        %>
                        <li>
                            <h4><%= titulo %> (<%= categoria %>)</h4>
                            <p><%= descripcion %></p>
                            <p><strong>Fecha límite:</strong> <%= fechaLimite %></p>
                            <p><strong>Prioridad:</strong> <%= prioridad %></p>
                           
                            <form action="EliminarTareaServlet" method="POST" style="display:inline;">
                                <input type="hidden" name="idTarea" value="<%= idTarea %>">
                                <button type="submit" class="btn-eliminar">Eliminar</button>
                            
                        </li>
                        <% 
                                }
                            } catch (Exception e) {
                                e.printStackTrace();
                                out.println("<p>Error al cargar las tareas: " + e.getMessage() + "</p>");
                            }
                        %>
                    </ul>
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
