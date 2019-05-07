import React from 'react';
import Chatkit from '@pusher/chatkit-client';
import { Alert } from 'react-native';
import { store } from '../../redux/store';
import { initMessage, loadMessage, clearMessage } from '../../redux/message/message.actions';
import MessageCard from '../cards/MessageCard';
import { getItemOrder as getIO, getMyItemOrders as getMIO } from '../../redux/itemOrder/itemOrders.actions';
import { CHATKIT_INSTANCE_LOCATOR, CHATKIT_TOKEN_PROVIDER_ENDPOINT } from '../constants/chatkit';

let currentUser = '';

export const sendMessage = async (trip, item, type, navigation) => {
  const result = await store.dispatch(initMessage(trip, item, type));
  if (!result.success) {
    Alert.alert('Contact failed', '');
  } else {
    navigation.navigate('MessageDetailsScreen');
  }
  await initializeMessage(result.result);
};

export const getMyItemOrders = () => {
  const { user: { _id }, mode } = store.getState().helper.asyncStorage;
  store.dispatch(getMIO(_id, mode));
};

export const getItemOrder = async (item, navigation) => {
  navigation.navigate('MessageDetailsScreen');
  const result = await store.dispatch(getIO(item));
  await initializeMessage(result);
};

const initializeMessage = async (result) => {
  store.dispatch(clearMessage());
  const { mode } = store.getState().helper.asyncStorage;

  const tokenProvider = new Chatkit.TokenProvider({
    url: CHATKIT_TOKEN_PROVIDER_ENDPOINT,
  });

  const chatManager = new Chatkit.ChatManager({
    instanceLocator: CHATKIT_INSTANCE_LOCATOR,
    userId: mode === 'client' ? result.client._id : result.courier._id,
    tokenProvider,
  });

  currentUser = await chatManager.connect();
  currentUser.subscribeToRoom({
    roomId: result.conversationId,
    hooks: {
      onMessage: onReceive,
    },
  });
};

export const addMessage = async ([message], conversationId) => {
  currentUser.sendMessage({
    text: message.text,
    roomId: conversationId,
  });
};

const onReceive = (data) => {
  const {
    id, senderId, text, createdAt,
  } = data;
  const incomingMessage = {
    _id: id.toString(),
    text,
    createdAt: new Date(createdAt),
    user: {
      _id: senderId,
      name: senderId,
    },
  };

  store.dispatch(loadMessage(incomingMessage));
};

export const renderMessage = (mode, item, navigation) => (
  <MessageCard
    handlePress={() => getItemOrder(item._id, navigation)}
    username={mode !== 'client' ? item.client.username : item.courier.username}
    name={item.item.name}
    time={new Date(item.createdDate).toLocaleString()}
    image={mode !== 'client' ? item.client.avatar : item.courier.avatar}
  />
);
