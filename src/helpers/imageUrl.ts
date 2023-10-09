import { IImageState } from '@/types/events';
// import { addNewImage } from '@/api';
const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const generateNewOriginalImageUrl = (id: string) => {
  return `${BASE_URL}/admin/images/temp?filename=${id}&type=ORIGINAL`;
};

export const generateSavedOriginalImageUrl = (id: string) => {
  return `${BASE_URL}/images?filename=${id}&type=ORIGINAL`;
};

export const createImageState = (
  id: string,
  status: 'new' | 'saved'
): IImageState => {
  const url =
    status === 'new'
      ? generateNewOriginalImageUrl(id)
      : generateSavedOriginalImageUrl(id);

  return { id, status, url };
};

export const saveNewImage = async (file: File | Blob) => {
  // const {
  //   data: { imageId },
  // } = await addNewImage(file);
  const url = URL.createObjectURL(file);
  const imageId = 'some-id-long-long';
  const image: IImageState = {
    id: imageId,
    url,
    status: 'new',
  };
  return image;
  // return createImageState(imageId, 'new');
};
