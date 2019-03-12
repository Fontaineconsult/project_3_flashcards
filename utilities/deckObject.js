export function YatesShuffle(array) {

    //Fisher–Yates Shuffle. https://bost.ocks.org/mike/shuffle/

    var m = array.length, t, i;


    while (m) {
        i = Math.floor(Math.random() * m--);


        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}