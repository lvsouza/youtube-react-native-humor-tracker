import { useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function App() {
  const [list, setList] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
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


      <View style={styles.container}>
        <Pressable style={({ pressed }) => pressed ? styles.buttonPressed : styles.button}>
          <Text style={styles.buttonText}>Press me</Text>
        </Pressable>
      </View>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: 100,
    padding: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonPressed: {
    backgroundColor: 'blue',
    width: 100,
    padding: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  container: {
    margin: 16
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  }
});
