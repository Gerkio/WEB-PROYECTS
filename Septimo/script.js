(function(){

    var actualizarHora = function(){
            var fecha = new Date();
            var horas = fecha.getHours();
            var ampm;
            var mins = fecha.getMinutes();
            var diaSemana = fecha.getDay();
            var dia = fecha.getDate();
            var mes = fecha.getMonth();
            var year = fecha.getFullYear();


            var pHoras = document.getElementById("horas");
            var pAmpm = document.getElementById("ampm");
            var pMins = document.getElementById("mins");
            var pDiaSemana = document.getElementById("diaSemana");
            var pDia = document.getElementById("dia");
            var pMes = document.getElementById("mes");
            var pYear = document.getElementById("year");

            var semana = ["domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            pDiaSemana.textContent = semana [diaSemana];

            pDia.textContent = dia;

            var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

            pMes.textContent = meses[mes];

            pYear.textContent = year;

            if (horas >= 12){
                horas = horas - 12;
                ampm = "PM";}
                else {
                    ampm = "AM";
                }
            if (horas == 0) {
                horas = 12;
            };
            
            pHoras.textContent = horas;

            if (mins < 10){mins = "0" + mins};

            pMins.textContent = mins;
            pAmpm.textContent = ampm;
    };



    actualizarHora();
    var intervalo = setInterval(actualizarHora , 1000);
}())