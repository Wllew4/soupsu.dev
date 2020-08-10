$.get("https://www.googleapis.com/youtube/v3/playlistItems", {
    part: 'snippet',
    maxResults: 1,
    playlistId: 'UUvrwx52Pg4MN6SETlFKb6kQ',
    key: 'AIzaSyA_5_zES6cQ-JFumorfU3j8Nci6a4m3rPc'
},
    function(data){
        var vidid = data["items"][0]["snippet"]["resourceId"]["videoId"];

        document.getElementById("latestVid").setAttribute("src", "https://www.youtube.com/embed/" + vidid);
        document.getElementById("latestVid").setAttribute("width", "50%");
    }
);