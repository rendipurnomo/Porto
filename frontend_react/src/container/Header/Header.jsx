import React, {useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import { MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};



const Header = () => { 
  const [letterClass, setLetterClass] = useState('text-animate')

  const AnimatedLetter = ({strArray}) =>  (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass}`}>
          {char}
        </span>
      ))}
    </span>
  )
  const helloArray = ['H', 'i,']
  const nameArray = ["I","'","m"," ","r", "e", "n", "d", "i"]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
  <div id="home" className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <p>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={helloArray}
            />
            <br/>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={nameArray}
            />
            </p>
        </div>

        <div className="tag-cmp app__flex">
          <p>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={jobArray}
            />
            </p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.redux, images.react, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);
}

export default Header
MotionWrap(Header, 'app__header');