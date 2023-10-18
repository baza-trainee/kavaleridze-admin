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

interface DragDropWrapperProps {
  isError: boolean;
}

export const DragDropWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isError',
})<DragDropWrapperProps>(({ theme, isError }) => ({
  display: 'block',
  width: '100%',
  height: 'auto',
  maxHeight: 900,
  border: '1px solid',
  borderRadius: '4px',
  overflow: 'hidden',
  borderColor: isError ? theme.palette.error.main : 'transparent',
}));

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

interface TextAreaContainerProps {
  errorValue: boolean;
}

export const TextAreaContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'errorValue',
})<TextAreaContainerProps>(({ theme, errorValue }) => ({
  borderRadius: '8px',
  border: '1px solid',
  borderColor: errorValue
    ? theme.palette.error.main
    : theme.palette.common.black,
  overflow: 'hidden',

  '&:hover, &:focus-within': {
    borderColor: theme.palette.primary.main,
  },
}));

export const CustomTextArea = styled('textarea')(({ theme, name }) => ({
  width: '100%',
  minHeight: '100%',
  height: name === 'summary' ? 112 : 304,
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid',
  borderColor: 'transparent',
  backgroundColor: theme.palette.common.white,
  resize: 'none',
  outline: 'none',

  fontFamily: 'Raleway',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.429,
  fontVariantNumeric: 'lining-nums proportional-nums',

  scrollbarColor: `${theme.palette.gray.main} ${theme.palette.gray.light}`,
  scrollbarWidth: 'thin',

  '&::-webkit-scrollbar': {
    width: 10,
    cursor: 'pointer',
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.gray.light,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: '8px',
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: '8px',
    backgroundClip: 'content-box',
    backgroundColor: theme.palette.gray.main,
  },

  [`${theme.breakpoints.up('md')}`]: {
    fontSize: 16,
    lineHeight: 1.5,
    height: name === 'summary' ? 100 : 292,
  },
}));
