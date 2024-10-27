import { Launch } from '../../generated/graphql';

export interface LaunchListProps {
  launches: Launch[];
}

export interface InfoCardProps {
  title: string;
  subtitle: string;
  colorScheme: 'primary' | 'secondary';
}

export interface LaunchItemProps {
  launch: Launch;
  isSelected: boolean;
  maxLaunchesSelected: boolean;
  toggleLaunchSelection: (launch: Launch) => void;
}

export interface LaunchInformationProps {
  launch: Launch;
}

export interface ErrorProps {
  message: string;
}
