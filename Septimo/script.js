(function(){

    let actualizarHora = function(){
            let fecha = new Date();
            let horas = fecha.getHours();
            let ampm;
            let mins = fecha.getMinutes();
            let diaSemana = fecha.getDay();
            let dia = fecha.getDate();
            let mes = fecha.getMonth();
            let year = fecha.getFullYear();


            let pHoras = document.getElementById("horas");
            let pAmpm = document.getElementById("ampm");
            let pMins = document.getElementById("mins");
            let pDiaSemana = document.getElementById("diaSemana");
            let pDia = document.getElementById("dia");
            let pMes = document.getElementById("mes");
            let pYear = document.getElementById("year");

            let semana = ["domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
            pDiaSemana.textContent = semana [diaSemana];

            pDia.textContent = dia;

            let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

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
    let intervalo = setInterval(actualizarHora , 1000);
}())