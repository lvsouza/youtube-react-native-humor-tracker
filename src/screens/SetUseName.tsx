import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BaseInput } from '../shared/components/BaseInput';
import { Button } from '../shared/components/Button';
import { TNavigationScreenProps } from '../Routes';
import { theme } from '../shared/themes/Theme';


export const SetUserNamePage = () => {
  const navigation = useNavigation<TNavigationScreenProps>();
  const insets = useSafeAreaInsets();

  const [name, setName] = useState('');


  useEffect(() => {
    AsyncStorage
      .getItem('user-name')
      .then(value => {
        setName(value || '');
      })
  }, []);


  const handleSaveUserName = async () => {
    try {
      await AsyncStorage.setItem('user-name', name);
    } catch (e) {
      // saving error
    }

    navigation.popTo('home', { newName: name });
  }


  return (
    <View style={{ ...styles.container, paddingBottom: insets.bottom }}>
      <Text style={styles.title}>
        Qual é o seu nome?
      </Text>

      <BaseInput label='Nome'>
        <TextInput
          autoFocus
          value={name}
          style={styles.input}
          onChangeText={(text) => setName(text)}
          placeholder='Escreva seu nome aqui...'
          placeholderTextColor={theme.colors.textPlaceholder}
        />
      </BaseInput>

      <View style={{ flex: 1 }} />

      <Button
        title='Salvar'
        onPress={handleSaveUserName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
  },
  input: {
    padding: 12,
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
  }
});