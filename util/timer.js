exports.timeElapsed = (now, start) => {
    let followTime = now.getTime() - start.getTime();
    let rawSeconds = Math.floor(followTime / 1000);
    
    let ss = Math.floor(rawSeconds % 60);
    rawSeconds = Math.floor(rawSeconds / 60);
    let min = Math.floor(rawSeconds % 60);
    rawSeconds = Math.floor(rawSeconds / 60);
    let hh = Math.floor(rawSeconds % 24);
    rawSeconds = Math.floor(rawSeconds / 24);
    let dd = Math.floor(rawSeconds % 30);
    rawSeconds = Math.floor(rawSeconds / 30);
    let mm = Math.floor(rawSeconds % 365);
    rawSeconds = Math.floor(rawSeconds / 365);
    let yy = Math.floor(rawSeconds % 365);
    
    let time = {
        ss: ss,
        min: min,
        hh: hh,
        dd: dd,
        mm: mm,
        yy: yy
    }

    return time;
}

exports.timeToString = (time) => {
    let res;
    if(time.yy != 0){
        res += time.yy + " year" + (time.yy != 1 ? "s, " : ", ");
    }
    if(time.mm != 0){
        res += time.mm + " month" + (time.mm != 1 ? "s, " : ", ");
    }
    if(time.dd != 0){
        res += time.dd + " day" + (time.dd != 1 ? "s, " : ", ");
    }
    if(time.hh != 0){
        res += time.hh + " hour" + (time.hh != 1 ? "s, " : ", ");
    }
    if(time.min != 0){
        res += time.min + " minute" + (time.min != 1 ? "s, " : ", ");
    }
    if(time.ss != 0){
        res += " and " + time.ss + " second" + (time.ss != 1 ? "s " : " ");
    }

    return res;
}