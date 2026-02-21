import { postImagePresignedUrl, uploadImageToS3 } from '@/api/employer';
import { useState } from 'react';

export const useImageUpload = () => {
  const [isUploading, setIsUploading] = useState(false);

  const uploadImage = async (file: File) => {
    setIsUploading(true);
    try {
      let presignedData;
      try {
        presignedData = await postImagePresignedUrl(file.name);
      } catch (e) {
        return {
          success: false,
          message: '이미지 업로드를 가져오지 못했습니다.',
          url: null,
        };
      }

      const fullUrl = presignedData.item.url;

      try {
        await uploadImageToS3(fullUrl, file);
      } catch (e) {
        return {
          success: false,
          message: '이미지 서버 전송에 실패했습니다.',
          url: null,
        };
      }

      return { success: true, message: '', url: fullUrl.split('?')[0] };
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadImage, isUploading };
};
