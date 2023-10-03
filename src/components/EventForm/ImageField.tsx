import { FC, useState, useRef, DragEvent, ChangeEvent } from 'react';
import { InputLabel, Box, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

import picture from '@/assets/images/picture.svg';
import { InputFormProps } from '@/types/events';
import { VisuallyHiddenInput } from './styles';

const aspectRatioMenu = [
  { title: '4/3', value: 4 / 3 },
  { title: '16/9', value: 16 / 9 },
  { title: '21/9', value: 21 / 9 },
];

interface IImageState extends File {
  url: string;
}

const ImageField: FC<InputFormProps> = ({ control, label, name, required }) => {
  const [image, setImage] = useState<IImageState | null>(null);
  //   const [aspectRatio, setAspectRatio] = useState(aspectRatioMenu[1].value);
  const aspectRatio = aspectRatioMenu[1].value;
  // const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const imageRef = useRef(null);
  //   const onOpenModal = () => setOpen(true);
  //   const onCloseModal = () => setOpen(false);

  const setFile = (file: File) => {
    setImage({ ...file, url: URL.createObjectURL(file) });
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const onUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || files.length === 0) return;
    if (files[0].type.split('/')[0] !== 'image') return;

    setFile(files[0]);
  };

  const onDragLeave = (e: DragEvent) => {
    e.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <InputLabel shrink={false} htmlFor={field.name} required={required}>
            {label}
          </InputLabel>
          <Box
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            draggable="true"
            // onDragStart={onDragStart}
            sx={{
              display: 'block',
              mt: 3,
              width: '100%',
              height: 'auto',
              aspectRatio: aspectRatio,
              borderRadius: '4px',
            }}
          >
            {image ? (
              <Box
                component="img"
                src={image.url}
                alt="events image"
                sx={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: aspectRatio,
                  position: 'relative',
                }}
              />
            ) : (
              <Box
                component="label"
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: (theme) => theme.palette.gray.light,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src={picture}
                  alt="picture"
                  sx={{ mr: 1 }}
                />
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    Завантажити файл
                  </Typography>
                  <Typography>допустимий формат файлів — .jpeg</Typography>
                </Box>
                <VisuallyHiddenInput
                  type="file"
                  ref={imageRef}
                  onChange={onUploadImage}
                />
              </Box>
            )}
          </Box>
        </>
      )}
    />
  );
};

export default ImageField;
