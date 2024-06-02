import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import { AutoplayType } from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
//components
import ProjectCard from '../ProjectCard/ProjectCard'
//css
import styles from './Carousel.module.scss'
import { Project } from '../../data/projectContent'


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
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    
  }, [emblaApi])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)

      const autoplay: AutoplayType = emblaApi?.plugins()?.autoplay
      if (!autoplay) return

      const resetOrStop =
        autoplay.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop

      resetOrStop()
    },
    [emblaApi]          
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])
  
  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect, cards])

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
      <div className={styles.navContainer}>
          <button className={`${styles.navButton} ${styles.prev}`} onClick={() => onPrevButtonClick()} disabled={prevBtnDisabled}>
            <img src='/assets/icons/next.png' />
          </button>

          <div className={styles.dotContainer}>
            {scrollSnaps.map((_, index) =>
              <button key={`dot-${index}`} onClick={() => onDotButtonClick(index)} className={`${index === selectedIndex ? styles.selectedDot : styles.unselectedDot} ${styles.baseDot}`} />
            )}
          </div>

          <button className={`${styles.navButton} ${styles.next}`} onClick={() => onNextButtonClick()} disabled={nextBtnDisabled}>
            <img src='/assets/icons/next.png' />
          </button>
        </div>
      
    </div>
  )
}

export default Carousel