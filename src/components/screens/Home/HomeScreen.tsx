import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { TitleIntro } from '../../molecules/TitleIntro/TitleIntro';

interface IProps {

};

export const HomeScreen: FunctionComponent<IProps> = () => {

  const [ swidth,setSwidth ] = useState('50%');
  const [ leftDistance,setLeftDistance ] = useState('50%');
  const [ translateText,setTranslateText ] = useState('-100%');
  const [ translateMenu,setTranslateMenu ] = useState('0');
  const [ scrollPosition,setScrollPosition ] = useState(0);
  const [ opacityGrade,setOpacityGrade ] = useState('1');
  const [ opacityText,setOpacityText ] = useState('0');
  const [ cHeight,setCHeight ] = useState(0);

  const handleWidth = () => {
    setSwidth('100%');
    setLeftDistance('100%');
    setTranslateText('0');
    setOpacityText('1');
  }

  const handleWidthReverse = () => {
    setSwidth('50%');
    setLeftDistance('50%');
    setTranslateText('-100%');
    setOpacityText('0');
  }

  const handleScroll = (event: any) => {
    const { clientHeight,scrollTop } = event.target;
    setScrollPosition(scrollTop);
    setCHeight(clientHeight);
  };

  useEffect(() => {
    if(scrollPosition >= 100) {
      handleWidth();
    } else {
      handleWidthReverse();
    }

    if(scrollPosition >= cHeight) {
      setOpacityGrade('0');
    } else {
      setOpacityGrade('1');
    }
  }, [scrollPosition]);

  useEffect( () => {
    setOpacityGrade('1');
  },[]);

  const lettersToSend = ['H','E','L','L','O'];
  const arrayOfLetters = [
    ['H','H','S','H','C','O'],
    ['E','O','A','A','I','L'],
    ['L','L','L','L','A','À'],
    ['L','A','U','L','O','!'],
    ['O','!','T','0','!','!']
  ]

  return (
    <>
      <div className='fixed xl:w-[calc(100vw_-_88px)] xl:h-[calc(100vh_-_88px)] md:w-[calc(100vw_-_48px)] md:h-[calc(100vh_-_48px)] h-screen w-screen xl:m-[44px] md:m-[24px] top-0 left-0 overflow-hidden' style={{ transform: 'translateX('+translateMenu+')'}}>
        <div className='bg-web-orange relative h-full duration-100 md:duration-500 ease-in-out md:flex md:items-center p-6 md:p-8 xl:p-14' style={{width: swidth}}>
          <div className='w-[340px] md:w-[500px] mt-[100vh] md:relative absolute md:mt-0 ease-in-out duration-100 md:duration-500' style={ { opacity: opacityText, transform: 'translate(' + translateText + ',-300%)' } }>
            <Paragraph text={ 'I ❤ Development' } classes={ 'lato text-sm text-white italic mb-4' } />
            <Paragraph text={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis mauris pulvinar, lobortis augue eu.' } classes={ 'gilroy text-base xl:text-3xl md:text-2xl extra-bold text-white' } />
          </div>
        </div>
        <div className='absolute inline-block top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] duration-500 ease-in-out' style={{ left: leftDistance, opacity: opacityGrade }}>
          <TitleIntro texts={ lettersToSend } changes={ arrayOfLetters }   />
        </div>
      </div>
      <div onScroll={ handleScroll } className='w-full overflow-x-hidden overflow-y-auto relative' style={{ height: 'inherit', background: 'transparent', transform: 'translateX('+translateMenu+')'}}>
        <div className='relative w-full h-full z-100 bg-web-gray' style={{ marginTop: '200vh'}}>

        </div>
      </div>
    </>
  )
}
