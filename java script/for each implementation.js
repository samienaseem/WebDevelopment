function myforeach(arr,callback) {

	for (var i = 0; i <arr.length; i++) {
			
			callback(arr[i],i);

	}
}
var s=[1,2,3,4];
myforeach(s,function(x,v) {
	console.log("element at"+v+"is " +x+"");
})