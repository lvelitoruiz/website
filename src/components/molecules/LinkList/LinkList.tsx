import React, { FunctionComponent } from 'react';
import { Heading } from '../../atoms/Heading/Heading';
import { Links } from '../../atoms/Links/Links';

interface IProps {
  headingText: string,
  links: { text: string; link: string; }[]
}

export const LinkList: FunctionComponent<IProps> = ({ headingText,links }) => {
  return (
    <>
      <Heading classes={'lato text-base extra-bold text-white mb-6'} text={headingText} type={'h4'} />
      <ul className='pb-4'>
        {
          links.map( ({ link,text }) => {
            return <li className='mb-3'><Links text={text} link={link} classes={'text-links text-sm mb-4 lg:hover:text-white duration-300 ease-in-out'} /></li>
          })
        }
      </ul>
    </>
  )
}
