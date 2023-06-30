import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { services, technologies } from '../constants';
import csharp from "../assets/csharp.png";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs
} from "../assets";



// Array of images
const images = [docker, javascript, threejs, csharp];

// Function to pick a random image
const getRandomImage = () => {
  return images[Math.floor(Math.random() * images.length)];
}

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} img={getRandomImage()} />
          {/* The BallCanvas and its geo metric/3d parts is used
           with canvas the rest of the shape size and interaction is defined by you */}
        </div> 
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
