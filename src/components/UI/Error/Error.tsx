import { Typography } from '@mui/material';
import { ErrorProps } from '../../../utils/types/types';

const Error = ({ message }: ErrorProps) => {
  return <Typography color="error">Error: {message}</Typography>;
};

export default Error;
