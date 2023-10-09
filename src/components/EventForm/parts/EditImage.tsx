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

    if (croppedImage) {
      onChangeImage(croppedImage);
    }
    onClose();
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
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" gap={2}>
            <RatioSelect onChangeValue={onChangeAspectRatio} />

            <RotateButton
              aria-label="rotate-clockwise"
              onClick={() => setRotation((prev) => prev + 90)}
            >
              <SvgSpriteIcon iconId="rotate" />
            </RotateButton>
            <RotateButton
              aria-label="rotate-counterclockwise"
              onClick={() => setRotation((prev) => prev - 90)}
            >
              <SvgSpriteIcon iconId="rotate" sx={{ transform: 'scaleX(-1)' }} />
            </RotateButton>
          </Stack>
          <Stack direction="row" gap={3}>
            <ZoomButton
              aria-label="zoom in image"
              onClick={() => setZoom((prev) => prev + 0.1)}
            >
              <SvgSpriteIcon iconId="zoom-in" />
            </ZoomButton>
            <ZoomButton
              aria-label="zoom out image"
              onClick={() => setZoom((prev) => prev - 0.1)}
            >
              <SvgSpriteIcon iconId="zoom-out" />
            </ZoomButton>
          </Stack>
        </Stack>
        <Stack direction="row" gap={3} justifyContent="center">
          <Button variant="secondary" sx={{ width: 264 }} component="label">
            Змінити фото
            <VisuallyHiddenInput
              type="file"
              ref={imageRef}
              onChange={onUploadFile}
            />
          </Button>
          <Button sx={{ width: 264 }} onClick={onSaveImage}>
            Зберегти зміни
          </Button>
        </Stack>
      </Stack>
    </ImageDialog>
  );
};

export default EditImage;
