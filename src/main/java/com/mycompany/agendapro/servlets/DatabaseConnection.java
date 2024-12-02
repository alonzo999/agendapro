/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.agendapro.servlets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
/**
 *
 * @author alonz
 */
public class DatabaseConnection {
     private static final String URL = "jdbc:mysql://localhost:3305/datosguia";
    private static final String USER = "inter";
    private static final String PASSWORD = "inter";

    public static Connection getConnection() throws SQLException {
         try {
            Class.forName("com.mysql.cj.jdbc.Driver"); // Registra el driver
            return DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (ClassNotFoundException e) {
            System.err.println("Driver no encontrado: " + e.getMessage());
            throw new SQLException("No se pudo registrar el driver", e);
        }
    }
}


