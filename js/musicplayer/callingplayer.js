$(document).ready(function(){
            var description = '';

            $('.audio').ttwMusicPlayer(myPlaylist, {
                autoPlay:false, 
                description:description,
                jPlayer:{
                    swfPath:'js/jquery-jplayer' //You need to override the default swf path any time the directory structure changes
                }
            });
        });
