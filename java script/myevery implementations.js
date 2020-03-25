var flag=0;
function myevery(arr,callback) {

		for (var i = 0; i < arr.length; i++) {
			
			if (callback(arr[i])) {
				flag=1;
			}
			else{
				flag=0;
				console.log("false");
				break;
			}
		}
		if (flag==1) {
			console.log("true");
		}
}
var s=[30,60,40,90];
myevery(s,function(x){

		return x<100;
})