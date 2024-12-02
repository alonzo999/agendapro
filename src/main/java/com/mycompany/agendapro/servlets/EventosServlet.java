package com.mycompany.agendapro.servlets;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author alonz
 */
@WebServlet(urlPatterns = {"/EventosServlet"})
public class EventosServlet extends HttpServlet {

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
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write("{\"error\":\"Usuario no autorizado\"}");
        return;
    }

    response.setContentType("application/json");
    response.setCharacterEncoding("UTF-8");

    try (PrintWriter out = response.getWriter();
         Connection con = DatabaseConnection.getConnection()) {

        // Consultar las tareas del usuario en la base de datos
        String sql = "SELECT titulo, descripcion, fecha_limite, prioridad FROM tareas WHERE id_usuario = ?";
        PreparedStatement ps = con.prepareStatement(sql);
        ps.setInt(1, idUsuario);
        ResultSet rs = ps.executeQuery();

        // Construir el JSON de eventos
        JSONArray eventos = new JSONArray();
        while (rs.next()) {
            JSONObject evento = new JSONObject();
            evento.put("title", rs.getString("titulo")); // Título del evento
            evento.put("start", rs.getString("fecha_limite")); // Fecha del evento
            evento.put("description", rs.getString("descripcion")); // Descripción del evento

            // Determinar el color basado en la prioridad
            String prioridad = rs.getString("prioridad");
            switch (prioridad.toLowerCase()) {
                case "alta":
                    evento.put("color", "red");
                    break;
                case "media":
                    evento.put("color", "orange");
                    break;
                case "baja":
                    evento.put("color", "green");
                    break;
                default:
                    evento.put("color", "blue");
                    break;
            }

            eventos.put(evento); // Agregar el evento al arreglo JSON
        }

        // Devolver el arreglo JSON de eventos al cliente
        out.print(eventos.toString());
    } catch (Exception e) {
        e.printStackTrace();
        response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        response.getWriter().write("{\"error\":\"Error interno del servidor\"}");
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
