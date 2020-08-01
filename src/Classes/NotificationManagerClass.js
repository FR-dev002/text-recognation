import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';

class NotificationManagerClass {
  configure = (onRegister, onNotification, onOpenNotification, senderId) => {
    PushNotification.configure({
      onRegister: function (token) {
        onRegister(token.token);
        console.log(
          '[NotificationManagerClass] [onRegister] TOKEN : ',
          token.token,
        );
      },

      onNotification: function (notification) {
        console.log(
          '[NotificationManagerClass] [onNotification] NOTIFICATION : ',
          notification,
          );

        if (notification.userInteraction) {
          onOpenNotification(notification);
        } else {
          onNotification(notification);
        }

        if (Platform.OS === "android") {
          notification.userInteraction = true;
        }

        notification.finish('backgroundFetchResultNoData');
      },

      // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: senderId,
    });
  };

  _buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.largeIcon || 'ic_launcher',
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || false,
      vibration: options.vinbration || 300,
      importance: options.importance || 'height',
      priority: options.priority || 'hight',
      data: data,
    };
  };

  showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.localNotification({
      ...this._buildAndroidNotification(id, title, message, data, options),

      //   Android dan IOS props
      title: title || '',
      message: message || '',
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false,
    });
  };

  cancelAllNotification = () => {
    if (Platform.OS == 'ios') {
      console.log('[NotificationManagerClass] [cancelAllNotification]');
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  };

  unregister = () => {
    PushNotification.unregister();
  };
}

export const notificationManager = new NotificationManagerClass();
