import React, { FunctionComponent } from 'react';
import { Heading } from '../../atoms/Heading/Heading';
import { Image } from '../../atoms/Image/Image';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import './styles.scss';

interface IProps {
  img: string,
  imgAlt: string,
  color: string,
  accent: string,
  hText: string,
  pText: string
}

export const WorkBox: FunctionComponent<IProps> = ({ img,imgAlt,color,accent,hText,pText }) => {
  return (
    <div className='w-full p-0 m-0 relative work-box overflow-hidden cursor-pointer'>
      <Image source={ img } classes={ 'w-full h-full relative object-cover' } altText={ imgAlt } />
      <div className='flex absolute justify-center items-center w-full h-full p-[20%] box-border top-0 left-0' style={{ background: color }}>
          <div className='inline-block'>
            <Heading classes={'text-lg lato italic mb-4'} text={ hText } type={'h4'} color={ accent } />
            <Paragraph text={ pText } classes={'text-sm text-white'} />
          </div>
      </div>
    </div>
  )
}
