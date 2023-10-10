import { FC, useState, useRef, ChangeEvent } from 'react';
import { Stack, Typography, IconButton, Button } from '@mui/material';
import Cropper, { Area, Point } from 'react-easy-crop';
import SvgSpriteIcon from '../../Common/SvgSprite';
import {
  ImageDialog,
  RotateButton,
  ZoomButton,
  CropWrapper,
  VisuallyHiddenInput,
} from './styles';
import RatioSelect from './RatioSelect';
import { aspectRatioMenu } from '@/assets/constants/aspectRatio';
import { getCroppedImage } from '@/helpers/cropImage';
import { IImageState } from '@/types/events';
import { saveNewImage } from '@/helpers/imageUrl';

interface EditImageProps {
  open: boolean;
  onClose: () => void;
  imageSrc: string;
  onChangeImage: (url: IImageState) => void;
  onUploadFile: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EditImage: FC<EditImageProps> = ({
  open,
  onClose,
  imageSrc,
  onChangeImage,
  onUploadFile,
}) => {
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [aspectRatio, setAspectRatio] = useState<number>(
    aspectRatioMenu[1].value
  );
  const [rotation, setRotation] = useState(0);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const onChangeAspectRatio = (value: number) => {
    setAspectRatio(value);
  };

  const onCropComplete = async (_: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onSaveImage = async () => {
    if (!croppedAreaPixels) {
      return;
    }

    const croppedImage = await getCroppedImage(
      imageSrc,
      croppedAreaPixels,
      rotation
    );
    if (!croppedImage) {
      return;
    }
    const newImage = await saveNewImage(croppedImage);
    onChangeImage(newImage);
    onClose();
  };

  const onLoadNewImage = async (e: ChangeEvent<HTMLInputElement>) => {
    await onUploadFile(e);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
    setCroppedAreaPixels(null);
    setAspectRatio(aspectRatioMenu[1].value);
  };

  return (
    <ImageDialog open={open} onClose={onClose}>
      <Stack gap={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ px: 0, py: 1 }}
        >
          <Typography component="h3" sx={{ fontWeight: 600 }}>
            Режим редагування фотографії
          </Typography>
          <IconButton
            sx={{ boxShadow: 'none', padding: 0 }}
            onClick={onClose}
            aria-label="close"
          >
            <SvgSpriteIcon iconId="close" />
          </IconButton>
        </Stack>
        <CropWrapper ref={containerRef} ratio={aspectRatio}>
          <Cropper
            image={imageSrc}
            crop={crop}
            aspect={aspectRatio}
            rotation={rotation}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            zoom={zoom}
            showGrid={false}
            objectFit="cover"
          />
        </CropWrapper>
        <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
          <RatioSelect onChangeValue={onChangeAspectRatio} />

          <Stack direction="row" gap={2} width="100%">
            <RotateButton
              aria-label="rotate-clockwise"
              onClick={() => setRotation((prev) => prev + 90)}
              sx={{ flexGrow: { xs: 1, md: 0 } }}
            >
              <SvgSpriteIcon iconId="rotate" />
            </RotateButton>
            <RotateButton
              aria-label="rotate-counterclockwise"
              sx={{
                marginRight: { xs: 0, md: 'auto' },
                flexGrow: { xs: 1, md: 0 },
              }}
              onClick={() => setRotation((prev) => prev - 90)}
            >
              <SvgSpriteIcon iconId="rotate" sx={{ transform: 'scaleX(-1)' }} />
            </RotateButton>

            <ZoomButton
              aria-label="zoom in image"
              onClick={() => setZoom((prev) => prev + 0.1)}
              sx={{ marginRight: { xs: 0, md: 1 }, flexGrow: { xs: 1, md: 0 } }}
            >
              <SvgSpriteIcon iconId="zoom-in" />
            </ZoomButton>
            <ZoomButton
              aria-label="zoom out image"
              onClick={() => setZoom((prev) => prev - 0.1)}
              sx={{ flexGrow: { xs: 1, md: 0 } }}
            >
              <SvgSpriteIcon iconId="zoom-out" />
            </ZoomButton>
          </Stack>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          gap={3}
          justifyContent="center"
        >
          <Button
            variant="secondary"
            sx={{ width: { xs: '100%', md: 264 } }}
            component="label"
          >
            Змінити фото
            <VisuallyHiddenInput
              type="file"
              ref={imageRef}
              onChange={onLoadNewImage}
            />
          </Button>
          <Button sx={{ width: { xs: '100%', md: 264 } }} onClick={onSaveImage}>
            Зберегти зміни
          </Button>
        </Stack>
      </Stack>
    </ImageDialog>
  );
};

export default EditImage;
