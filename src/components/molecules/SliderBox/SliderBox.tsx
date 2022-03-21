import React, { FunctionComponent } from 'react';
import { Heading } from '../../atoms/Heading/Heading';
import { ProgressBar } from '../../atoms/ProgressBar/ProgressBar';

interface IProps {
  text: string;
  color: string;
}

export const SliderBox: FunctionComponent<IProps> = ({ text,color }) => {
  return (
    <div className='w-full mb-10'>
      <Heading type={ 'h4' } classes={ 'lato text-base extra-bold mb-5' } text={ text } />
      <ProgressBar color={color} percentage={'w-[37%]'} />
    </div>
  )
}
