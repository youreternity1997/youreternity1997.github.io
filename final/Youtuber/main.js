var player;
var currentPlay = 0;

function onYouTubeIframeAPIReady(){
    player = new YT.Player("player", //YT=youtube
    {
        height:"600",
        width:"900",
        videoId:playList[currentPlay],
        playerVars:{
            "autoplay":0,
            "controls":0,
            "start":playTime[currentPlay][0],
            "end":playTime[currentPlay][1],
            "showinfo":0,
            "rel":0,
            "iv_load_policy":3    
        },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
        }
    });
}

function onPlayerReady(event){
    player.getPlaybackQuality()
    event.target.setPlaybackQuality('hd1080');

    $("#playButton").click(function(){
        $("#h2").text(player.getVideoData().title);
        player.playVideo();
    });

    $(".section").click(function(){
       /*const div_id = this.id ;*/
       currentPlay = this.id;
       
       player.loadVideoById({
            "videoId":playList[currentPlay],    
            "startSeconds":playTime[currentPlay][0],
            "endSeconds":playTime[currentPlay][1],
            "suggestedQuality":"large"
       });
    });
   
    $("#restartButton").click(function(){
       currentPlay = 0;
       player.cueVideoById({
            "videoId":playList[currentPlay],    
            "startSeconds":playTime[currentPlay][0],
            "endSeconds":playTime[currentPlay][1],
            "suggestedQuality":"large"
       });
    });
}

function onPlayerStateChange(event){
    
    if(event.data ==0 && (Math.floor(player.getCurrentTime())==playTime[currentPlay][1]))
    {
        if(currentPlay < playList.length-1)
        {
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],    
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }else
        {
            currentPlay=0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
    }
    if(player.getVideoLoadedFraction()>0)
    { $("h2").text(player.getVideoData().title);}    
}
