function Task(){

	//первое задание
	document.getElementById("text1").innerHTML = "Присвоенные типы переменных:";

	let num = 123;
	let str = "Мама мыла раму";
	let bigI = 1111111111111111n;
	let bl = true;
	let sym = Symbol("u");

	document.getElementById("text2").innerHTML = typeof(num) + "<br>" +
	typeof(str) + "<br>" + typeof(bigI) + "<br>" + typeof(bl) + "<br>" + 
	typeof(sym);
	
	var a = 6;
	var b = 9;

	document.getElementById("text3").innerHTML = "Свойства переменных a = " +
	a + " и b = " + b + ":";

	if(a == b){
		var str1 = "Переменные равны";
	} else {
		var str1 = "Переменные не равны";
	}
	
	if(a < b){
		var str2 = "a меньше b";
	} else {
		var str2 = "a больше b";
	}

	if(a <= b){
		var str3 = "a меньше или равна b";
	} else {
		var str3 = "a больше или равна b";
	}

	document.getElementById("text4").innerHTML = str1 + "<br>" +
	str2 + "<br>" + str3;


	//второе задание
	var i = 0;
	while(i <= 50){
		if(i % 2 != 0){
			document.getElementById("text6").append(i + " ");
		}
		i++;
	}

	for(i = 0; i <= 50; i++){
		if(i % 2 != 0){
			document.getElementById("text7").append(i + " ");
		}
	}

}


function AgeTask(){
	var age = document.getElementById("Age").value;

	if(age >= 18 && age <= 30){
		document.getElementById("text5").innerHTML = "Для молодежи";
	} else if(age >= 1 && age <= 17){
		document.getElementById("text5").innerHTML = "Для детей";
	} else {
		document.getElementById("text5").innerHTML = "Для всех возрастов";
	}

}

function Property_doc(){
	var property;
	for(property in document){
		document.getElementById("text8").innerHTML = 
		document.getElementById("text8").innerHTML + property + "<br/>";
		//document.write(property + "<br/>");

	}
}