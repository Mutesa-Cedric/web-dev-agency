import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { testimonials } from '../../data'
import { ITestimonial } from '../../types'

export default function Testimonials() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-black w-full flex flex-col gap-y-8">
      <div className="w-full flex justify-between">
        <h4 className="text-white text-lg">Hear what our customers say :)</h4>
        <div className="flex items-center gap-x-4 text-2xl text-primary-yellow">
          <div className='rounded border border-primary-yellow p-2 transition-colors duration-200 hover:bg-primary-yellow hover:text-white cursor-pointer'>
            <HiOutlineChevronLeft />
          </div>
          <div className='rounded border border-primary-yellow p-2 transition-colors duration-200 hover:bg-primary-yellow hover:text-white cursor-pointer'>
            <HiOutlineChevronRight />
          </div>
        </div>
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
          testimonials.map((testimonial, idx) => (
            <Testimonial key={idx} {...testimonial} />
          ))
        }
      </div>
    </div>
  )
}


const Testimonial = ({ content, postedBy }: ITestimonial) => {
  return (
    <div className='rounded border border-primary-gray hover:border-primary-yellow p-4 flex flex-col w-full gap-y-8'>
      <div className='flex items-center gap-4'>
        <img src={`/testimonials/${postedBy.profile}`} alt={postedBy.name} className='h-12 w-12 object-cover rounded-full' />
        <div className=''>
          <h3 className='text-white font-bold'>{postedBy.name}</h3>
          <p className='text-white/60'>{postedBy.worksAt}</p>
        </div>
      </div>
      <p className='font-bold text-white'>{content}</p>
    </div>
  )
}