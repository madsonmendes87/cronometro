window.onload = function()
{
    var segundos = 00;
    var milesimos = 00;
    var acrescentaMilesimos = document.getElementById("milesimos");
    var acrescentaSegundos = document.getElementById("segundos");
    var botaoStart = document.getElementById("iniciar");
    var botaoStop = document.getElementById("parar");
    var botaoResetar = document.getElementById("resetar");
    var Interval;

    botaoStart.onclick = function()
    {
        clearInterval(Interval);
        Interval = setInterval(comecarTempo, 10);
    }

    botaoStop.onclick = function()
    {
        clearInterval(Interval);    
    }

    botaoResetar.onclick = function()
    {
        clearInterval(Interval);
        milesimos = "00";
        segundos = "00";
        acrescentaMilesimos.innerHTML = milesimos;
        acrescentaSegundos.innerHTML = segundos;
    }

    function comecarTempo()
    {
        milesimos++;

        if(milesimos <= 9)
        {
            acrescentaMilesimos.innerHTML = "0" + milesimos;
        }

        if(milesimos > 9)
        {
            acrescentaMilesimos.innerHTML = milesimos;
        }

        if(milesimos > 99)
        {
            console.log("segundos");
            segundos++;
            acrescentaSegundos.innerHTML = "0" + segundos;
            milesimos = 0;
            acrescentaMilesimos.innerHTML = "0" + 0;
        }

        if(segundos > 9)
        {
            acrescentaSegundos.innerHTML = segundos;    
        }

    }
}