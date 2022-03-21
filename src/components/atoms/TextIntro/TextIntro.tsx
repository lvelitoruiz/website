import React, { FunctionComponent, useEffect, useState } from 'react';

interface IProps {
  text: string,
  changes: Array<string>
}

export const TextIntro: FunctionComponent<IProps> = ({ text,changes }) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz#%&^+=-';
  const lettersUp = letters.toUpperCase();
  const lettersArray = lettersUp.split('');
  const [ useText,setUseText ] = useState(text)

  const handleChange = (element: string) => {
    let newArray = [...lettersArray,element]
    for( let i = 0; i < newArray.length; i++) {
      setTimeout( () => {
        if( i !== newArray.length - 1) {
          setUseText(newArray[Math.floor(Math.random() * 33)])
        } else {
          setUseText(newArray[i]);
        }
      }, (10 * i));
    }
  }

  const handleAnimation = () => {
    for( let i = 0; i < changes.length; i++) {
      setTimeout(() => {
        handleChange(changes[i]);
      }, (7000 * i));
    }
  }

  useEffect(() => {
    handleAnimation();
  }, [])
  

  return (
    <p className='text-[100px] md:text-[150px] font-extrabold leading-[0.8em]'>
      { useText }
    </p>
  )
}
