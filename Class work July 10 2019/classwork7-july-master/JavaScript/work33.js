function element_massiva(array, index) {
	return"Значение элемента #"+index+'='+numbers[index];
}

var numbers=[1, 2, 3, 4];

var result=element_massiva(numbers, 3);

alert(result);