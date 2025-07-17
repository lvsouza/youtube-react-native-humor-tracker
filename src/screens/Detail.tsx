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


  return (
    <>
      <View style={styles.footerContainer}>
        <Text style={styles.footerTitle}>
          Como está seu humor hoje?
        </Text>

        <View style={styles.footerStarContainer}>
          <TouchableOpacity onPress={() => { }}>
            <AntDesign
              size={36}
              name={params.rate >= 1 ? "star" : "staro"}
              color={params.rate >= 1 ? theme.colors.highlight : theme.colors.textPlaceholder}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <AntDesign
              size={36}
              name={params.rate >= 2 ? "star" : "staro"}
              color={params.rate >= 2 ? theme.colors.highlight : theme.colors.textPlaceholder}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <AntDesign
              size={36}
              name={params.rate >= 3 ? "star" : "staro"}
              color={params.rate >= 3 ? theme.colors.highlight : theme.colors.textPlaceholder}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <AntDesign
              size={36}
              name={params.rate >= 4 ? "star" : "staro"}
              color={params.rate >= 4 ? theme.colors.highlight : theme.colors.textPlaceholder}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <AntDesign
              size={36}
              name={params.rate >= 5 ? "star" : "staro"}
              color={params.rate >= 5 ? theme.colors.highlight : theme.colors.textPlaceholder}
            />
          </TouchableOpacity>
        </View>

        <BaseInput label='Data e hora'>
          <TextInput
            style={styles.footerInput}
            placeholder='Escreva seu nome aqui...'
            placeholderTextColor={theme.colors.textPlaceholder}
          />
        </BaseInput>

        <BaseInput label='Descreva mais sobre esse humor'>
          <TextInput
            multiline
            numberOfLines={16}
            placeholder='Escreva seu nome aqui...'
            placeholderTextColor={theme.colors.textPlaceholder}
            style={{ ...styles.footerInput, ...styles.footerInputArea }}
          />
        </BaseInput>

        <View style={{ flex: 1 }} />

        <View style={styles.actionsContainer}>
          <Button variant='outlined' color={theme.colors.error}>
            <AntDesign
              size={18}
              name={"delete"}
              color={theme.colors.error}
            />
          </Button>
          <Button
            grow
            title='Cancelar'
            variant='outlined'
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