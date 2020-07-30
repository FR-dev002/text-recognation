import {useState, useEffect} from 'react';
import {notificationManager} from './../Classes/NotificationManagerClass';

const LocalNotificationHook = () => {
  const [localNotification, setLocalNofication] = useState(
    () => notificationManager,
  );

  useEffect(() => {
    localNotification.configure(onRegister, onNotification, onOpenNotification);
  }, [localNotification]);

  const onPressSendNotification = () => {
    const options = {
      soundName: 'default',
      playSound: true,
      vibrate: true
    };
    localNotification.showNotification(
      1,
      'App Notification',
      'Local Notification',
      {},
      options,
    );
  };

  const onRegister = (token) => {
    console.log(['LocalNotificationHook']['onRegister'], token);
  };

  const onNotification = (notify) => {
    console.log(['LocalNotificationHook']['onNotification'], notify);
  };

  const onOpenNotification = (notify) => {
    alert('open Notification');
  };

  const onPressCancelNotification = () => {
    localNotification.cancelAllNotification();
  };

  /**
   * @description return object dati Custom Hooks
   */
  return {
    onPressSendNotification,
    onPressCancelNotification,
    localNotification,
  };
};

export default LocalNotificationHook;
