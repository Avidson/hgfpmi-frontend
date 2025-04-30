import TestimonialsSection from '../Helpers/TestimonalSection'
import { testimonialData } from '../../data/testimonies'
import { useFetchTestimonies, useFetchVideoTestimonies } from '../../Helpers/fetch.hooks'

function Testimonials() {
    const { data: videoTestimonies, isFetching, serverError } = useFetchVideoTestimonies()
    const { data: testimonies, isFetching: loading } = useFetchTestimonies()
    //const testimonies = testimonialData

  return (
    <div>
      <TestimonialsSection data={testimonies} loading={loading} showMore={true} text={'TESTIMONIES'} />

      <div className="mt-4">
      <TestimonialsSection data={videoTestimonies} loading={isFetching} showMore={true} text={'VIDEOS'} />
      </div>
    </div>
  )
}

export default Testimonials
