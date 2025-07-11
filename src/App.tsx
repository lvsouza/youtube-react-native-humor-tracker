import { SafeAreaView } from 'react-native-safe-area-context';

import { MyButton } from './shared/components/MyButton';
import { Text } from 'react-native';


export default function App() {
  return (
    <SafeAreaView>
      <MyButton order={1}>
        <Text>MyButton {1}</Text>
      </MyButton>

      <MyButton>
        <Text>MyButton {2}</Text>
      </MyButton>

      <MyButton onPress={() => console.log('Teste')} />
    </SafeAreaView>
  );
}
