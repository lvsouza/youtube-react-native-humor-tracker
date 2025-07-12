import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../themes/Theme';



interface IHeaderProps {
  name: string | undefined;
}
export const Header = ({ name }: IHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Olá,</Text>
      <Text style={styles.headerBoldText}>{!name ? 'Seu nome é?' : `${name}!`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    gap: 8,
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: theme.fonts.sizes.title,
    fontFamily: theme.fonts.family.regular,
  },
  headerBoldText: {
    color: theme.colors.primary,
    fontSize: theme.fonts.sizes.title,
    fontFamily: theme.fonts.family.bold,
  },
});
