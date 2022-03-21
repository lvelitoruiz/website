import React from 'react'
import { Title } from '../../../components/atoms/Tiitle/Title';
import { MenuLink } from '../../../components/atoms/MenuLink/MenuLink';
import { Links } from '../../../components/atoms/Links/Links';
import { ProgressBar } from '../../../components/atoms/ProgressBar/ProgressBar';
import { SliderBox } from '../../molecules/SliderBox/SliderBox';
import imac from '../../../assets/images/imac2.jpg';
import { WorkBox } from '../../molecules/WorkBox/WorkBox';

export const ComponentsScreen = () => {
  return (
    <div className="container">
      <div className='body-base'>
        <Title stroke={'#424B68'} type={'extra-title'} text={'LUIS'} width={'w-[120px]'} />
        <Title stroke={'#ED6459'} type={'extra-title-orange'} text={'WORK'} width={'w-[170px]'} />
        <p className='p-4 m-4'> 
          <MenuLink text={'Home'} link={'home.html'} />
        </p>
        <p>
          <Links text={'Normal Link'} link={'home.html'} classes={'inline-block relative lato text-base normal-link italic'} />
        </p>
        <div className='p-16'>
          <ProgressBar color={'bg-web-orange'} percentage={'w-[37%]'} />
        </div>
        <SliderBox text={ 'Frontend' } color={'bg-web-orange'} />
        <div className='grid grid-cols-12 gap-0'>
          <div className='col-span-4'>
            <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#78B1DC' } accent={'#3b3b3b'} hText={ 'Una visión global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
          </div>
          <div className='col-span-4'>
            <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#DA5A37' } accent={'#3b3b3b'} hText={ 'Una visión global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
          </div>
          <div className='col-span-4'>
            <WorkBox img={ imac } imgAlt={ 'Imac on studio' } color={ '#ECC150' } accent={'#3b3b3b'} hText={ 'Una visión global' } pText={ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' } />
          </div>
        </div>
      </div>
    </div>
  )
}
