import React from 'react'
import {motion,AnimatePresence } from 'framer-motion';
import {useSnapShot} from "valtio"
import state from '../store';
import {headContainerAnimation,
headContentAnimation,
headTextAnimation,
slideAnimation} from '../config/motion'
const Home = () => {
  const snap = useSnapShot(state)


  return (
    <AnimatePresence>

      {snap.intro && <motion.div
       className="Home"{...slideAnimation('left')}>
        
        
        </motion.div>}
      </AnimatePresence>
  )
}

export default Home