var CustomerArray=['Amil','talha','anas','umar'];
function findCustomer(name) {
	var i;
	var msg;
	for(i=0;i<CustomerArray.length;i++) {

		if (CustomerArray[i]==name) {

			msg=function() {
				alert('you are customer number'+(i+1))
			}
			return msg;
			
		}
	}
	return function(){
	alert("not present");
}
}
var prin=findCustomer('samie');
prin();