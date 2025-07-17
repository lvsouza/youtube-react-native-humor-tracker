import { Pressable, StyleSheet, Text } from 'react-native';
import { theme } from '../themes/Theme';



interface IButtonProps {
  title?: string;
  color?: string;
  grow?: boolean;
  onPress?: () => void;
  children?: React.ReactNode;
  variant?: 'contained' | 'outlined';
}
export const Button = ({ children, title, grow, color, variant = 'contained', onPress }: IButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...styles.button,
        ...(grow ? { flexGrow: 1 } : {}),
        ...(pressed ? styles.buttonPressed : {}),
        ...(variant === 'contained' ? styles.buttonContained : {}),
        ...(variant === 'outlined'
          ? {
            ...styles.buttonOutlined,
            ...(color && { borderColor: color })
          }
          : {}
        ),
      })}
    >
      {children}
      {!children && (
        <Text
          style={{
            ...styles.buttonText,
            ...(variant === 'contained' ? styles.buttonContainedText : {}),
            ...(variant === 'outlined' ? styles.buttonOutlinedText : {}),
          }}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonContained: {
    backgroundColor: theme.colors.primary,
  },
  buttonOutlined: {
    padding: 10,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.primaryText,
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.bold,
  },
  buttonContainedText: {
    color: theme.colors.primaryText,
  },
  buttonOutlinedText: {
    color: theme.colors.primary,
  },
});
