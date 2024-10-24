import { Typography } from '@mui/material';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <Typography color="error">Error: {message}</Typography>;
};

export default Error;
