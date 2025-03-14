export const fadeIn=(direction,delay)=>{
    return{
        hidden:{
            y:direction === 'up' ? 30 :direction === 'down' ?-30:0,
            x:direction === 'left' ? 30 :direction === 'right' ?-30:0,
        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type: 'tween',
                duration:1.1,
                delay:delay,
                ease:[0.20,0.20,0.20,0.50],
            }
        }
    }
}
export const popUpVariant = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      }
    }
  };