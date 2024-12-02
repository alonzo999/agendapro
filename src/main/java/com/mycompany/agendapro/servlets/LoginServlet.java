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
import javax.servlet.http.HttpSession;

/**
 *
 * @author alonz
 */
@WebServlet(name = "LoginServlet", urlPatterns = {"/LoginServlet"})
public class LoginServlet extends HttpServlet {

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
       String nombre = request.getParameter("nombre");
        String email = request.getParameter("email");
        String contraseña = request.getParameter("contrasena");

         System.out.println("Datos recibidos: Nombre=" + nombre + ", Email=" + email + ", Contraseña=" + contraseña);
         
        try (Connection con = DatabaseConnection.getConnection()) {
            String sql = "SELECT * FROM usuarios WHERE nombre = ? AND email = ? AND contraseña = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, nombre);
            ps.setString(2, email);
            ps.setString(3, contraseña);

            ResultSet rs = ps.executeQuery();

             if (rs.next()) {
                // Si el usuario existe, guardar el ID en la sesión
                int idUsuario = rs.getInt("id_usuario");
                HttpSession session = request.getSession();
                session.setAttribute("idUsuario", idUsuario);
                session.setAttribute("nombreUsuario", nombre);

                // Redirigir al dashboard
                response.sendRedirect("dashboard.jsp");
            } else {
                // Si no hay coincidencia, redirigir con un mensaje de error
                response.sendRedirect("iniciar_sesion.jsp?status=error");
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("iniciar_sesion.jsp?status=error");
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
