import { store } from '../../redux/store';
import { initMessage } from '../../redux/message/message.actions';

export const sendMessage = async (user, item, type, navigation) => {
  const result = await store.dispatch(initMessage(user, item, type));
  if (result) {
    setTimeout(() => {
      navigation.navigate('MessageDetailsScreen');
    }, 1000);
  }
};
