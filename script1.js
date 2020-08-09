function generateBill(){

	
	var billNumber =prompt("enter bill number","bill number here");
	
	var creditNumber=prompt("enter credit number","credit number here");
	
	var input = document.getElementById("dateInput").value;
    	var dateEntered = new Date(input);
	
	var date =new date();
	var bill = document.getElementById("bill").value;
	var amount;

	if(dateEntered.getdate() > 15 ){
		amonut=bill+50;
	}

	return amount;
}