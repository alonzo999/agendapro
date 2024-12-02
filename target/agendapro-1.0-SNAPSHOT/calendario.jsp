<%-- 
    Document   : calendario
    Created on : 1 dic. 2024, 11:25:02
    Author     : alonz
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
         <title>Calendario</title>
   <link href="js/fullcalendar-7.0.0-beta.1/packages/core/main.min.css" rel="stylesheet">
<link href="js/fullcalendar-7.0.0-beta.1/packages/core/index.global.min.css" rel="stylesheet">
<link href="js/fullcalendar-7.0.0-beta.1/packages/daygrid/index.global.min.css" rel="stylesheet">

<!-- Scripts de FullCalendar -->
<script src="js/fullcalendar-7.0.0-beta.1/packages/core/index.global.min.js"></script>
<script src="js/fullcalendar-7.0.0-beta.1/packages/daygrid/index.global.min.js"></script>
<script src="js/fullcalendar-7.0.0-beta.1/packages/core/locales-all.global.min.js"></script>
    <link rel="stylesheet" href="css/Styles.css" type="text/css"/>
    </head>
    <body>
        <div class="r1">
        <div class="r1-1">
            <h1>AgendaPro - Calendario</h1>
        </div>
        <ul class="r2">
            <li><a href="dashboard.jsp" >Dashboard</a></li>
            <li><a href="calendario.jsp" class="activo">Calendario</a></li>
            <li><a href="agregar_tarea.jsp">Agregar Tareas</a></li>
            <li><a href="modificar_tarea.jsp">Modificar Tareas</a></li>
            <li><a href="historial.jsp">Historial</a></li>
            <li><a href="iniciar_sesion.jsp">Cerrar sesión</a></li>
        </ul>
    </div>

    <!-- Div donde se renderiza el calendario -->
    <main style="margin-top: 80px;"> <!-- Ajusta el margen superior aquí -->
            <div id="calendar" style="margin: 0 auto; width: 80%;"></div>
        </main>

    <script>
    document.addEventListener('DOMContentLoaded', function () {
        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'es', // Cambiar a español
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: '/AgendaPro/EventosServlet', // URL del Servlet para obtener los eventos
            eventClick: function (info) {
                // Mostrar un modal con la descripción del evento
                alert('Título: ' + info.event.title + '\nDescripción: ' + info.event.extendedProps.description);
            }
        });

        calendar.render();
    });
</script>
    </body>
</html>
