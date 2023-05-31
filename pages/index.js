import Image from 'next/image';
import Script from "next/script";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";

export default function Index() {
    return <div data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="0" tabIndex="0" className="bg-white">
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <div className="col-lg-12">
                    <div className="bg-white">
                        <Image className="img-responsive" src="/profile.png" alt="profile-pic"
                               width={401}
                               height={520}
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
                    <SwiperSlide>
                        <p>Our daughter is high functioning ASD, but was
                            struggling with note taking and revision for her A-levels after missing the GCSE
                            exam experience due
                            to
                            Covid-19 arrangements. The tutor we chose, Ewa, has made a huge difference, with
                            over a 1-grade jump
                            in
                            predicted grades within a term.</p>
                        <p>Whilst more expensive than normal tutors, the SENCO experience of
                            the
                            tutors means they know how to approach both our daughter and her school, which has
                            been invaluable.
                            The
                            process of choosing a tutor is well supported and advised, with a good choice
                            available to us, each
                            with
                            their own strengths.</p>
                        <p>The tutorials are online which suits our daughter, and the tutor clearly
                            prepares
                            well, coordinating with the school and communicating regularly with our child,
                            setting work to be
                            done
                            between sessions. We would definitely recommend Sensational Tutors to other parents
                            of children with
                            learning differences.</p>
                        <p>Claire M</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>Ewa is such a talented and supportive tutor with
                            endless patience. My son is in year 11 and is currently studying to take his GCSE
                            maths next year.
                            He
                            struggles with concentration and memory and it affects his confidence massively but
                            he has been
                            working
                            with Ewa once a week for several months and his confidence and ability have soared
                            already. His
                            school
                            work and test results are continually improving and his school teacher has even
                            noticed his improved
                            confidence.</p>
                        <p>He is now getting praise points in maths instead of detentions! To me the most
                            important
                            part is that my son really likes Ewa. He says she's easy to speak to so he isn't
                            worried about
                            asking
                            questions, and if he gets something wrong he says she's really helpful and explains
                            again. High
                            praise
                            from a very shy socially awkward boy who struggles to connect with people he doesn't
                            know. I can't
                            recommend Ewa highly enough worthy of 10 stars in my eyes.</p>
                        <p>Lisa</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>Ewa has been my daughter’s tutor for the period of 18
                            months. Ewa covered a variety of subjects with her, amongst those were: English,
                            essay writing,
                            chemistry, biology and physics, while working with my daughter 4 hours every week.
                            My daughter has
                            additional needs, hence Ewa’s expertise and her support were essential in my
                            daughter’s progress.
                            She
                            has cerebral palsy and she is visually impaired, she is dyslexic and dyspraxic, and
                            has a problem
                            with
                            short therm memory.</p>
                        <p>Ewa’s work was essential and my daughter managed to improve and to catch up with
                            her
                            peers. During COVID 19 and the lockdown, all the lessons were on Zoom and Teams,
                            with interactive
                            whiteboard, live lessons which my daughter found easy to follow. At the time, my
                            daughter was a
                            pupil in
                            one of the independent senior schools in London (age 13-14). I am forever grateful
                            for all her help
                            and
                            support that she provided for my daughter.</p>
                        <p>Nadezda</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>Ewa has been so helpful with my son, currently in the
                            first year of sixth form. He has aspergers and ADHD and struggles with organisation
                            and study
                            techniques, finding it difficult to focus.</p>
                        <p>Ewa is patient, committed and highly skilled at breaking
                            daunting homework tasks down into small steps. She is always supportive and looking
                            for ways to make
                            a difference.</p>
                        <p>Jill</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>Ewa is highly experienced in all areas of special needs, in
                            particular ASD and
                            Dyslexia.</p>
                        <p>She sets very high standards for her pupils, prepares
                            meticulously and is able to motivate the most reluctant learners. She is highly
                            professional and
                            committed. She is also extremely skilled and trained in speech and language. Highly
                            recommended.</p>
                        <p>Susan</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>Ewa is a lovely kind and patient tutor that has been working with my 13 year old son,
                            3 times a week
                            for the past 4 months.</p>
                        <p>Under Ewa’s thoughtful and skilled tutelage he has progressed nicely and is much more
                            confident as a
                            result. I would highly recommend Ewa. 5 stars!</p>
                        <p>L Galli</p>
                    </SwiperSlide>
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
                    <div className="col-md-6 col-lg-4 mb-5">
                        <button className="portfolio-item mx-auto" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            <p className="text-white">SEN</p>
                        </button>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                asdasdasdasd
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}