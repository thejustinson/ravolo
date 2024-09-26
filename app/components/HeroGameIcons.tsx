import React from 'react'
import Image from 'next/image'

const HeroGameIcons = (image:string, position:string) => {
  return (
    <div>
        <Image
            src={image}
            alt='Game Icon'
            width={200}
            height={200}
            className=''
        />
    </div>
  )
}

export default HeroGameIcons