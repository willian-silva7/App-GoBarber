import React from 'react';
import { View } from 'react-native';
import { useAuth } from '../../hooks/Auth';
import {} from './styles';

const AppointmentCreated: React.FC = () => {
  const { signOut } = useAuth();

  return <View />;
};

export default AppointmentCreated;
