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
                    <div className="profile-background">
                        <Image className="img-responsive" src="/images/profile.png" alt="profile-pic"
                               width={463} height={520}
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
                    <p>Every child deserves the opportunity to flourish. Every child has the inherent right to be heard and accorded respect.</p>
                </div>
                <div>
                    <p>My educational approach champions the dismantling of learning barriers through a comprehensive and customized methodology, drawing upon a solid foundation of professional training and the astute selection of materials and instructional techniques.</p>
                </div>
                <div>
                    <p>I am immensely grateful for the formative years of my educational career spent at a school that nurtured my growth, encouraged my ambitions, and allowed me to critically evaluate my pedagogical methods. In the early days, my role encompassed aiding students with distinct learning challenges, functioning both as an educator and a classroom assistant. This dual capacity afforded me a multifaceted view of various instructional strategies, deepened my understanding of the contemporary English curriculum, and let me witness firsthand the blossoming of students in ways that transcended conventional programs like ‘Read Write Ink’, ‘Lit Programme’, ‘Rapid Reader’, ‘Sound Roots’, or ‘SRA’. It became evident swiftly that a student-centric approach, underpinned by subject matter expertise and rigorous specialized training, was instrumental for triumph. A significant Ofsted Inspection subsequently affirmed the strength of my teaching, highlighting my contributions prominently among exemplary educators. At that juncture, I was serving as an interim Lead Teacher in an Autism Resource Base, equipped with intensive level 3 training for supporting verbally communicative autistic students, while progressing towards a level 5 qualification for aiding those with SpLD/dyslexia, all the while imparting a modified curriculum in English and Maths for students with unique learning requisites. Fast forward four years, and I have evolved into an educator capable of conducting dynamic, multi-sensory virtual classes using online and video-conferencing tools in an Apple distinguished school where technology integration is the norm and One Drive streamlines the management of digital student workbooks.</p>
                </div>
                <div>
                    <p>Every school day presents fresh hurdles, and my commitment to my students is unwavering; I am determined to devise a solution for each individual under my tutelage.</p>
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
                    <li>Arrange an initial and following sessions with a tailored fee</li>
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