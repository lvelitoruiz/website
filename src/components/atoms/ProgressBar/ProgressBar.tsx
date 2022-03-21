import React, { FunctionComponent, useEffect, useState } from 'react';

interface IProps {
  color: string,
  percentage: string
}

export const ProgressBar: FunctionComponent<IProps> = ({ color,percentage }) => {

  const [ percent,setPercent ] = useState('w-0')

  useEffect(() => {
    setPercent(percentage)
  }, [percent])
  

  return (
    <div className='progress-bar'>
      <div className={color + ' ' + percent} ></div>
    </div>
  )
}
