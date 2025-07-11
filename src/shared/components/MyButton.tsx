import { TouchableOpacity, Text, View } from 'react-native';


interface IMyButtonProps {
  order?: number;
  onPress?: () => void;
  children?: React.ReactNode;
}
export const MyButton = (props: IMyButtonProps) => {

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        {props.children || <Text>MyButton</Text>}
      </View>
    </TouchableOpacity>
  );
}
