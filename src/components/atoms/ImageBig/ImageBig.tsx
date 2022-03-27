import React, { FunctionComponent, useEffect } from 'react';

interface IProps {
  source: string,
  alt: string,
  classes: string
}

export const ImageBig: FunctionComponent<IProps> = ( { source,alt,classes } ) => {
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        /* Placeholder replacement */
        console.log('detected');
        entry.target.classList.toggle('translate-y-[-20vh]');
      });
    }, {
    root: null,
    rootMargin: "0px",
    threshold: 0.08
  });

  useEffect(() => {
    document.querySelectorAll('img.big-image').forEach(img => { observer.observe(img) });
  }, [])
  

  return (
    <img src={ source } alt={ alt } className={'big-image ' + classes } />
  )
}
