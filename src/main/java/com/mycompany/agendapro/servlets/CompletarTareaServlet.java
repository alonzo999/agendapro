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


@WebServlet(name = "CompletarTareaServlet", urlPatterns = {"/CompletarTareaServlet"})
public class CompletarTareaServlet extends HttpServlet {

    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
       Integer idUsuario = (Integer) request.getSession().getAttribute("idUsuario");
        String idTarea = request.getParameter("idTarea");

        if (idUsuario == null || idTarea == null || idTarea.isEmpty()) {
            // Si no hay usuario o tarea válida, redirigir con error
            response.sendRedirect("dashboard.jsp?status=error");
            return;
        }

        try (Connection con = DatabaseConnection.getConnection()) {
            // Actualizar el estado de la tarea en la tabla 'tareas'
            String sqlTareas = "UPDATE tareas SET estado = 'completado' WHERE id_tarea = ? AND id_usuario = ?";
            PreparedStatement psTareas = con.prepareStatement(sqlTareas);
            psTareas.setString(1, idTarea);
            psTareas.setInt(2, idUsuario);
            int updatedTareas = psTareas.executeUpdate();

            if (updatedTareas > 0) {
                // Actualizar el estado de la tarea en la tabla 'historial'
                String sqlHistorial = "UPDATE historial SET estado = 'completado', fecha_completada = NOW() WHERE id_tarea = ? AND id_usuario = ?";
                PreparedStatement psHistorial = con.prepareStatement(sqlHistorial);
                psHistorial.setString(1, idTarea);
                psHistorial.setInt(2, idUsuario);
                psHistorial.executeUpdate();

                // Redirigir con éxito
                response.sendRedirect("dashboard.jsp?status=success");
            } else {
                // Si no se actualizó ninguna fila, enviar error
                response.sendRedirect("dashboard.jsp?status=error");
            }

        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("dashboard.jsp?status=error");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
