(function(){

    let actualizarHora = function(){

            //creo y asigno las variables

            let fecha = new Date();
            let horas = fecha.getHours();
            let ampm;
            let mins = fecha.getMinutes();
            let diaSemana = fecha.getDay();
            let dia = fecha.getDate();
            let mes = fecha.getMonth();
            let year = fecha.getFullYear();

            //ponemos las variables creadas en el documento
            let pHoras = document.getElementById("horas");
            let pAmpm = document.getElementById("ampm");
            let pMins = document.getElementById("mins");
            let pDiaSemana = document.getElementById("diaSemana");
            let pDia = document.getElementById("dia");
            let pMes = document.getElementById("mes");
            let pYear = document.getElementById("year");
            //se establece el dia de la semana
            let semana = ["domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            pDiaSemana.textContent = semana [diaSemana];
            
            pDia.textContent = dia;
            //se establece el mes
            let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

            pMes.textContent = meses[mes];
            //se establece el año
            pYear.textContent = year;
            // se establece si es am o pm
            if (horas >= 12){
                horas = horas - 12;
                ampm = "PM";}
                else {
                    ampm = "AM";
                }
            //se cambia las 00:00 por las 12:00
            if (horas == 0) {
                horas = 12;
            };
            //se establece la hora
            pHoras.textContent = horas;
            //se coloca un 0 como prefijo cuando solo hay un digito en los minutos
            if (mins < 10){mins = "0" + mins};
            //se establecen los minutos
            pMins.textContent = mins;
            pAmpm.textContent = ampm;
    };



    actualizarHora();
    let intervalo = setInterval(actualizarHora , 1000);
}())