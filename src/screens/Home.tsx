import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { Header } from '../shared/components/Header';
import { TNavigationScreenProps } from '../Routes';
import { Footer } from '../shared/components/Footer';


export const HomePage = () => {
  const navigation = useNavigation<TNavigationScreenProps>();


  return <>
    <Header
      name={'Juca'}
    />

    <View style={{ flex: 1 }} />

    <Footer>
      <Text style={{ fontFamily: 'extraBold' }}>Home</Text>
    </Footer>
  </>;
}
