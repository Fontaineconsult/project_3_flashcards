import { Notifications, Permissions } from 'expo'
const NOTIFICATION_KEY = "FlashCards:notifications";
import { AsyncStorage } from 'react-native';

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


export function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}



function createNotification () {

    return {
        title: 'STUDY TIME, YO',
        body: 'Get ta work, ya lazy bum!',
        ios: {
            sound:true

        },
        android: {
          sound:true,
          priority:'high',
          sticky: false,
          vibrate: true,


        }

    }

}


export function setLocalNotification() {

    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {

                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {

                        if (status === 'granted') {

                            Notifications.scheduleLocalNotificationAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)


                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',

                                }


                            );
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }

                    })


            }


        })



}