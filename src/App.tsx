import { useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function App() {
  const [list, setList] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  ]);

  console.log('render')


  return (
    <SafeAreaView>


      {/* <ScrollView>
        {list.map((item, index) => (
          <Text key={item}>Hided {item} index {index}</Text>
        ))}
      </ScrollView> */}

      <FlatList
        data={list}
        keyExtractor={(item, index) => item.toString()}
        renderItem={({ item, index }) => (
          <Text>Hided {item} index {index}</Text>
        )}
      />


    </SafeAreaView>
  );
}
