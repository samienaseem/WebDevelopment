var f=[];
//var j=0;
function myfilter(arr,callback) {
	
		for (var i = 0; i < arr.length; i++) {
			
			if (callback(arr[i])) {

				f=arr[i];
				console.log(f);
			}	

		}

}
var w=["samar","arif","saquib","Naseem"];
myfilter(w,function(x){
	return x.length>4
})