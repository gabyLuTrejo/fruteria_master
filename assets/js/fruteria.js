function agrearFruta(){
  var frutaNueva = document.getElementById("fruta").value;
    if(frutaNueva.length > 0){
      if(find_li(frutaNueva)){
        var li = document.createElement('li');
        li.id = frutaNueva;
        li.innerHTML = frutaNueva;
        document.getElementById("nuevaFruta").appendChild(li);
      }
    }
    return false;
}


function find_li(lista){
  var el = document.getElementById("nuevaFruta").getElementsByTagName("li");
  for (var i=0; i<el.length; i++){
    if(el[i].innerHTML == lista)
    return false;
  }
  return true;
}
