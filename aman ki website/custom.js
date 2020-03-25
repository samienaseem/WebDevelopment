$(document).ready(function() {
    var load=document.getElementById('load-more'); 


   /* var userFeed = new Instafeed({
        get: 'user',
        userId: '2077528451',
        limit: 20,
        resolution: 'standard_resolution',
        accessToken: '2077528451.1677ed0.2d4175bd28dd48f7b1ae8ea1a5260bdf',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3   instaimg"><a href="{{link}}"  target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
        after:function(){
            if (!this.hasNext()) {
                load.setAttribute('disabled','disabled');
            }
        },
    });*/

    var userFeed1 = new Instafeed({
        get: 'user',
        userId: '2077528451',
        limit: 20,
        resolution: 'standard_resolution',
        accessToken: '2077528451.1677ed0.2d4175bd28dd48f7b1ae8ea1a5260bdf',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3   instaimg"><a href="{{link}}"  target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
        after:function(){
            if (!this.hasNext()) {
                load.setAttribute('disabled','disabled');
            }
        },
    });

    load.addEventListener('click',function(){
        userFeed1.next();
    })


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