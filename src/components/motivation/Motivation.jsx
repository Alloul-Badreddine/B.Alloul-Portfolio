import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './motivation.css';

const Motivation = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/badreddine-alloul/',
      name: 'Badreddine Alloul',
      role: 'Front-end Engineer . Improving open-source projects, one commit at a time.',
      test: 'As a dedicated computer science student with a minor in business administration, I bring experience in team-based projects covering Database Systems, C programming, Al, and web/mobile applications. Proficient in full-stack web development, I work effectively in both collaborative and independent settings, consistently meeting tight deadlines. Eager to apply my skills in an internship, I am driven to contribute to the long-term success of your company.',
    },
  ];
  return (
    <section id="testimonials">
      <h2>Motivation</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Motivation