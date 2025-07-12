import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text } from 'react-native';


type TNavigationScreenProps = NativeStackNavigationProp<Record<string, any>>;

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
