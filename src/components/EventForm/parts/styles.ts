import { styled, Box, Dialog, IconButton, Select } from '@mui/material';

export const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
interface DragAndDropWrapperProps {
  error: boolean;
}
export const DragDropWrapper = styled(Box)<DragAndDropWrapperProps>(
  ({ error, theme }) => ({
    display: 'block',
    width: '100%',
    height: 'auto',
    maxHeight: 900,
    border: '1px solid',
    borderColor: error ? theme.palette.error.main : 'transparent',
    borderRadius: '4px',
    overflow: 'hidden',
  })
);

interface AspectRatioProp {
  ratio: number;
}

export const CropWrapper = styled(Box)<AspectRatioProp>(({ ratio }) => ({
  width: '100%',
  height: 'auto',
  aspectRatio: ratio,
  position: 'relative',
  borderRadius: '4px',
  overflow: 'hidden',
}));

export const UploadImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 400,
  backgroundColor: theme.palette.gray.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ImageDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    margin: 0,
    width: '100%',
    maxWidth: '500px',
    height: 'auto%',
    maxHeight: '100%',
    padding: '16px 24px',

    [`${theme.breakpoints.up('md')}`]: {
      maxHeight: 'calc(100% - 64px)',
      padding: '24px 32px',
      maxWidth: 617,
      height: 'auto',
    },

    [`${theme.breakpoints.up('lg')}`]: {
      height: 'auto',
      width: 914,
      maxWidth: 914,
      maxHeight: 'fit-content',
      padding: '32px 40px',
    },
  },
}));

export const RotateButton = styled(IconButton)(({ theme }) => ({
  padding: '10px 16px',
  backgroundColor: theme.palette.gray.light,
  color: theme.palette.common.black,

  '&:hover': {
    backgroundColor: theme.palette.gray.main,
    color: theme.palette.common.black,
  },
}));

export const ZoomButton = styled(IconButton)(({ theme }) => ({
  padding: '10px 16px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.black,

  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.black,
  },
}));

export const CustomSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  minWidth: 198,
  backgroundColor: theme.palette.gray.light,
  fontSize: 16,
  fontWeight: 500,

  transition: theme.transitions.create('backgroundColor'),

  '&:hover': {
    backgroundColor: theme.palette.gray.main,
  },

  '.MuiSelect-outlined': {
    padding: '8px 16px',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
    transition: theme.transitions.create('borderColor'),
  },

  '& .MuiSelect-select[aria-expanded=true] ~ .MuiOutlinedInput-notchedOutline':
    {
      borderColor: 'transparent',
    },

  '& .MuiSelect-select[aria-expanded=false] ~ .MuiOutlinedInput-notchedOutline':
    {
      borderColor: 'transparent',
    },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },

  [`${theme.breakpoints.up('md')}`]: {
    width: 198,
    fontSize: 18,
  },
}));
