/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './testmonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.jpeg'
//import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

//Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, ipsum assumenda nostrum tenetur vitae saepe accusamus possimus commodi praesentium dignissimos.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, ipsum assumenda nostrum tenetur vitae saepe accusamus possimus commodi praesentium dignissimos.'

    },
    {
        avatar: AVTR2,
        name: 'Santosh',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, ipsum assumenda nostrum tenetur vitae saepe accusamus possimus commodi praesentium dignissimos.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, ipsum assumenda nostrum tenetur vitae saepe accusamus possimus commodi praesentium dignissimos.'

    },
    {
        avatar: AVTR3,
        name: 'Rama Devi',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, ipsum assumenda nostrum tenetur vitae saepe accusamus possimus commodi praesentium dignissimos.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, ipsum assumenda nostrum tenetur vitae saepe accusamus possimus commodi praesentium dignissimos.'

    },
    {
        avatar: AVTR4,
        name: 'Prasad',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, ipsum assumenda nostrum tenetur vitae saepe accusamus possimus commodi praesentium dignissimos.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, ipsum assumenda nostrum tenetur vitae saepe accusamus possimus commodi praesentium dignissimos.'

    }
]

const Testmonial = () => {
    return (
        <section id='testmonial'>
            <h5>Review from clients</h5>
            <h2>Testmonials</h2>

            <Swiper className='container testmonial__container'
                // install Swiper modules
                // eslint-disable-next-line no-undef
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testmonial'>
                                <div className='client__avatar'>
                                    <img src={avatar} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testmonial