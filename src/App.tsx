import { useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MyButton } from './shared/components/MyButton';


export default function App() {
  const [state, setState] = useState('Teste');

  console.log('render')


  return (
    <SafeAreaView>
      <MyButton order={1} onPress={() => setState('Teste 2')}>
        <Text>MyButton {state}</Text>
      </MyButton>


      <MyButton>
        <Text>MyButton</Text>
      </MyButton>

      <MyButton onPress={() => console.log('teste')} />
    </SafeAreaView>
  );
}
