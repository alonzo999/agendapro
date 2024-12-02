/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.agendapro.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author alonz
 */
@WebServlet(name = "ModificarTareaServlet", urlPatterns = {"/ModificarTareaServlet"})
public class ModificarTareaServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
         Integer idUsuario = (Integer) request.getSession().getAttribute("idUsuario");
        if (idUsuario == null) {
            response.sendRedirect("iniciar_sesion.jsp");
            return;
        }

        int idTarea = Integer.parseInt(request.getParameter("idTarea"));
        String titulo = request.getParameter("nombre");
        String descripcion = request.getParameter("descripcion");
        String fechaLimite = request.getParameter("fecha");
        String prioridad = request.getParameter("prioridad");
        String categoria = request.getParameter("categoria");

        try (Connection con = DatabaseConnection.getConnection()) {
            String sql = "UPDATE tareas SET titulo = ?, descripcion = ?, fecha_limite = ?, prioridad = ?, categoria = ? WHERE id_tarea = ? AND id_usuario = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, titulo);
            ps.setString(2, descripcion);
            ps.setString(3, fechaLimite);
            ps.setString(4, prioridad);
            ps.setString(5, categoria);
            ps.setInt(6, idTarea);
            ps.setInt(7, idUsuario);

            int filasAfectadas = ps.executeUpdate();
            if (filasAfectadas > 0) {
                response.sendRedirect("dashboard.jsp?status=modificado");
            } else {
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
