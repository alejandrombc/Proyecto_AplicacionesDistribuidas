$(document).on("click", "#save", function(){
  pass = false;
  pass2 = false;

  sup = $("#someSwitchOptionPrimary").attr("checked");
  right = $("#someSwitchOptionInfo").attr("checked");

  $.getJSON('../config_general.json', function(data){
    data["MENU_SUPERIOR"] = sup;
    data["MENU_DERECHO"] = right;
    $.ajax({
        type: "POST",
        dataType : 'json',
        async: false,
        url: '../write_json.php',
        data: { data: JSON.stringify(data), file: "config_general.json" },
        success: function (){
          pass2 = true;
        },
        failure: function(){
          pass2 = false;
          alert("No se pudo guardar");
        }
    });
  });
  //-------------------------------------- Guardado de cambios de colores ------------------------------------
  letra_parrafo = validateStart($("#colorpickerField1").val());
  letra_lista = validateStart($("#colorpickerField2").val());
  fondo_lista = validateStart($("#colorpickerField3").val());
  letra_links = validateStart($("#colorpickerField4").val());
  links_hover = validateStart($("#colorpickerField5").val());
  letra_links_hover = validateStart($("#colorpickerField6").val());
  letra_lista_hover = validateStart($("#colorpickerField7").val());
  letra_boton = validateStart($("#colorpickerField8").val());
  fondo_boton = validateStart($("#colorpickerField9").val());
  letra_boton_hover = validateStart($("#colorpickerField10").val());
  fondo_boton_hover = validateStart($("#colorpickerField11").val());
  letra_header = validateStart($("#colorpickerField12").val());
  letra_laber = validateStart($("#colorpickerField13").val());
  letra_textarea = validateStart($("#colorpickerField14").val());
  fondo_textarea = validateStart($("#colorpickerField15").val());
  letra_input = validateStart($("#colorpickerField16").val());
  fondo_input = validateStart($("#colorpickerField17").val());
  fondo_menu_derecho = validateStart($("#colorpickerField18").val());
  fondo_menu_izquierdo = validateStart($("#colorpickerField19").val());
  container = validateStart($("#colorpickerField20").val());
  navbar = validateStart($("#colorpickerField21").val());
  active_link = validateStart($("#colorpickerField22").val());
  background = validateStart($("#colorpickerField23").val());

  $.getJSON('../config_colores.json', function(data) {
      data["COLOR_LETRA_PARRAFO"] = letra_parrafo;
      data["COLOR_LETRA_LISTA"] = letra_lista;
      data["COLOR_FONDO_LISTA"] = fondo_lista;
      data["COLOR_LETRA_LINKS"] = letra_links;
      data["COLOR_LINKS_HOVER"] = links_hover;
      data["COLOR_LETRA_LINKS_HOVER"] = letra_links_hover;
      data["COLOR_LETRA_LISTA_LINKS"] = letra_lista_hover;
      data["COLOR_LETRA_BOTON"] = letra_boton;
      data["COLOR_FONDO_BOTON"] = fondo_boton;
      data["COLOR_LETRA_BOTON_HOVER"] = letra_boton_hover;
      data["COLOR_FONDO_BOTON_HOVER"] = fondo_boton_hover;
      data["COLOR_LETRA_HEADER"] = letra_header;
      data["COLOR_LETRA_LABEL"] = letra_laber;
      data["COLOR_LETRA_TEXTAREA"] = letra_textarea;
      data["COLOR_FONDO_TEXTAREA"] = fondo_textarea;
      data["COLOR_LETRA_INPUT"] = letra_input;
      data["COLOR_FONDO_INPUT"] = fondo_input;
      data["COLOR_FONDO_MENU_DERECHO"] = fondo_menu_derecho;
      data["COLOR_FONDO_MENU_IZQUIERDO"] = fondo_menu_izquierdo;
      data["COLOR_CONTAINER"] = container;
      data["COLOR_NAVBAR"] = navbar;
      data["COLOR_ACTIVE_LINK"] = active_link;
      data["COLOR_BACKGROUND"] = background;
    $.ajax({
        type: "POST",
        dataType : 'json',
        async: false,
        url: '../write_json.php',
        data: { data: JSON.stringify(data), file: "config_colores.json" },
        success: function (){
          pass = true;
        },
        failure: function(){
          pass = false;
          alert("No se pudo guardar");
        }
    });
 });
 //-------------------------------------- Guardado de cambios de tamaños ------------------------------------
 parrafo = validateStart2($("#size1").val());
 link = validateStart2($("#size2").val());
 label = validateStart2($("#size3").val());
 lista = validateStart2($("#size4").val());
 input = validateStart2($("#size5").val());
 textarea = validateStart2($("#size6").val());
 header = validateStart2($("#size7").val());
 span = validateStart2($("#size8").val());
 boton = validateStart2($("#size9").val());

 $.getJSON('../config_tamanos.json', function(data) {
   if(validateNum(parrafo))
     data["TAMANO_LETRA_PARRAFO"] = parrafo;
   if(validateNum(link))
     data["TAMANO_LETRA_LINK"] = link;
   if(validateNum(label))
     data["TAMANO_LETRA_LABEL"] = label;
   if(validateNum(lista))
     data["TAMANO_LETRA_LISTA"] = lista;
   if(validateNum(input))
     data["TAMANO_LETRA_INPUT"] = input;
   if(validateNum(textarea))
     data["TAMANO_LETRA_TEXTAREA"] = textarea;
   if(validateNum(header))
     data["TAMANO_LETRA_HEADER"] = header;
   if(validateNum(span))
     data["TAMANO_LETRA_SPAN"] = span;
   if(validateNum(boton))
     data["TAMANO_LETRA_BOTON"] = boton;

    $.ajax({
        type: "POST",
        dataType : 'json',
        async: false,
        url: '../write_json.php',
        data: { data: JSON.stringify(data), file: "config_tamanos.json" },
        success: function (){
         if(pass && pass2){
           alert("Guardado!");
         }else
           console.log("no pass");
        },
        failure: function(){
          alert("No se pudo guardar");
        }
    });
  });
});

