import { Text, View } from 'react-native';


interface IFirstComponentProps {
  order: number;
}
export const FirstComponent = (props: IFirstComponentProps) => {

  return (
    <View>
      <Text>FirstComponent {props.order}</Text>
    </View>
  );
}
