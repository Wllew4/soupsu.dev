extraLife.getParticipant(402863).then(data => {
    document.getElementById('total').innerHTML = "$" + data['sumDonations'] + '/' + data['fundraisingGoal'];
    var w = (data['sumDonations'] / data['fundraisingGoal'] * 100).toString() + "%";
    document.getElementById('progress').style.width = w;
});