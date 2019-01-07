var arr = new Array(95,8,7,6,5,4,3,2,1);
let qwe;
for (let i = 0; i < arr.length; i++) {
    qwe +=arr[i];
}
text = "Длинна массива = " + arr.length;
text += "\n Массив состоит из : [" + arr.join(", ")+ "]";
text += "\n Сортированный массив :["+ (arr.sort()).join(', ')+ "]";
alert(text);
alert(qwe);