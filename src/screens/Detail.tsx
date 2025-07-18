import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { TNavigationScreenProps, TRouteProps } from '../Routes';
import { BaseInput } from '../shared/components/BaseInput';
import { theme } from '../shared/themes/Theme';
import { Button } from '../shared/components/Button';


export const DetailPage = () => {
  const navigation = useNavigation<TNavigationScreenProps>();
  const { params } = useRoute<TRouteProps<'detail'>>();


  const [description, setDescription] = useState('');
  const [rate, setRate] = useState(params.rate);
  const [date, setDate] = useState('');


  return (
    <>
      <View style={styles.footerContainer}>
        <Text style={styles.footerTitle}>
          Como está seu humor hoje?
        </Text>

        <View style={styles.footerStarContainer}>
          <TouchableOpacity onPress={() => setRate(1)}>
            <AntDesign
              size={36}
              name={rate >= 1 ? "star" : "staro"}
              color={rate >= 1 ? theme.colors.highlight : theme.colors.textPlaceholder}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRate(2)}>
            <AntDesign
              size={36}
              name={rate >= 2 ? "star" : "staro"}
              color={rate >= 2 ? theme.colors.highlight : theme.colors.textPlaceholder}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRate(3)}>
            <AntDesign
              size={36}
              name={rate >= 3 ? "star" : "staro"}
              color={rate >= 3 ? theme.colors.highlight : theme.colors.textPlaceholder}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRate(4)}>
            <AntDesign
              size={36}
              name={rate >= 4 ? "star" : "staro"}
              color={rate >= 4 ? theme.colors.highlight : theme.colors.textPlaceholder}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRate(5)}>
            <AntDesign
              size={36}
              name={rate >= 5 ? "star" : "staro"}
              color={rate >= 5 ? theme.colors.highlight : theme.colors.textPlaceholder}
            />
          </TouchableOpacity>
        </View>

        <BaseInput label='Data e hora'>
          <TextInput
            value={date}
            onChangeText={setDate}
            style={styles.footerInput}
            placeholder='Escreva seu nome aqui...'
            placeholderTextColor={theme.colors.textPlaceholder}
          />
        </BaseInput>

        <BaseInput label='Descreva mais sobre esse humor'>
          <TextInput
            multiline
            numberOfLines={16}
            value={description}
            onChangeText={setDescription}
            placeholder='Escreva seu nome aqui...'
            placeholderTextColor={theme.colors.textPlaceholder}
            style={{ ...styles.footerInput, ...styles.footerInputArea }}
          />
        </BaseInput>

        <View style={{ flex: 1 }} />

        <View style={styles.actionsContainer}>
          {params.id && (
            <Button variant='outlined' color={theme.colors.error}>
              <AntDesign
                size={18}
                name="delete"
                color={theme.colors.error}
              />
            </Button>
          )}
          <Button
            grow
            title='Cancelar'
            variant='outlined'
            onPress={() => navigation.goBack()}
          />
          <Button
            grow
            title='Salvar'
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    gap: 8,
    flex: 1,
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
  footerInputArea: {
    textAlignVertical: 'top',
    height: theme.fonts.sizes.body * 16,
  },

  footerStarContainer: {
    gap: 8,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },


  actionsContainer: {
    gap: 8,
    alignItems: 'center',
    flexDirection: 'row',
  }
});