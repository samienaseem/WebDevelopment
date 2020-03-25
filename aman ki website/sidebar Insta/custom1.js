$(document).ready(function() {
   // var load=document.getElementById('load-more'); 


    var userFeed1 = new Instafeed({
        get: 'user',
        userId: '2250481373',
        limit: 30,
        resolution: 'standard_resolution',
        accessToken: '2250481373.1677ed0.6a7001cb209246f5a8d7a0e9b6210c38',
        sortBy: 'most-recent',
        template: '<div class="instaimg"><a href="{{link}}"  target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
        /*after:function(){
            if (!this.hasNext()) {
                load.setAttribute('disabled','disabled');
            }
        },*/
    });

    /*load.addEventListener('click',function(){
        userFeed1.next();
    })*/


    userFeed1.run();

    


    
    /*// This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });*/


});