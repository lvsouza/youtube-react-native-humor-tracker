import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { v4 as uuid } from 'uuid';

import { TNavigationScreenProps, TRouteProps } from '../Routes';
import { BaseInput } from '../shared/components/BaseInput';
import { Button } from '../shared/components/Button';
import { theme } from '../shared/themes/Theme';


export const DetailPage = () => {
  const navigation = useNavigation<TNavigationScreenProps>();
  const { params } = useRoute<TRouteProps<'detail'>>();
  const insets = useSafeAreaInsets();


  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [datetime, setDatetime] = useState(new Date());
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState(params.rate);


  const handleSave = async () => {
    const newItem = {
      rate,
      id: uuid(),
      description,
      datetime: datetime.getTime(),
    };

    try {
      const items = await AsyncStorage
        .getItem('humor-items')
        .then(itemsAsString => !itemsAsString ? [] : JSON.parse(itemsAsString) as any[]);

      items.unshift(newItem);

      await AsyncStorage.setItem('humor-items', JSON.stringify(items));

      navigation.popTo('home', { newItem });
    } catch (e) {
      // saving error
    }
  }


  return (
    <View style={{ ...styles.footerContainer, paddingBottom: insets.bottom }}>
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

      <BaseInput label='Data e hora' asButton onPress={() => setShowDateTimePicker(true)}>
        <TextInput
          value={datetime.toLocaleString('pt-Br')}
          editable={false}
          pointerEvents='none'
          style={styles.footerInput}
          placeholder='Selecione uma data e hora...'
          placeholderTextColor={theme.colors.textPlaceholder}
        />
      </BaseInput>
      <DateTimePickerModal
        date={datetime}
        mode="datetime"
        isVisible={showDateTimePicker}
        onCancel={() => setShowDateTimePicker(false)}
        onConfirm={(date) => { setShowDateTimePicker(false); setDatetime(date) }}
      />

      <BaseInput label='Descreva mais sobre esse humor'>
        <TextInput
          multiline
          numberOfLines={16}
          value={description}
          onChangeText={setDescription}
          placeholder='Escreva uma nota...'
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
          onPress={handleSave}
        />
      </View>
    </View>
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