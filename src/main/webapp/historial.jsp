<%-- 
    Document   : historial
    Created on : 1 dic. 2024, 14:21:59
    Author     : alonz
--%>

<%@page import="com.mycompany.agendapro.servlets.DatabaseConnection"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" href="css/Styles.css" type="text/css" />
        <style>
            .historial-table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            .historial-table th, .historial-table td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: center;
            }
            .historial-table th {
                background-color: #f2f2f2;
                color: #333;
            }
            .historial-table tr:nth-child(even) {
                background-color: #f9f9f9;
            }
            .historial-table tr:hover {
                background-color: #f1f1f1;
            }
            .btn-print {
                margin-top: 20px;
                padding: 10px 20px;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            .btn-print:hover {
                background-color: #0056b3;
            }
        </style>
        <script>
            function imprimirHistorial() {
                var contenido = document.getElementById('historial').innerHTML;
                var ventanaImpresion = window.open('', '', 'height=600,width=800');
                ventanaImpresion.document.write('<html><head><title>Imprimir Historial</title></head><body>');
                ventanaImpresion.document.write('<h2>Historial de Actividades</h2>');
                ventanaImpresion.document.write(contenido);
                ventanaImpresion.document.write('</body></html>');
                ventanaImpresion.document.close();
                ventanaImpresion.print();
            }
        </script>
    </head>
    <body>
        <div class="r1">
        <div class="r1-1">
            <h1>AgendaPro - Historial</h1>
        </div>
        <ul class="r2">
            <li><a href="dashboard.jsp">Dashboard</a></li>
            <li><a href="calendario.jsp">Calendario</a></li>
            <li><a href="agregar_tarea.jsp">Agregar Tareas</a></li>
            <li><a href="modificar_tarea.jsp">Modificar Tareas</a></li>
            <li><a href="historial.jsp"class="activo">Historial</a></li>
            <li><a href="iniciar_sesion.jsp">Cerrar sesión</a></li>
        </ul>
    </div>
        <main>
          <div class="container">
                <h2>Historial de Actividades</h2>
                <p>Aquí puedes ver un registro de tus actividades recientes.</p>
                <div id="historial">
                    <table class="historial-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Descripción</th>
                                <th>Fecha</th>
                                <th>Prioridad</th>
                                <th>Estado</th>
                                <th>Categoria</th>
                                <th>Ultima Modificación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <%
                                try (Connection con = DatabaseConnection.getConnection()) {
                                    Integer idUsuario = (Integer) session.getAttribute("idUsuario");
                                    if (idUsuario != null) {
                                        String sql = "SELECT id_historial, titulo, descripcion, fecha_limite, prioridad, estado, categoria, fecha_completada FROM historial WHERE id_usuario = ?";
                                        PreparedStatement ps = con.prepareStatement(sql);
                                        ps.setInt(1, idUsuario);
                                        ResultSet rs = ps.executeQuery();
                                        while (rs.next()) {
                            %>
                            <tr>
                                <td><%= rs.getInt("id_historial") %></td>
                                <td><%= rs.getString("titulo") %></td>
                                <td><%= rs.getString("descripcion") %></td>
                                <td><%= rs.getString("fecha_limite") %></td>
                                <td><%= rs.getString("prioridad") %></td>
                                <td><%= rs.getString("estado") %></td>
                                <td><%= rs.getString("categoria") %></td>
                                <td><%= rs.getTimestamp("fecha_completada") %></td>
                            </tr>
                            <%
                                        }
                                    }
                                } catch (Exception e) {
                                    e.printStackTrace();
                            %>
                            <tr>
                                <td colspan="8">Error al cargar las tareas: <%= e.getMessage() %></td>
                            </tr>
                            <%
                                }
                            %>
                        </tbody>
                    </table>
                </div>
                <button class="btn-print" onclick="imprimirHistorial()">Imprimir Historial</button>
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
