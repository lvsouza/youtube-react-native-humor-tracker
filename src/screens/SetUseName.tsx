import { StyleSheet, Text, TextInput, View } from 'react-native';

import { BaseInput } from '../shared/components/BaseInput';
import { Button } from '../shared/components/Button';
import { theme } from '../shared/themes/Theme';


export const SetUserNamePage = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Qual é o seu nome?
      </Text>

      <BaseInput label='Nome'>
        <TextInput
          autoFocus
          style={styles.input}
          placeholder='Escreva seu nome aqui...'
          placeholderTextColor={theme.colors.textPlaceholder}
        />
      </BaseInput>

      <View style={{ flex: 1 }} />

      <Button
        title='Salvar'
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