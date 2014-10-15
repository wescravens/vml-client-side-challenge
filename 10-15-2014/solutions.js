// All JS code goes in this file.

function palindrome(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/gi,'');
    if (str.split('').reverse().join('') === str) {
        return true;
    }
    return false;
}

function coinDeterminer(num){
    var coins = [25, 10, 5, 1];
    var total = 0;
    for (var i = 0; i < coins.length; i++) {
        var coin = coins[i];
        if (num < coin) { continue; }
        if (num % coin === 0) {
            total += num / coin;
            break;
        }
        while(num > coin) {
            num = num - coin;
            total++;
        }
    }
    return total;
}

function countingMinutes(strArr){
    var time;
    var timeSplit = strArr.split('-');
    var startTime = timeSplit[0];
    var endTime = timeSplit[1];
    var startHalf = startTime.replace(/[0-9]/, '');
    var endHalf = endTime.replace(/[0-9]/, '');
    var startMins = startTime.split(':')[1].replace('am', '').replace('pm', '');
    var startHours = startTime.split(':')[0];
    var endMins = endTime.split(':')[1];
    var endHours = endTime.split(':')[0];

    console.log(startHours, endHours);

    startMins += +startHours * 60;
    endMins += +endHours * 60;

    console.log('startmins', startMins);
    console.log('endmins', endMins);
    return time;
}

module.exports.palindrome = palindrome;
module.exports.coinDeterminer = coinDeterminer;
module.exports.countingMinutes = countingMinutes;