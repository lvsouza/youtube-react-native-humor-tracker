import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native';

import { TNavigationScreenProps } from '../Routes';


export const HomePage = () => {
  const navigation = useNavigation<TNavigationScreenProps>();


  return <>
    <Text>Home</Text>

    <Button
      title='Go to Details'
      onPress={() => navigation.navigate('detail', { rate: 3 })}
    />
  </>;
}
