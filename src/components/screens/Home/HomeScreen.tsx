import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { Menu } from '../../molecules/Menu/Menu';
import { TitleIntro } from '../../molecules/TitleIntro/TitleIntro';
interface IProps {

};

export const HomeScreen: FunctionComponent<IProps> = () => {

  const [ swidth,setSwidth ] = useState('50%');
  const [ leftDistance,setLeftDistance ] = useState('50%');
  const [ translateText,setTranslateText ] = useState('-100%');
  const [ translateMenu,setTranslateMenu ] = useState('-100%');
  const [ scrollPosition,setScrollPosition ] = useState(0);
  const [ opacityGrade,setOpacityGrade ] = useState('1');
  const [ opacityText,setOpacityText ] = useState('0');
  const [ cHeight,setCHeight ] = useState(0);
  const [ menuOpen,setMenuOpen ] = useState(false);

  const handleWidth = () => {
    setSwidth('100%');
    setLeftDistance('100%');
    setTranslateText('0');
    setOpacityText('1');
  }

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
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
    if(menuOpen) {
      setTranslateMenu('0')
    } else {
      setTranslateMenu('-100%')
    }
  }, [menuOpen]);

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
      <svg width="49" height="36" viewBox="0 0 49 36" fill="none" xmlns="http://www.w3.org/2000/svg" className='fixed top-[50%] left-2 translate-y-[-50%] z-50' onClick={ handleMenu } >
        <rect x="4.66669" y="8" width="23.3333" height="4.66667" fill="#1D1D1D"/>
        <rect x="11.6667" y="22" width="16.3333" height="4.66667" fill="#1D1D1D"/>
        <rect y="15" width="28" height="4.66667" fill="#1D1D1D"/>
        <path d="M40.047 26.4905L48 26.4905L48 27.794L42.863 27.794C42.6577 27.794 42.4358 27.783 42.1975 27.761L46.713 30.1645C46.9293 30.2782 47.0375 30.4523 47.0375 30.687L47.0375 30.896C47.0375 31.1307 46.9293 31.3048 46.713 31.4185L42.181 33.8495C42.302 33.8385 42.4212 33.8293 42.5385 33.822C42.6558 33.8147 42.764 33.811 42.863 33.811L48 33.811L48 35.1145L40.047 35.1145L40.047 33.998C40.047 33.932 40.0488 33.8752 40.0525 33.8275C40.0562 33.7798 40.0653 33.7377 40.08 33.701C40.0947 33.6607 40.1185 33.6258 40.1515 33.5965C40.1845 33.5635 40.2285 33.5323 40.2835 33.503L44.7 31.1215C44.8173 31.0592 44.9383 31.0023 45.063 30.951C45.1877 30.896 45.316 30.8428 45.448 30.7915C45.3123 30.7402 45.1822 30.687 45.0575 30.632C44.9292 30.577 44.8063 30.5183 44.689 30.456L40.2835 28.1075C40.2285 28.0782 40.1845 28.047 40.1515 28.014C40.1185 27.981 40.0947 27.9462 40.08 27.9095C40.0653 27.8692 40.0562 27.8252 40.0525 27.7775C40.0488 27.7298 40.047 27.673 40.047 27.607L40.047 26.4905ZM41.224 22.1311L43.4295 22.1311L43.4295 19.3481L44.568 19.3481L44.568 22.1311L46.8175 22.1311L46.8175 18.6001L48 18.6001L48 23.6161L40.047 23.6161L40.047 18.6001L41.224 18.6001L41.224 22.1311ZM40.047 9.48441L48 9.48441L48 10.2434C48 10.3607 47.9817 10.4597 47.945 10.5404C47.9047 10.6174 47.8387 10.6926 47.747 10.7659L42.445 14.9184C42.687 14.8964 42.9107 14.8854 43.116 14.8854L48 14.8854L48 16.1889L40.047 16.1889L40.047 15.4134C40.047 15.3511 40.0507 15.2979 40.058 15.2539C40.0617 15.2062 40.0727 15.1659 40.091 15.1329C40.1057 15.0962 40.1295 15.0614 40.1625 15.0284C40.1918 14.9954 40.2322 14.9587 40.2835 14.9184L45.6075 10.7494C45.4792 10.7604 45.3527 10.7696 45.228 10.7769C45.1033 10.7842 44.9878 10.7879 44.8815 10.7879L40.047 10.7879L40.047 9.48441ZM46.8065 3.41233C46.8065 3.12633 46.7588 2.87149 46.6635 2.64783C46.5682 2.42049 46.4343 2.22983 46.262 2.07583C46.0897 1.92183 45.8807 1.8045 45.635 1.72383C45.3893 1.63949 45.1143 1.59733 44.81 1.59733L40.047 1.59733L40.047 0.117829L44.81 0.117829C45.283 0.117828 45.7212 0.194828 46.1245 0.348828C46.5242 0.499161 46.8707 0.717328 47.164 1.00333C47.4537 1.28566 47.681 1.63033 47.846 2.03733C48.0073 2.44433 48.088 2.90266 48.088 3.41233C48.088 3.92566 48.0073 4.38583 47.846 4.79283C47.681 5.19983 47.4537 5.54633 47.164 5.83233C46.8707 6.11466 46.5242 6.33283 46.1245 6.48683C45.7212 6.63716 45.283 6.71233 44.81 6.71233L40.047 6.71233L40.047 5.23283L44.8045 5.23283C45.1088 5.23283 45.3838 5.1925 45.6295 5.11183C45.8752 5.0275 46.086 4.90833 46.262 4.75433C46.4343 4.59666 46.5682 4.40599 46.6635 4.18233C46.7588 3.95499 46.8065 3.69833 46.8065 3.41233Z" fill="#1D1D1D"/>
      </svg>
      <Menu area={ translateMenu } />
      <div className='fixed xl:w-[calc(100vw_-_88px)] xl:h-[calc(100vh_-_88px)] md:w-[calc(100vw_-_48px)] md:h-[calc(100vh_-_48px)] h-screen w-screen xl:m-[44px] md:m-[24px] top-0 left-0 overflow-hidden duration-500 ease-in-out'>
        <div className='bg-web-orange relative h-full duration-100 md:duration-500 ease-in-out md:flex md:items-center p-6 md:p-10 xl:p-14' style={{width: swidth}}>
          <div className='w-[340px] md:w-[500px] top-[100vh] md:top-0 mt-[-33vh] md:relative absolute md:mt-0 ease-in-out duration-100 md:duration-500 md:translate-x-0 md:translate-y-0' style={ { opacity: opacityText, transform: 'translate(' + translateText + ')' } }>
            <Paragraph text={ 'I ❤ Development' } classes={ 'lato text-sm text-white italic mb-4' } />
            <Paragraph text={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis mauris pulvinar, lobortis augue eu.' } classes={ 'gilroy text-base xl:text-3xl md:text-2xl extra-bold text-white' } />
          </div>
        </div>
        <div className='absolute inline-block top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] duration-500 ease-in-out' style={{ left: leftDistance, opacity: opacityGrade }}>
          <TitleIntro texts={ lettersToSend } changes={ arrayOfLetters }   />
        </div>
      </div>
      <div onScroll={ handleScroll }  className='w-full overflow-x-hidden overflow-y-auto relative duration-500 ease-in-out' style={{ height: 'inherit', background: 'transparent'}}>
        <div className='relative w-full h-full z-100 bg-web-gray' style={{ marginTop: '200vh'}}>

        </div>
      </div>
    </>
  )
}
