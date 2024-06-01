import { useAnimation, useInView, motion } from 'framer-motion'
import { Children, ReactNode, useEffect, useRef } from 'react'

type Props = {
  index: number
  children: ReactNode
}

function ScrollAnimatedSection({ index, children }: Props) {
  const control = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  
  const dynamicRowVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, 
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10, 
      },
    }),
    
  }

  useEffect(() => {
    isInView ? control.start('animate') : control.start('initial')
  }, [control, isInView])

  return (
    // eslint-disable-next-line no-extra-boolean-cast
    <motion.div ref={ref} variants={dynamicRowVariants} initial='hidden' whileInView='visible' animate={control} custom={index ?? 0} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {children}
    </motion.div>
  )
}

export default ScrollAnimatedSection