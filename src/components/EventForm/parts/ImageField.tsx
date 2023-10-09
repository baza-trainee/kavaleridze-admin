import { FC, useState, useRef, DragEvent, ChangeEvent, useEffect } from 'react';
import { InputLabel, Box, Typography, IconButton } from '@mui/material';
import { Controller } from 'react-hook-form';
import SvgSpriteIcon from '../../Common/SvgSprite';
import picture from '@/assets/images/picture.svg';
import { InputFormProps } from '@/types/events';
import { VisuallyHiddenInput, DragDropWrapper, UploadImageBox } from './styles';
import EditImage from './EditImage';
import { IImageState } from '@/types/events';
import { saveNewImage, createImageState } from '@/helpers/imageUrl';
import { useController } from 'react-hook-form';

const ImageField: FC<InputFormProps> = ({ control, label, name, required }) => {
  const {
    field: { value, onChange },
  } = useController({ control, name });
  const [image, setImage] = useState<IImageState | null>(null);
  const [banner, setBanner] = useState<IImageState | null>(null);
  const [open, setOpen] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    if (value) {
      const imageState = createImageState(value, 'saved');
      setImage(imageState);
      setBanner(imageState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (banner) onChange(banner.id);
  }, [banner, onChange]);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const setFile = async (file: File) => {
    const serverImage = await saveNewImage(file);
    setImage(serverImage);
    setBanner(serverImage);
  };

  const onChangeImage = (image: IImageState) => {
    setBanner(image);
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

  const onUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || files.length === 0) return;
    if (files[0].type.split('/')[0] !== 'image') return;

    setFile(files[0]);
  };

  const onDragLeave = (e: DragEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <InputLabel shrink={false} htmlFor={field.name} required={required}>
              {label}
            </InputLabel>
            <DragDropWrapper
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              draggable="true"
            >
              {banner ? (
                <Box position="relative">
                  <Box
                    component="img"
                    src={banner.url}
                    alt="events image"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: 900,
                    }}
                  />
                  <IconButton
                    aria-label="edit-image"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      boxShadow:
                        '0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px 0px rgba(0, 0, 0, 0.03), 0px 10px 6px 0px rgba(0, 0, 0, 0.02), 0px 17px 7px 0px rgba(0, 0, 0, 0.01), 0px 27px 7px 0px rgba(0, 0, 0, 0.00)',
                    }}
                    onClick={onOpenModal}
                  >
                    <SvgSpriteIcon iconId="edit" />
                  </IconButton>
                </Box>
              ) : (
                <UploadImageBox component="label">
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
                </UploadImageBox>
              )}
            </DragDropWrapper>
          </>
        )}
      />
      {image && (
        <EditImage
          open={open}
          onClose={onCloseModal}
          imageSrc={image.url}
          onChangeImage={onChangeImage}
          onUploadFile={onUploadImage}
        />
      )}
    </>
  );
};

export default ImageField;
