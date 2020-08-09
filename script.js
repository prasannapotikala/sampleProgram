//create a function with name
function getValue() {
		var initials;
		
		//using prompt the user his/her full name
               var name = prompt("Enter your name : ", "your name here");
               document.write("You have entered : " + name);

		//form initials using the first characters of the first and last name.
		var names = name.split(' ');
		initials = names[0].substring(0, 1).toUpperCase();
		if (names.length > 1) {
    			initials += names[names.length - 1].substring(0, 1).toUpperCase();
		}

		//popup the initials
		alert(initials);

}

	