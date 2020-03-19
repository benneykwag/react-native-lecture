import firebase from 'react-native-firebase';
import type {Notification, NotificationOpen} from 'react-native-firebase';

class FCMService {
  register = (onRegister, onNotification, onOpenNotification) => {};
  checkPermission = onRegister => {
    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          this.getToken(onRegister);
        } else {
          this.requestPermission(onRegister);
        }
      })
      .catch(error => {
        console.log('Permission reject', error);
      });
  };

  getToken = onRegister => {
    firebase
      .messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          onRegister(fcmToken);
        } else {
          console.log('User does not have a device token');
        }
      })
      .catch(error => {
        console.log('getToken rejected', error);
      });
  };

  rejectPermisssion = onRegister => {
    firebase
      .messaging()
      .requestPermission()
      .then(fcmToken => {
        this.getToken(onRegister);
      })
      .catch(error => {
        console.log('Request Permission rejected', error);
      });
  };
  deleteToken = () => {
    firebase
      .messaging()
      .deleteToken()
      .catch(error => {
        console.log('Delete token error', error);
      });
  };
  createNotificationListeners = (onNotification, onOpenNotification) => {
    // Triggered when a particular notification has been received in forground
    this.notificationListener = firebase
      .notifications()
      .onNotification((notification: Notification) => {
        onNotification(notification);
      });
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened((notificationOpen: NotificationOpen) => {
        onOpenNotification(notification);
      });
    this.firebase
      .notifications()
      .getInitialNotifications()
      .then(notificationOpen => {
        if (notificationOpen) {
          const notification: Notification = notificationOpen.notification;
          onOpenNotification(notification);
        }
      });

    this.messageListener = firebase.messaging().onMessage(message => {
      onNotification(message);
    });

    this.onTokenRefreshListener = firebase
      .messaging()
      .onTokenRefresh(fcmToken => {
        console.log('New Token: ', fcmToken);
      });
  };

  unRegister = () => {
    this.notificationListener();
    this.notificationOpenedListener();
    this.messageListener();
    this.onTokenRefreshListener();
  };

  buildChannel = obj => {
    return new firebase.notifications.Android.Channel(
      obj.channelID,
      obj.channelName,
      firebase.notifications.Android.Importance.High,
    ).setDescription(obj.channelDes);
  };

  buildNotification = obj => {
    // for android
    firebase.notifications().android.createChannel(obj.channel);
  };
}

export const fcmService = new FCMService();
