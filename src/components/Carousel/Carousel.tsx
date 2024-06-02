import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import { AutoplayType } from 'embla-carousel-autoplay'
//components
import ProjectCard from '../ProjectCard/ProjectCard'
//css
import styles from './Carousel.module.scss'
import { Project, projects } from '../../data/projectContent'
import { useDotButton } from './CarouselDotButton'

type Props = {
  cards: Project[]
  cardSize: 'sm' | 'md' | 'lg'  | 'full'
  type?: 'project'
  onOpenCard: (id: string) => void
}



function Carousel({ cards, type, cardSize, onOpenCard }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', loop: true, skipSnaps: false, inViewThreshold: 0.7 }, 
    [
      Autoplay({ playOnInit: true, stopOnInteraction: false, stopOnMouseEnter: true, delay: 3000 })
    ])
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
  
  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay: AutoplayType = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  // const toggleAutoplay = useCallback(() => {
  //   const autoplay = emblaApi?.plugins()?.autoplay
  //   if (!autoplay) return

  //   const playOrStop: AutoplayType  = autoplay.isPlaying ? autoplay.stop : autoplay.play
  //   playOrStop()
  // }, [emblaApi])

  useEffect(() => {
    const autoplay: AutoplayType = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    setIsPlaying(autoplay.isPlaying())
    if (!emblaApi) return
    emblaApi
      .on('reInit', () => setIsPlaying(autoplay.isPlaying()))
      // .on('autoplay:play', () => setIsPlaying(true))
      // .on('autoplay:stop', () => setIsPlaying(false))
  }, [emblaApi])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.5 } ,
    },
  }
  
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <div className={styles.container}>
      {/* carousel viewport */}
      <div ref={emblaRef} className={styles.viewport}>
        {/* carousel container */}
        <motion.div variants={containerVariants} initial='hidden' animate='visible' className={styles.carousel}>
          {/* carousel slides */}
          {cards.map((card, index) =>
            <motion.div variants={itemVariants} key={`card-${index}`} className={`${styles.card} ${styles[cardSize]}`}>
              {type === 'project' && <ProjectCard id={card.id} project={card} handleOpen={onOpenCard} index={index} />}
            </motion.div>
          )}
        </motion.div>
      </div>
      {/* dot navigation */}
      <div className={styles.dotContainer}>
        {scrollSnaps.map((_, index) =>
          <button key={`dot-${index}`} onClick={() => onDotButtonClick(index)} className={`${index === selectedIndex ? styles.selectedDot : styles.unselectedDot} ${styles.baseDot}`} />
        )}
      </div>
      {/* <button onClick={toggleAutoplay} type="button">
        {isPlaying ? 'Stop' : 'Start'}
      </button> */}
    </div>
  )
}

export default Carousel