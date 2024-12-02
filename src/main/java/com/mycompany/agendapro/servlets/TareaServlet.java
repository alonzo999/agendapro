/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.agendapro.servlets;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
/**
 *
 * @author alonz
 */
@WebServlet(name = "TareaServlet", urlPatterns = {"/TareaServlet"})
public class TareaServlet extends HttpServlet {

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
        Integer idUsuario = (Integer) request.getSession().getAttribute("idUsuario");
        if (idUsuario == null) {
            // Redirigir al inicio de sesión si el usuario no está autenticado
            response.sendRedirect("iniciar_sesion.jsp");
            return;
        }

        // Obtener los datos del formulario
        String nombre = request.getParameter("nombre");
        String descripcion = request.getParameter("descripcion");
        String fecha = request.getParameter("fecha");
        String prioridad = request.getParameter("prioridad");
        String categoria = request.getParameter("categoria");

        try (Connection con = DatabaseConnection.getConnection()) {
            // Insertar los datos en la tabla `tareas` y obtener el ID generado
            String sqlTareas = "INSERT INTO tareas (id_usuario, titulo, descripcion, fecha_limite, prioridad, categoria, estado) VALUES (?, ?, ?, ?, ?, ?, 'pendiente')";
            PreparedStatement psTareas = con.prepareStatement(sqlTareas, PreparedStatement.RETURN_GENERATED_KEYS);
            psTareas.setInt(1, idUsuario);
            psTareas.setString(2, nombre);
            psTareas.setString(3, descripcion);
            psTareas.setString(4, fecha);
            psTareas.setString(5, prioridad);
            psTareas.setString(6, categoria);
            psTareas.executeUpdate();

            // Obtener el ID de la tarea recién insertada
            ResultSet rs = psTareas.getGeneratedKeys();
            int idTarea = 0;
            if (rs.next()) {
                idTarea = rs.getInt(1);
            }

            // Insertar los datos en la tabla `historial`
            String sqlHistorial = "INSERT INTO historial (id_usuario, id_tarea, titulo, descripcion, fecha_limite, prioridad, estado, categoria, fecha_completada) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())";
            PreparedStatement psHistorial = con.prepareStatement(sqlHistorial);
            psHistorial.setInt(1, idUsuario);
            psHistorial.setInt(2, idTarea);
            psHistorial.setString(3, nombre);
            psHistorial.setString(4, descripcion);
            psHistorial.setString(5, fecha);
            psHistorial.setString(6, prioridad);
            psHistorial.setString(7, "pendiente");
            psHistorial.setString(8, categoria);
            psHistorial.executeUpdate();

            // Redirigir al dashboard después de guardar la tarea
            response.sendRedirect("dashboard.jsp");
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("agregar_tarea.jsp?status=error");
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