$(document).on("click", "#cancel", function(){
  window.location.replace("/");
});

$(document).on("click", "#db", function(){
  window.location.replace("/configBD");
});

$(document).on("click", "#cs", function(){
  window.location.replace("/CrossSite");
});

$(window).load(function(){
  $("#someSwitchOptionPrimary").attr("checked", !!+$("#someSwitchOptionPrimary").val());
  $("#someSwitchOptionInfo").attr("checked", !!+$("#someSwitchOptionInfo").val());
  $.getJSON('../config_colores.json', function(data) {
    $("#colorpickerField1").val(data["COLOR_LETRA_PARRAFO"]);
    $("#colorpickerField2").val(data["COLOR_LETRA_LISTA"]);
    $("#colorpickerField3").val(data["COLOR_FONDO_LISTA"]);
    $("#colorpickerField4").val(data["COLOR_LETRA_LINKS"]);
    $("#colorpickerField5").val(data["COLOR_LINKS_HOVER"]);
    $("#colorpickerField6").val(data["COLOR_LETRA_LINKS_HOVER"]);
    $("#colorpickerField7").val(data["COLOR_LETRA_LISTA_LINKS"]);
    $("#colorpickerField8").val(data["COLOR_LETRA_BOTON"]);
    $("#colorpickerField9").val(data["COLOR_FONDO_BOTON"]);
    $("#colorpickerField10").val(data["COLOR_LETRA_BOTON_HOVER"]);
    $("#colorpickerField11").val(data["COLOR_FONDO_BOTON_HOVER"]);
    $("#colorpickerField12").val(data["COLOR_LETRA_HEADER"]);
    $("#colorpickerField13").val(data["COLOR_LETRA_LABEL"]);
    $("#colorpickerField14").val(data["COLOR_LETRA_TEXTAREA"]);
    $("#colorpickerField15").val(data["COLOR_FONDO_TEXTAREA"]);
    $("#colorpickerField16").val(data["COLOR_LETRA_INPUT"]);
    $("#colorpickerField17").val(data["COLOR_FONDO_INPUT"]);
    $("#colorpickerField18").val(data["COLOR_FONDO_MENU_DERECHO"]);
    $("#colorpickerField19").val(data["COLOR_FONDO_MENU_IZQUIERDO"]);
    $("#colorpickerField20").val(data["COLOR_CONTAINER"]);
    $("#colorpickerField21").val(data["COLOR_NAVBAR"]);
    $("#colorpickerField22").val(data["COLOR_ACTIVE_LINK"]);
    $("#colorpickerField23").val(data["COLOR_BACKGROUND"]);
    console.log("AH!!!");
    alert("Para que se cambien los colores debe darle al circulo en al ventana emergente");
  });

  $.getJSON('../config_tamanos.json', function(data) {
    $("#size1").val(data["TAMANO_LETRA_PARRAFO"]);
    $("#size2").val(data["TAMANO_LETRA_LINK"]);
    $("#size3").val(data["TAMANO_LETRA_LABEL"]);
    $("#size4").val(data["TAMANO_LETRA_LISTA"]);
    $("#size5").val(data["TAMANO_LETRA_INPUT"]);
    $("#size6").val(data["TAMANO_LETRA_TEXTAREA"]);
    $("#size7").val(data["TAMANO_LETRA_HEADER"]);
    $("#size8").val(data["TAMANO_LETRA_SPAN"]);
    $("#size9").val(data["TAMANO_LETRA_BOTON"]);
  });
});

function validateNum(str){
  console.log(str)
  if(str.match(/^[0-9]{2}$/))
    return true;
  else if(str.match(/^[0-9]{1,2}(px)$/))
    return true;
  else{
    alert(str + " no es un tamaño valido! no se guardaran los cambios sobre este campo!");
    return false;
  }
}

function validateStart(str){
  if (/^#./.test(str)) {
    return str;
  }else{
    return "#" + str;
  }
}

function validateStart2(str){
  if (/px$/.test(str)) {
    return str;
  }else{
    return str + "px";
  }
}
