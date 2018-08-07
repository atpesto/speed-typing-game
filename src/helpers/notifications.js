import { notification } from 'antd';

const simpleNotification = (message, description) => {
  notification.open({
    message,
    description,
  });
};

export default {
  simpleNotification,
};
