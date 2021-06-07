import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Image from './image';
import Axios from 'axios';

export default function Images() {
  const [images, setimages] = useState([]);

  const inputRef = useRef(null);
  const varRef = useRef(images.length);

  useEffect(() => {
    inputRef.current.focus();
    Axios.get(
      'https://api.unsplash.com/photos/?client_id=8zkSPstt1cIVHrBRoCVx1dBWGHqryPF9Tl8WkvjI9pM'
    ).then((res) => {
      setimages(res.data);
    });
  }, []);

  useEffect(() => {
    varRef.current = varRef.current + 1;
  });

  const [newImageUrl, setNewImageUrl] = useState('');

  function handleRemove(index) {
    setimages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  function ShowImage() {
    return images.map((img, index) => (
      <Image
        image={img.url.image}
        handleRemove={handleRemove}
        index={index}
        key={index}
      />
    ));
  }
}
