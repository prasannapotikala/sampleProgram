function getfact(){
	
	alert("Hi");
	var num= document.getElementById("num").value;
	alert(num);
	var i;
	
	var fact=1;
	for(i=1;i<=num;i++){
	
	fact=fact*i;
	}

	document.write(fact);
}