/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.agendapro.servlets;

import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author alonz
 */
@WebServlet(name = "contactoServlet", urlPatterns = {"/contactoServlet"})
public class contactoServlet extends HttpServlet {

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
         String nombre = request.getParameter("nombre");
        String email = request.getParameter("email");
        String mensaje = request.getParameter("mensaje");

        // Validar campos
        if (nombre == null || nombre.isEmpty() || email == null || email.isEmpty() || mensaje == null || mensaje.isEmpty()) {
            response.sendRedirect("contacto.jsp?status=error");
            return;
        }

        // Configurar correo
        Email from = new Email("kesuri16@hotmail.com"); // Tu correo verificado en SendGrid
        String subject = "Nuevo mensaje de contacto - AgendaPro";
        Email to = new Email("ondiair@hotmail.com"); // Destinatario
        Content content = new Content("text/plain", "Nombre: " + nombre + "\nCorreo: " + email + "\n\nMensaje:\n" + mensaje);
        Mail mail = new Mail(from, subject, to, content);

        // Enviar correo con API Key
        SendGrid sg = new SendGrid("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"); // Reemplaza con tu API Key
        Request req = new Request();

        try {
            req.setMethod(Method.POST);
            req.setEndpoint("mail/send");
            req.setBody(mail.build());
            Response res = sg.api(req);

            // Confirmación
            if (res.getStatusCode() == 202) {
                response.sendRedirect("contacto.jsp?status=success");
            } else {
                response.sendRedirect("contacto.jsp?status=error");
            }
        } catch (IOException ex) {
            ex.printStackTrace();
            response.sendRedirect("contacto.jsp?status=error");
        }
    }

    
    // Método GET
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    // Método POST
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "ContactoServlet para enviar mensajes de contacto.";
    }
}
