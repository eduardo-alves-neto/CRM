import { Skeleton, Stack } from '@mui/material';

export const SkeletonLoading = () => {
  return (
    <Stack direction='column' spacing={2} mt={2}>
      <Stack direction='row' spacing={2}>
        <Skeleton variant='rectangular' width='100%' height={40} />
        <Skeleton variant='rectangular' width='100%' height={40} />
        <Skeleton variant='rectangular' width='100%' height={40} />
      </Stack>

      <Skeleton variant='rectangular' width='100%' height={40} />
      <Skeleton variant='rectangular' width='100%' height={300} />
      <Skeleton variant='rectangular' width='100%' height={120} />
    </Stack>
  );
};
