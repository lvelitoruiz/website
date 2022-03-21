import React, { FunctionComponent } from 'react';

interface IProps {
  classes: string,
  altText: string,
  source: string
}

export const Image: FunctionComponent<IProps> = ({ source,classes,altText }) => {
  return (
    <img src={ source } className={ classes } alt={ altText } />
  )
}
