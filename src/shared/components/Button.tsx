import { Pressable, StyleSheet, Text } from 'react-native';
import { theme } from '../themes/Theme';



interface IButtonProps {
  title?: string;
  children?: React.ReactNode;
}
export const Button = ({ children, title }: IButtonProps) => {


  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        ...(pressed ? styles.buttonPressed : {})
      })}
    >
      {children}
      {!children && <Text style={styles.buttonText}>{title}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: theme.colors.primaryText,
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
  }
});
