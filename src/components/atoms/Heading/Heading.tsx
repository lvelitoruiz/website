import React, { FunctionComponent } from 'react';

interface IProps {
  classes: string,
  text: string,
  type: string,
  color?: string
}

export const Heading: FunctionComponent<IProps> = ({ classes,text,type,color }) => {
  return (
    <>
      {(() => {
        switch(type){
          case 'h2':
            return <h2 className={ classes } style={{ color: color }}>{ text }</h2>;
          case 'h3':
            return <h3 className={ classes } style={{ color: color }}>{ text }</h3>;
          case 'h4':
            return <h4 className={ classes } style={{ color: color }}>{ text }</h4>;
          case 'h5':
            return <h5 className={ classes } style={{ color: color }}>{ text }</h5>;
          case 'h6':
            return <h6 className={ classes } style={{ color: color }}>{ text }</h6>;
        }
      })()}
    </>
  )
}
