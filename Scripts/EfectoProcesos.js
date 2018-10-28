$(document).ready(function () {

    $('#FaseExtraccion').show();
    $('#FaseTransformacion').hide();
    $('#ProcesoCarga').hide();
//alert("Entro");
    $('#Fase1').click(function () {
        $('#FaseExtraccion').show();
        $('#FaseTransformacion').hide();
        $('#ProcesoCarga').hide();
  //      alert("Entro1");
    });

    $('#Fase2').click(function () {
        $('#FaseExtraccion').hide();
        $('#FaseTransformacion').show();
        $('#ProcesoCarga').hide();
    //    alert("Entro2");
    });

    $('#Fase3').click(function () {
        $('#FaseExtraccion').hide();
        $('#FaseTransformacion').hide();
        $('#ProcesoCarga').show();
      //  alert("Entro3");
    });

    
});