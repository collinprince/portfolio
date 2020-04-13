import React from 'react';
import { ReactPhotoCollage } from 'react-photo-collage';
import Campus from '../assets/campus.jpg';
import Steps from '../assets/steps.jpg';
import SM from '../assets/sm.jpg';
import Getty from '../assets/getty.jpg'
 
const setting = {
  width: '100%',
  height: ['30vh', '20vh'],
  layout: [1, 4],
  photos: [
    { src: Campus},
    { src: Steps},
    { src: SM},
    { src: Getty},
  ],
  showNumOfRemainingPhotos: true
};
 
function PhotoCollage() {
  return (
    <ReactPhotoCollage {...setting}/>
  );
}

export default PhotoCollage;