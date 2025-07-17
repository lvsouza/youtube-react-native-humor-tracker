import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { TNavigationScreenProps, TRouteProps } from '../Routes';
import { BaseInput } from '../shared/components/BaseInput';
import { Header } from '../shared/components/Header';
import { Footer } from '../shared/components/Footer';
import { theme } from '../shared/themes/Theme';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const HomePage = () => {
  const navigation = useNavigation<TNavigationScreenProps>();
  const { params } = useRoute<TRouteProps<'home'>>();


  const [name, setName] = useState('');


  useEffect(() => {
    if (params?.newName) {
      setName(params?.newName || '');
    }
  }, [params?.newName]);

  useEffect(() => {
    AsyncStorage
      .getItem('user-name')
      .then(value => {
        setName(value || '');
      })
  }, []);


  return <>
    <Header name={name} />

    <View style={{ flex: 1 }} />

    <Footer>
      <View style={styles.footerContainer}>
        <Text style={styles.footerTitle}>
          Qual é o seu nome?
        </Text>

        <BaseInput label='Nome' asButton onPress={() => navigation.navigate('setUserName')}>
          <TextInput
            editable={false}
            pointerEvents='none'
            style={styles.footerInput}
            placeholder='Escreva seu nome aqui...'
            placeholderTextColor={theme.colors.textPlaceholder}
          />
        </BaseInput>
      </View>
    </Footer>
  </>;
}

const styles = StyleSheet.create({
  footerContainer: {
    gap: 8
  },
  footerTitle: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
  },
  footerInput: {
    padding: 12,
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
  }
});
