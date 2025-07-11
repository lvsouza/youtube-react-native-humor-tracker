import { SafeAreaView } from 'react-native-safe-area-context';

import { FirstComponent } from './shared/components/FirstComponent';


export default function App() {
  return (
    <SafeAreaView>
      <FirstComponent order={1} />
      <FirstComponent order={2} />
      <FirstComponent order={3} />
    </SafeAreaView>
  );
}
