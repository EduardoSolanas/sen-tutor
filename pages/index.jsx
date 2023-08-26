import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import { data } from "@/content/data"

export default function Index() {
    return <div data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="0" tabIndex="0" className="bg-white">
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <div className="col-lg-12">
                    <div className="bg-grey">
                        <Image className="img-responsive" src="/images/profile.png" alt="profile-pic"
                               width={401} height={520}
                        />
                    </div>
                    <div className="intro-text">
                        <h1 className="masthead-heading text-uppercase">I can help your child if…</h1>
                        <div className="row">
                            <div className="col-lg-4 chose">
                                <p>- has dyslexia, dyspraxia, dyscalculia, ADHD</p>
                            </div>
                            <div className="col-lg-4 chose">
                                <p>- is autistic</p>
                            </div>
                            <div className="col-lg-4 chose">
                                <p>- has processing difficulties and working memory issues</p>
                            </div>
                            <div className="col-lg-4 chose">
                                <p>- needs to focus, find reassurance and motivation to learn</p>
                            </div>
                            <div className="col-lg-4 chose">
                                <p>- needs support in English or Maths</p>
                            </div>
                            <div className="col-lg-4 chose">
                                <p>- needs support with organisation and study skills</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="page-section bg-grey pt-3" id="philosophy">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 pt-5">My teaching philosophy</h2>
                <div className="divider-custom mb-5">
                    <div className="divider-custom-line"></div>
                </div>
                <div>
                    <p>Each child has a right to strive. Each child has a right to be listened to. Each child has a
                        right to be respected.</p>
                </div>
                <div>
                    <p>My teaching philosophy is very much about breaking barriers to learning through a holistic
                        approach and personalised, targeted intervention, based on robust training and skilful choice of
                        resources and appropriate instruction.</p>
                </div>
                <div>
                    <p>I am very thankful that I have spent the first years of my teaching career in a school that
                        allowed me to grow, thrive and challenge my teaching practices. When I began, I supported
                        students with specific learning difficulties both as a teacher and a class support assistant.
                        This allowed me to see various teaching approaches and gain valuable insight into the current
                        English curriculum, but also to observe my students who thrived in ways that I would not observe
                        just delivering ‘Read Write Ink‘, ‘Lit Programme’, ‘Rapid Reader’, ‘Sound Roots’ or ‘SRA’. Very
                        quickly I learnt that holistic approach to each student, together with subject knowledge and
                        robust specialist training were a key to success. Four years later, after a long-awaited Ofsted
                        Inspection in the same school, my teaching provision was rated as very strong and my name was
                        mentioned among the top-performing teachers. At the time, I have been an interim Lead Teacher in
                        Autism Resourced Base, with a thorough level 3 training in supporting verbal students with
                        autism, on my way to complete a level 5 training in supporting students with SpLD/dyslexia
                        whilst teaching a differentiated English and Maths core curriculum for students with additional
                        learning needs. Four years later I have become a teacher able to deliver multi-sensory virtual
                        classes via online platforms and video-conferencing software in an Apple accredited school,
                        where IT is an everyday experience for everybody, and One Drive facilitates students’ electronic
                        exercise books.</p>
                </div>
                <div>
                    <p>Each day at school is a new challenge and I will not stop until I find a solution for each of my
                        tutees.</p>
                </div>
            </div>
        </section>

        <section className="page-section bg-grey pt-3" id="how-to-start">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 pt-5">How to start</h2>
                <div className="divider-custom mb-5">
                    <div className="divider-custom-line"></div>
                </div>
                <ul className="list-decimals">
                    <li>Fill up the <a href="/contact" target="_blank">form</a></li>
                    <li>We will arrange a free consultation to discuss your case</li>
                    <li>Arrange an initial and following sessions :</li>
                    <ul>
                        <li>1h online 90£</li>
                        <li>1h face to face 120£</li>
                    </ul>
                </ul>
            </div>
        </section>
        <section className="page-section bg-primary pt-3" id="testimonials">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0  pt-5">Testimonials</h2>
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
        <section className="page-section bg-grey portfolio pt-3" id="skills">
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