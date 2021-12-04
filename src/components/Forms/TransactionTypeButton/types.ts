import { TouchableOpacityProps } from 'react-native';

export interface Props extends TouchableOpacityProps, IconProps {
  title: string;
  isActive: boolean;
}

export interface IconProps {
  type: 'up' | 'down';
}

export interface ContainerProps extends IconProps {
  isActive: boolean;
}