var str = "String asdasdasd";
var text = "Длин строки " + str.length;
text+="\n Строка в вверхнем регистре - " + str.toUpperCase();
text+="\n страка в нижнем регистре - " + str.toLowerCase();
text+="\n Поиск 4 символа  - " + str.charAt(4);

text+="\n asd начинается с  индекса - " + str.indexOf('asd');



alert(text);