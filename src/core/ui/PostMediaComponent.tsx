import { FC } from 'react';
import Image from 'next/image';

export const PostMediaComponent: FC<{ url: string }> = ({ url }) => {
  const isVideo = url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
  const isImage = url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.gif');

  if (isVideo) {
    return (
      <video controls className='rounded-md'>
        <source src={url} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
    );
  } else if (isImage) {
    return <Image src={url} alt="Imagen" className='rounded-md' width={1000} height={1000}/>;
  } else {
    return <p>No se pudo determinar el tipo de contenido para la URL proporcionada.</p>;
  }
};
