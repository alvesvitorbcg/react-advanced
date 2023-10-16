import { Button, Typography } from '@mui/material';

export function CustomButton({
  onClick,
  Icon,
  text,
}: {
  onClick: Function;
  Icon?: any;
  text: string;
}) {
  return (
    <Button variant="contained" onClick={() => onClick()}>
      <div className="flex-row flex-row-middle">
        {Icon}
        <Typography fontSize={14} color="white">
          {text}
        </Typography>
      </div>
    </Button>
  );
}
