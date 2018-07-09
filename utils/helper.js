import React from 'react';
import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'Flashcard:notificationsq';

export function formatObjectToArray (result) {
    // Return object to array 
    if(result) {
        return Object.keys(result).map(key => result[key])
    }
    // If result is empty return empty array
    return []
}

export const guid =() => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }
  
  export function createNotification() {
    return {
      title: "Flash news from Flash Card",
      body: "Don't forget to take a quiz today!",
      ios: {
        sound: true
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true
      }
    }
  }
  
  export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then(data => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync();
  
                let tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate());
                tomorrow.setHours(0);
                tomorrow.setMinutes(1);
  
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day'
                  }
                );
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
              }
            });
        }
      })
  }