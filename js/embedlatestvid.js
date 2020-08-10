$.get("https://www.googleapis.com/youtube/v3/playlistItems", {
    part: 'snippet',
    maxResults: 1,
    playlistId: 'UUvrwx52Pg4MN6SETlFKb6kQ',
    key: 'AIzaSyDsDf8LXUYKgJArrxfl8w4XDnlS2wZjEpg'
},
    function(data){
        var vidid = data["items"][0]["snippet"]["resourceId"]["videoId"];

        document.getElementById("latestVid").setAttribute("src", "https://www.youtube.com/embed/" + vidid);
        document.getElementById("latestVid").setAttribute("width", "50%");
    }
);