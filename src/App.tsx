import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function App() {
  const [hide, setHide] = useState(false);

  console.log('render')


  return (
    <SafeAreaView>
      {hide
        ? <Text>Showed</Text>
        : <Text>Hided</Text>
      }

      <TouchableOpacity onPress={() => setHide(!hide)}>
        <Text>Toggle</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}
