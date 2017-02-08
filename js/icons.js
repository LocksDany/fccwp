function icons(desc){
    var icon = '';
    var timeId = desc.split('')
    timeId = timeId[timeId.length - 1];
    var alt = '';
    var clear = 'sunny';
    var time = 'day';
    if(timeId == 'n'){
        alt = '-alt';
        clear = '-clear';
        time = 'night';
    }
    
    switch(desc){
        case '01' + timeId:
            icon = 'wi-' + time + clear;
            break;
        case '02' + timeId:
        case '03' + timeId:
        case '04' + timeId:
            icon = 'wi-' + time + alt + '-cloudy';
            break;
        case '09' + timeId:
            icon = 'wi-' + time + alt + '-hail';
            break;
        case '10' + timeId:
            icon = 'wi-' + time + alt + '-rain';
            break;
        case '11' + timeId:
            icon = 'wi-' + time + alt + '-lighting';
            break;
        case '13' + timeId:
            icon = 'wi-' + time + alt + '-snow';
            break;
        case '50' + timeId:
            icon = 'wi-' + time + '-fog';
            break;
    }
    return icon;
}