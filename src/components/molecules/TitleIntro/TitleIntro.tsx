import React, { FunctionComponent } from 'react';
import { TextIntro } from '../../atoms/TextIntro/TextIntro';

interface IProps {
  texts: Array<string>,
  changes: Array<any>
}

export const TitleIntro: FunctionComponent<IProps> = ({ texts,changes }) => {
  return (
    <div className='flex relative'>
      <div className='h-[160px] md:h-[240px] overflow-y-hidden'>
        <div className='flex flex-nowrap w-38 md:w-72 justify-center overflow-hidden'>
          <TextIntro text={ texts[0] } changes={changes[0]} />
          <TextIntro text={ texts[1] } changes={changes[1]} />
        </div>
        <div className='flex flex-nowrap w-38 md:w-72 justify-center overflow-hidden'>
          <TextIntro text={ texts[2] } changes={changes[2]} /> 
          <TextIntro text={ texts[3] } changes={changes[3]} />
          <TextIntro text={ texts[4] } changes={changes[4]} />
        </div>
      </div>
      <div className='w-10 h-10 md:w-12 md:h-12 bg-web-orange rounded-full mt-[160px] md:mt-[240px] translate-y-[-100%]'>

      </div>
    </div>
    
  )
}
