const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields = [
  "var1", "var2", "var3", "var4", "var5", "var6", "speach"
]

function getFormsValues() {
  let obj = {};
  fields.forEach(
    function(item) {
      obj[item]=$("input[name="+item+"]")[0].value
    }
  );
  return obj;
}

function handleButton() {
  $.getJSON(dataURL, handleData)//
  showHide();
}

function showHide() {
  if ($("form").is(":visible")) {
    $("form").hide();
    $(".tShow").hide();
    $(".tHide").show();
  }
  else if($("form").is(":hidden")){
    $("form").show();
    $(".tHide").hide();
    $(".tShow").show();
  }
}

function handleData(data) {
  let text = "";

  let val = getFormsValues();

  data["text"].forEach(function(item) {
    for (key in val) {
      item = item.replace("{" + key + "}", val[key]);
    }
    text = text + item + "<br>";
  });
  $("#result").html(text);

}

function init() {
  $("#button-fetch").click(handleButton);//обращаемся по селектору id(#button-fetch), и вешаем событие по клику=>который вызывает функцию handleButton()
}

$(document).ready(init);//если DOM загружен вызываем функцию init()
