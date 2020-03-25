(function($){

	var t

$.fn.encode=function(){

	this.each(function(){

		var $this=$(this);


	alert("your plugin is working");
	var current=$this.text();
	var newq="";
	t=current;

	for(i=0;i<current.length;i++){
		newq=newq+String.fromCharCode(current.charCodeAt(i)+1);
	}
	$this.text(newq);

});


}



/*$.fn.decode=function(){

	var current=this.text();
	var newe="";
	alert(current);
		if (t!=current) {
	for (var i = 0; i < current.length; i++) {
		newe=newe+String.fromCharCode(current.charCodeAt(i)-1)
	}
}
else{
	alert("nochange");
}
this.text(newe);
}*/

})(jQuery);