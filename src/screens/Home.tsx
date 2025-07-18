import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { TNavigationScreenProps, TRouteProps } from '../Routes';
import { BaseInput } from '../shared/components/BaseInput';
import { ListItem } from '../shared/components/ListItem';
import { Header } from '../shared/components/Header';
import { Footer } from '../shared/components/Footer';
import { theme } from '../shared/themes/Theme';


interface IListItem {
  id: string;
  rate: number;
  datetime: string;
  description: string;
}

export const HomePage = () => {
  const navigation = useNavigation<TNavigationScreenProps>();
  const { params } = useRoute<TRouteProps<'home'>>();


  const [name, setName] = useState('');
  const [list, setList] = useState<IListItem[]>([
    { id: '1', rate: 1, datetime: '', description: 'Hoje meu dia está, mais ou menos... Peguei muito transito para o trabalho.' },
    { id: '2', rate: 2, datetime: '', description: 'Hoje meu dia está, mais ou menos... Peguei muito transito para o trabalho.' },
    { id: '3', rate: 3, datetime: '', description: 'Hoje meu dia está, mais ou menos... Peguei muito transito para o trabalho.' },
    { id: '4', rate: 4, datetime: '', description: 'Hoje meu dia está, mais ou menos... Peguei muito transito para o trabalho.' },
    { id: '5', rate: 5, datetime: '', description: 'Hoje meu dia está, mais ou menos... Peguei muito transito para o trabalho.' },
    { id: '6', rate: 5, datetime: '', description: 'Hoje meu dia está, mais ou menos... Peguei muito transito para o trabalho.' },
    { id: '7', rate: 5, datetime: '', description: 'Hoje meu dia está, mais ou menos... Peguei muito transito para o trabalho.' },
    { id: '8', rate: 5, datetime: '', description: 'Hoje meu dia está, mais ou menos... Peguei muito transito para o trabalho.' },
  ]);


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


  return (
    <>
      <Header name={name} />

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <ListItem
            rate={item.rate}
            datetime={item.datetime}
            description={item.description}
          />
        )}
        ListEmptyComponent={(
          <View style={styles.emptyContentContainer}>
            <Text style={styles.emptyContentText}>
              Você ainda não{'\n'}
              registrou seu humor!
            </Text>
          </View>
        )}
      />

      <Footer>
        <View style={styles.footerContainer}>
          <Text style={styles.footerTitle}>
            {name ? 'Como está seu humor hoje?' : 'Qual é o seu nome?'}
          </Text>

          {!name && (
            <BaseInput label='Nome' asButton onPress={() => navigation.navigate('setUserName')}>
              <TextInput
                editable={false}
                pointerEvents='none'
                style={styles.footerInput}
                placeholder='Escreva seu nome aqui...'
                placeholderTextColor={theme.colors.textPlaceholder}
              />
            </BaseInput>
          )}

          {name && (
            <View style={styles.footerStarContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('detail', { rate: 1 })}>
                <AntDesign name="staro" size={36} color={theme.colors.textPlaceholder} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('detail', { rate: 2 })}>
                <AntDesign name="staro" size={36} color={theme.colors.textPlaceholder} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('detail', { rate: 3 })}>
                <AntDesign name="staro" size={36} color={theme.colors.textPlaceholder} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('detail', { rate: 4 })}>
                <AntDesign name="staro" size={36} color={theme.colors.textPlaceholder} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('detail', { rate: 5 })}>
                <AntDesign name="staro" size={36} color={theme.colors.textPlaceholder} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Footer>
    </>
  );
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
  },

  footerStarContainer: {
    gap: 8,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },

  emptyContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContentText: {
    textAlign: 'center',
    color: theme.colors.textPlaceholder,
    fontSize: theme.fonts.sizes.subtitle,
    fontFamily: theme.fonts.family.italic,
  },

  listContent: {
    gap: 8,
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});
