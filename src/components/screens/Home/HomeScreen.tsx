import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { ImageBig } from '../../atoms/ImageBig/ImageBig';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { TitleIntro } from '../../molecules/TitleIntro/TitleIntro';
import one from '../../../assets/images/3.jpg';
import { Title } from '../../atoms/Tiitle/Title';
import { Heading } from '../../atoms/Heading/Heading';
import { LinkList } from '../../molecules/LinkList/LinkList';
import { WorkBox } from '../../molecules/WorkBox/WorkBox';
import imac from '../../../assets/images/imac2.jpg';
import entel from '../../../assets/images/entel.svg';
import arrow from '../../../assets/images/arrow.svg';
import { Links } from '../../atoms/Links/Links';
import { Image } from '../../atoms/Image/Image';
interface IProps {

};

export const HomeScreen: FunctionComponent<IProps> = () => {

  const [ swidth,setSwidth ] = useState('50%');
  const [ leftDistance,setLeftDistance ] = useState('50%');
  const [ translateText,setTranslateText ] = useState('-100%');
  const [ scrollPosition,setScrollPosition ] = useState(0);
  const [ opacityGrade,setOpacityGrade ] = useState('1');
  const [ opacityText,setOpacityText ] = useState('0');
  const [ cHeight,setCHeight ] = useState(0);

  const linkList = [
    {
      headingText: 'Design',
      links: [
        {
          text: 'Web Design',
          link: './'
        },
        {
          text: 'Interaction Design',
          link: './'
        },
        {
          text: 'Tailwind',
          link: './'
        },
        {
          text: 'Story Book',
          link: './'
        },
      ]
    },
    {
      headingText: 'Digital & Mobile',
      links: [
        {
          text: 'Websites',
          link: './'
        },
        {
          text: 'Responsive Design',
          link: './'
        },
        {
          text: 'Mobile & Tablet',
          link: './'
        },
        {
          text: 'Mobile Apps (iOS, Android)',
          link: './'
        },
      ]
    },
    {
      headingText: 'Development',
      links: [
        {
          text: 'Frontend',
          link: './'
        },
        {
          text: 'Backend',
          link: './'
        },
        {
          text: 'NativeScript',
          link: './'
        },
        {
          text: 'React Native',
          link: './'
        },
      ]
    },
    {
      headingText: 'Technologies',
      links: [
        {
          text: 'SASS',
          link: './'
        },
        {
          text: 'React',
          link: './'
        },
        {
          text: 'Angular',
          link: './'
        },
        {
          text: 'Polymer',
          link: './'
        },
      ]
    }
  ]

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
    ['L','L','L','L','A','??'],
    ['L','A','U','L','O','!'],
    ['O','!','T','0','!','!']
  ]

  return (
    <>
      <div className='fixed xl:w-[calc(100vw_-_88px)] xl:h-[calc(100vh_-_88px)] md:w-[calc(100vw_-_48px)] md:h-[calc(100vh_-_48px)] h-screen w-screen xl:m-[44px] md:m-[24px] top-0 left-0 overflow-hidden duration-500 ease-in-out'>
        <div className='bg-web-orange relative h-full duration-100 md:duration-500 ease-in-out md:flex md:items-center p-6 md:p-10 xl:p-14' style={{width: swidth}}>
          <div className='w-[340px] md:w-[500px] top-[100vh] md:top-0 mt-[-33vh] md:relative absolute md:mt-0 ease-in-out duration-100 md:duration-500 md:translate-x-0 md:translate-y-0' style={ { opacity: opacityText, transform: 'translate(' + translateText + ')' } }>
            <Paragraph text={ 'I ??? Development' } classes={ 'lato text-sm text-white italic mb-4' } />
            <Paragraph text={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis mauris pulvinar, lobortis augue eu.' } classes={ 'gilroy text-base xl:text-3xl md:text-2xl extra-bold text-white' } />
          </div>
        </div>
        <div className='absolute inline-block top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] duration-500 ease-in-out' style={{ left: leftDistance, opacity: opacityGrade }}>
          <TitleIntro texts={ lettersToSend } changes={ arrayOfLetters }   />
        </div>
      </div>
      <div onScroll={ handleScroll }  className='w-full overflow-x-hidden overflow-y-auto relative duration-500 ease-in-out' style={{ height: 'inherit', background: 'transparent'}}>
        <div className='relative w-full z-100 bg-web-gray' style={{ marginTop: '200vh'}}>
          <div className='relative h-[50vh] overflow-hidden'>
            <ImageBig source={ one } alt={ 'Hola' } classes={ 'xl:w-full xl:h-auto w-auto h-screen object-cover left-0 translate-y-[-20vh] absolute duration-[3000ms] ease-in-out' } />
          </div>
          <div className='mt-16 w-full grid grid-cols-12'>
            <div className='pb-10 2xl:col-span-2 2xl:col-start-3 xl:col-span-3 xl:col-start-2 mb-12 md:col-span-3 md:col-start-1 col-span-12 pl-8 md:pl-16 xl:pl-0'>
              <Title stroke={'#ED6459'} type={'extra-title-orange'} text={'DIGITAL'} width={'w-[180px]'} />
            </div>
            <div className='2xl:col-span-4 2xl:col-start-3 xl:col-span-5 xl:col-start-2 md:col-span-6 md:col-start-1 md:p-0 xl:p-0 md:pl-16 xl:pl-0 col-span-12 p-8'>
              <Heading classes={'lato extra-bold italic text-3xl xl:pr-[50%] md:pr-8'} text={'A global vision of your strategy digital'} type={'h3'} />
              <Paragraph text={'A key element of your transformation, digital strategy requires special attention. It is this support that I offer you throughout the project. From workshops, moves and brainstorming, turning your initial idea into an ambitious digital solution.'}
                         classes={'text-base leading-8 text-text-gray lato xl:pr-[35%] md:pr-8 mt-10 tracking-wide'} />
            </div>
            <div className='col-span-12 md:col-span-6 bg-web-black 2xl:py-14 2xl:px-28 xl:py-10 xl:px-20 py-8 px-8 text-white'>
              <div className='grid grid-cols-12 gap-4'>
                {
                  linkList.map( links => {
                    return(
                      <div className='col-span-12 md:col-span-6 md:mb-12 mb-6'>
                        <LinkList headingText={links.headingText} links={links.links} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='mt-48 w-full grid grid-cols-12 pb-10'>
            <div className='2xl:col-span-4 2xl:col-start-3 xl:col-span-5 xl:col-start-2 xl:pl-0 md:col-span-6 md:col-start-1 col-span-12 mb-6 md:p-0 p-8 md:pl-16'>
              <Title stroke={'#424B68'} type={'extra-title'} text={'WORK'} width={'w-[160px]'} />
            </div>
            <div className='col-span-12 md:col-span-6 p-8 md:p-0'>
              <Heading classes={'lato extra-bold italic text-3xl'} text={'A selection of 12 development projects.'} type={'h3'} />
              <Paragraph text={"With more than 30 projects for more than 12 clients, we weren't going to show you everything... We preferred to give you a short selection. Good discovery."}
                         classes={'text-base leading-8 text-text-gray lato pr-[25%] mt-10 tracking-wide'} />
            </div>
          </div>
          <div className='w-full grid grid-cols-12 gap-0 pt-24 md:pt-36 xl:mt-48 pb-24'>
              <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
                <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#78B1DC' } accent={'#3b3b3b'} hText={ 'Una visi??n global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
                <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#DA5A37' } accent={'#3b3b3b'} hText={ 'Una visi??n global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
                <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#ECC150' } accent={'#3b3b3b'} hText={ 'Una visi??n global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
                <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#ECC150' } accent={'#3b3b3b'} hText={ 'Una visi??n global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
                <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#78B1DC' } accent={'#3b3b3b'} hText={ 'Una visi??n global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
                <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#DA5A37' } accent={'#3b3b3b'} hText={ 'Una visi??n global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
                <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#ECC150' } accent={'#3b3b3b'} hText={ 'Una visi??n global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
                <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#ECC150' } accent={'#3b3b3b'} hText={ 'Una visi??n global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
                <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#78B1DC' } accent={'#3b3b3b'} hText={ 'Una visi??n global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
                <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#DA5A37' } accent={'#3b3b3b'} hText={ 'Una visi??n global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
                <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#ECC150' } accent={'#3b3b3b'} hText={ 'Una visi??n global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
                <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#ECC150' } accent={'#3b3b3b'} hText={ 'Una visi??n global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
              </div>
              <div className='col-span-12 p-6 flex justify-center mt-12'>
                <Links text={'Show all projects'} link={'./'} classes={'lato text-2xl italic underline hover:text-web-orange duration-500 ease-in-out'} />
              </div>
          </div>
          <div className='relative bg-web-black grid grid-cols-12 w-full py-24'>
            <div className='col-span-8 col-start-3 grid grid-cols-12'>
              <Heading classes={'text-3xl text-white col-span-12 mb-12 extra-bold gilroy'} text={'My Clients'} type={'h3'} />
              <div className='col-span-12 md:col-span-6 lg:col-span-3 flex justify-center items-center h-48 mb-6'>
               <Image classes={''} altText={'Entel'} source={entel} />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-3 flex justify-center items-center h-48 mb-6'>
               <Image classes={''} altText={'Entel'} source={entel} />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-3 flex justify-center items-center h-48 mb-6'>
               <Image classes={''} altText={'Entel'} source={entel} />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-3 flex justify-center items-center h-48 mb-6'>
               <Image classes={''} altText={'Entel'} source={entel} />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-3 flex justify-center items-center h-48 mb-6'>
               <Image classes={''} altText={'Entel'} source={entel} />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-3 flex justify-center items-center h-48 mb-6'>
               <Image classes={''} altText={'Entel'} source={entel} />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-3 flex justify-center items-center h-48 mb-6'>
               <Image classes={''} altText={'Entel'} source={entel} />
              </div>
              <div className='col-span-12 md:col-span-6 lg:col-span-3 flex justify-center items-center h-48 mb-6'>
               <Image classes={''} altText={'Entel'} source={entel} />
              </div>
            </div>
          </div>
          <div className='col-span-12 bg-white h-48 grid grid-cols-12'>
            <div className='col-span-12 grid grid-cols-12 h-full px-2'>
              <div className='col-span-1 h-full hidden md:flex items-center'>
                <Image classes={'md:h-10 xl:h-16 w-auto'} altText={''} source={arrow} />
              </div>
              <div className='col-span-3 h-full hidden lg:flex items-center'>
                <div className='w-full'>
                  <Paragraph text={'Sigue mi vida y mis eventos'} classes={'lato text-base mb-2'} />
                  <Links classes={'gilroy extra-bold md:text-3xl xl:text-5xl hover:text-web-orange duration-500 ease-in-out'} text={'INSTAGRAM'} link={'./'} />
                </div>
              </div>
              <div className='md:col-span-6 lg:col-span-3 h-full hidden md:flex items-center'>
                <div className='w-full'>
                  <Paragraph text={'Lee mi c??digo'} classes={'lato text-base mb-2 md:pl-2 lg:pl-0'} />
                  <Links classes={'gilroy md:pl-2 lg:pl-0 extra-bold md:text-5xl lg:text-3xl xl:text-5xl hover:text-web-orange duration-500 ease-in-out'} text={'GIT-HUB'} link={'./'} />
                </div>
              </div>
              <div className='col-span-12 md:col-span-5 h-full flex items-center justify-center text-center md:justify-end md:text-right'>
                <div className='w-full'>
                  <Paragraph text={'2008 - 2022 based on Ate,Lima,Peru'} classes={'text-base lato mb-1 text-links'} />
                  <Paragraph text={'+51 955 333 206'} classes={'text-base lato mb-1 text-web-black extra-bold'} />
                  <Paragraph text={'pogolvelito@gmail.com'} classes={'text-base lato mb-1 text-web-black extra-bold'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
