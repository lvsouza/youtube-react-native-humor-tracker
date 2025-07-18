import { StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { theme } from '../themes/Theme';


interface IListItemProps {
  rate: number;
  datetime: number;
  description: string;
}
export const ListItem = ({ rate, datetime, description }: IListItemProps) => {


  return (
    <View style={styles.container}>
      <Text style={styles.dateTimeText}>
        18/07/2025 às 13:00
      </Text>

      <View style={styles.starsContainer}>
        {Array.from(new Array(rate)).map((_, index, all) => (
          <AntDesign
            size={24}
            key={index}
            name={"star"}
            color={theme.colors.highlight}
            style={{
              ...styles.starFill,
              ...(index === 0 ? styles.starFillStart : {}),
              ...((index + 1) === all.length ? styles.starFillEnd : {}),
            }}
          />
        ))}
        {Array.from(new Array(5 - rate)).map((_, index, all) => (
          <AntDesign
            size={24}
            key={index}
            name={"staro"}
            style={styles.star}
            color={theme.colors.highlight}
          />
        ))}
      </View>

      <Text style={styles.descriptionText}>
        {description}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    gap: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: theme.colors.paper,
  },
  dateTimeText: {
    fontSize: theme.fonts.sizes.body,
    color: theme.colors.textPlaceholder,
    fontFamily: theme.fonts.family.regular,
  },
  starsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  star: {
    padding: 4,
  },
  starFill: {
    padding: 4,
    backgroundColor: theme.colors.backgroundHighlight,
  },
  starFillStart: {
    padding: 4,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: theme.colors.backgroundHighlight,
  },
  starFillEnd: {
    padding: 4,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: theme.colors.backgroundHighlight,
  },
  descriptionText: {
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
  },
});
