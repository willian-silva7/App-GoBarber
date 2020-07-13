import React from 'react';
import { View } from 'react-native';
import { useAuth } from '../../hooks/Auth';
import {} from './styles';

const Profile: React.FC = () => {
  const { signOut } = useAuth();

  return <View />;
};

export default Profile;
