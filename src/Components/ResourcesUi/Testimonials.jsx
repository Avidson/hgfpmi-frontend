import TestimonialsSection from '../Helpers/TestimonalSection'
import { testimonialData } from '../../data/testimonies'

function Testimonials() {
  const testimonies = testimonialData

  return (
    <div>
      <TestimonialsSection data={testimonies} showMore={true} text={'TESTIMONIES'} />

      <div className="mt-4">
      <TestimonialsSection data={testimonies} showMore={true} text={'VIDEOS'} />
      </div>
    </div>
  )
}

export default Testimonials
