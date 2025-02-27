import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'motion/react'
import { useEffect, useState } from 'react'

type AnimatedNumberProps = {
  number: number
}

export const AnimatedNumberComponent = ({ number }: AnimatedNumberProps) => {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))
  console.log(count)
  useEffect(() => {
    const controls = animate(count, number, { duration: 5 })
    return () => controls.stop()
  }, [])

  return (
    <motion.pre className="text-4xl flex font-extrabold green-gradient font-['Nunito']">
      {rounded}
    </motion.pre>
  )
}
