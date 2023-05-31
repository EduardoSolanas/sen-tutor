import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import { data } from "../src/content/data"

export default function Index() {
    return <div data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="0" tabIndex="0" className="bg-white">
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <div className="col-lg-12">
                    <div className="bg-white">
                        <Image className="img-responsive" src="/images/profile.png" alt="profile-pic"
                               width={401} height={520}
                        />
                    </div>
                    <div className="intro-text">
                        <h1 className="masthead-heading text-uppercase">Choose me if…</h1>
                        <div className="row">
                            <div className="col-lg-4 chose">
                                <p>- Your child has dyslexia, dyspraxia, dyscalculia, ADHD</p>
                            </div>
                            <div className="col-lg-4 chose">
                                <p>- Your child is autistic</p>
                            </div>
                            <div className="col-lg-4 chose">
                                <p>- Your child has processing difficulties and working memory issues</p>
                            </div>
                            <div className="col-lg-4 chose">
                                <p>- Your child need to focus, find reassurance and motivation to learn</p>
                            </div>
                            <div className="col-lg-4 chose">
                                <p>- Your child needs support in English or Maths</p>
                            </div>
                            <div className="col-lg-4 chose">
                                <p>- Your child need support with organisation and study skills</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="page-section pb-0 pt-3" id="testimonials">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Testimonials</h2>
                <div className="divider-custom mb-5">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-line"></div>
                </div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {data.testimonials.map((block,index) => (
                        <SwiperSlide key={index}>
                            {block.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex}>{paragraph}</p>
                            ))}
                            <p>{block.author}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
        <section className="page-section portfolio pt-3" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Skills</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    {data.skills.map((skill,index) => (
                        <div className="col-md-6 col-lg-4 mb-5" key={index}>
                            <button className="portfolio-item mx-auto" data-bs-toggle="modal"
                                    data-bs-target={`#skill-${index}`} >
                                <p className="text-white">{skill.type}</p>
                            </button>
                        </div>
                    ))}
                </div>
                {data.skills.map((skill,index) => (
                <div className="modal fade" id={`skill-${index}`} data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     key={index}
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{skill.type}</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <Image src={`/images/${skill.image.src}`} className="img-fluid rounded mb-5"
                                                 alt={ skill.image.alt }
                                                   width={800} height={450}
                                            />
                                                {skill.paragraphs.map((paragraph,pIndex) => (
                                                    <p className="mb-4" key={pIndex}>{paragraph}</p>
                                                ))}
                                                <button className="btn btn-primary" data-bs-dismiss="modal">
                                                    <i className="fas fa-xmark fa-fw"></i>
                                                    Close Window
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    </div>
}