/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.agendapro.servlets;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "EliminarTareaServlet", urlPatterns = {"/EliminarTareaServlet"})
public class EliminarTareaServlet extends HttpServlet {

    /**
     * Procesa los requerimientos HTTP GET y POST.
     *
     * @param request solicitud HTTP
     * @param response respuesta HTTP
     * @throws ServletException si ocurre un error específico del servlet
     * @throws IOException si ocurre un error de entrada/salida
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        // Verificar si el usuario está logueado
        Integer idUsuario = (Integer) request.getSession().getAttribute("idUsuario");
        if (idUsuario == null) {
            response.sendRedirect("iniciar_sesion.jsp");
            return;
        }

        try {
            // Obtener el ID de la tarea a eliminar desde los parámetros
            int idTarea = Integer.parseInt(request.getParameter("idTarea"));

            // Conexión a la base de datos
            try (Connection con = DatabaseConnection.getConnection()) {
                // SQL para eliminar la tarea
                String sql = "DELETE FROM tareas WHERE id_tarea = ? AND id_usuario = ?";
                PreparedStatement ps = con.prepareStatement(sql);
                ps.setInt(1, idTarea);
                ps.setInt(2, idUsuario);

                // Ejecutar el DELETE
                int filasAfectadas = ps.executeUpdate();
                if (filasAfectadas > 0) {
                    // Si se elimina correctamente, redirigir con estado de éxito
                    response.sendRedirect("dashboard.jsp?status=eliminado");
                } else {
                    // Si no se eliminó ninguna fila, redirigir con error
                    response.sendRedirect("dashboard.jsp?status=no_encontrado");
                }
            }
        } catch (NumberFormatException e) {
            // Manejo de error si el parámetro no es un número válido
            e.printStackTrace();
            response.sendRedirect("dashboard.jsp?status=error_formato");
        } catch (Exception e) {
            // Manejo de otros errores
            e.printStackTrace();
            response.sendRedirect("dashboard.jsp?status=error");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Servlet para eliminar tareas específicas asociadas a un usuario.";
    }
}
