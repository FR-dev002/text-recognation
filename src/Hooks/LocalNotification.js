import {useState, useEffect} from 'react';
import {notificationManager} from './../Classes/NotificationManagerClass';

const LocalNotificationHook = () => {
  const [localNotification, setLocalNofication] = useState(
    () => notificationManager,
  );
  const senderId = '986244426754';

  useEffect(() => {
    localNotification.configure(
      onRegister,
      onNotification,
      onOpenNotification,
      senderId,
    );
  }, [localNotification]);

  const onPressSendNotification = () => {
    const options = {
      soundName: 'default',
      playSound: true,
      vibrate: true,
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
    console.log(notify.title);
    // alert('open Notification'); 
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
