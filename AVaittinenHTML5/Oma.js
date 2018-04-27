
$(document).ready(function () {
    //piilotetaan kaikki sisältöalueet
    $('.sisältö').hide();
    
    $('#ulkonäkö').on('click', function () {
        //piilotetaan sisältö klikatessa
        $('.sisältö').hide();
        //näytetään näytetään uusi teksti klikatessa
        $('#p1').show();
    });
    $('#levinneisyys').on('click', function () {
        //piilotetaan sisältö klikatessa
        $('.sisältö').hide();
        //näytetään näytetään uusi teksti klikatessa
        $('#p2').show();
    });
    $('#ravinto').on('click', function () {
        //piilotetaan sisältö klikatessa
        $('.sisältö').hide();
        //näytetään näytetään uusi teksti klikatessa
        $('#p3').show();
    });
});