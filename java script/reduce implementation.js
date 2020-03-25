function mreduce(arr,callback) {
	var sum=0;
	for(var i=0;i<arr.length;i++) {
	sum=callback(arr[i]);
	}
	console.log("the sum of the given array is  " + sum);
}
var s=[1,2,3,4];
var d=0;
mreduce(s,function(x){
   d=x + d;
   return d;

});