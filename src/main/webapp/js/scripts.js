/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let index = 0;

function showNextSlide() {
    const items=document.querySelectorAll('.r4-2');
    items[index].classList.remove('active');
    index=(index + 1) % items.length;
    items[index].classList.add('active');
}
setInterval(showNextSlide, 5000);

function irApagina(){
    window.location.href = "iniciar sesión.jsp";
}
