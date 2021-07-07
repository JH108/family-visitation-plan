import { Theme } from 'react-native-paper';

export default interface CustomTheme extends Theme {
  fontSizes: {
    small: number;
    medium: number;
    large: number;
  };
  iconSizes: {
    small: number;
    medium: number;
    large: number;
  };
}