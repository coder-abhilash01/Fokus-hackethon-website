
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const images = [
  '/marqueeImg/marqueeImg1.webp',
  '/marqueeImg/marqueeImg2.webp',
  '/marqueeImg/marqueeImg3.webp',
  '/marqueeImg/marqueeImg4.webp',
  '/marqueeImg/marqueeImg5.webp',
  '/marqueeImg/marqueeImg6.webp',
  '/marqueeImg/marqueeImg7.webp',
  '/marqueeImg/marqueeImg8.webp',
]

const Marquee = () => {
  const marqueeRef = useRef()
  const tl = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.to('.marquee-track', {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: 'linear',
      })

      const el = marqueeRef.current

      el.addEventListener('mouseenter', () => tl.current.pause())
      el.addEventListener('mouseleave', () => tl.current.play())
    }, marqueeRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={marqueeRef}
      className="overflow-hidden whitespace-nowrap w-full bg-white py-4 cursor-pointer"
    >
      <div className="marquee-track flex w-max">
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-[500px] h-auto object-contain"
            alt={`marquee-${i}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Marquee
