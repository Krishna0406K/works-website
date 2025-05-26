    import './ideas.css'
    import Tagline from '../tagline/tagline'
    import Footer from '../footer/footer'
    import vid1 from '../../assets/ideas page/perline noise.mp4'
    import vid2 from '../../assets/ideas page/growth by design.mp4'
    import vid3 from '../../assets/ideas page/furniture.mp4'
    import vid4 from '../../assets/ideas page/model.mp4'
    import React, { useEffect } from 'react';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';


    gsap.registerPlugin(ScrollTrigger);


    function Ideas() {

       useEffect(() => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        gsap.fromTo(
            card,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    });

    ScrollTrigger.refresh();

    const isMobile = window.innerWidth < 768;
    cards.forEach((card) => {
        gsap.fromTo(
            card,
            { opacity: 1, y: isMobile ? 50 : 100 },
            {
                opacity: 1,
                y: 0,
                duration: isMobile ? 0.4 : 1.0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                    immediateRender: false,
                },
            }
        );
    });

    const handleResize = () => {
        ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
    };
}, []);


        return (
            <div>
                <div id='ideas-page1' >
                    <p><em>Our space to</em> REFLECT, EXPRESS <em>and</em><br />
                        STRATEGIZE <em>with our</em> COMMUNITY.</p>
                </div>
                <div id='ideas-page2'>
                    <div className='cards-container w-full text-white flex flex-col gap-5 items-center'>
                        <div className='card w-[95%] sticky top-[5vh] flex flex-col gap-5 px-[30px] py-[30vh] rounded-lg bg-slate-600 overflow-hidden'> 
                                <video  className='absolute inset-0 w-full h-full object-cover z-[-1] opacity-40' src={vid1} autoPlay muted loop />
                                <div id='text-container' className='relative z-10 '>
                                    <h1 id='training-image-models' className='text-5xl font-helvetica leading-8 pt-20'>TRAINING IMAGE MODELS
                                    <br />
                                    <em className='text-4xl font-freight leading-1'>StyleGAN Training with Perlin Noise</em></h1>
                                    <p className='text-xl font-helvetica leading-7 pt-10'>This is a study in the use of Perlin noise maps to train StyleGAN models. The goal is to explore the visual connections between noise maps and StyleGAN outputs, with an attempt to use one as an output for the other.
                                        As part of our practice, we’re interested in pushing the boundaries of technology and exploring its appli­ca­tions for creative work. This study in particular explores the visual connections between noise maps and StyleGAN outputs with an attempt to use one as an output for the other.

                                        Games with pro­ce­du­ral­ly generated content, including Minecraft, Terraria, and No Man’s Sky, generally use noise maps for their random terrain generation. ​“Perlin noise” is a type of map that has the capability to generate realistic 2D and 3D terrain through its pseudo-random nature. </p>
                                </div>
                        </div>
                        <div className='card w-[95%] sticky top-[5vh] flex flex-col gap-5 px-[30px] py-[30vh] rounded-lg bg-slate-700  overflow-hidden'>
                                <video className='absolute inset-0 w-full h-full object-cover z-[-1] opacity-40' src={vid2} autoPlay muted loop />
                            <div id='text-container' className='relative z-10 '>
                                <h1 className='text-5xl font-helvetica leading-8 pt-20'>GROWTH BY DESIGN<br /><em className='text-4xl font-freight leading-1'>Brand Strategy</em></h1>
                                <p className='text-xl font-helvetica leading-7 pt-10'>The piece explores the evolving definition of luxury, arguing that its core essence today is **access**—to products, services, or experiences. This access gains value through its **restriction**, which creates the emotional impact associated with luxury.

                                    Historically, luxury was tied to craftsmanship, heritage, and time, especially post-French Revolution. But in the digital age, new forms of luxury emerged as the old model struggled to match the pace of cultural change. Not all modern luxury brands have deep legacies, so they create value through new types of exclusivity.

                                    The key insight: **Luxury is not just about what is offered, but who gets to access it—and how**. Understanding and designing around this idea of access helps brands connect with today’s luxury consumers more meaningfully.
                                </p>
                            </div>
                        </div>
                        <div className='card w-[95%] sticky top-[5vh] flex flex-col gap-5 px-[30px] py-[30vh] rounded-lg bg-slate-800  overflow-hidden'>
                            <div id='video-container'>
                                <video src={vid3} className='absolute inset-0 w-full h-full object-cover z-[-1] opacity-40' autoPlay muted loop />
                            </div>
                            <div id='text-container'  className='relative z-10 '>
                                <h1 id='furniture' className='text-4xl font-helvetica leading-8 pt-20'>FURNITURE AS AN ART OF PRATICE<br /><em className='text-4xl font-freight leading-1'>Product Design Exploration</em></h1>
                                <p className='text-xl font-helvetica leading-7 pt-10'>Over the last four years, WØRKS co-founder Haris Fazlani has been designing furniture. Not necessarily with overtly commercial intentions, but more as a meditative art practice that expands beyond our traditional working disciplines. ​“For me, feels like a natural extension of my fascination with sculpture, a way to create functional art that coun­ter­bal­ances the intan­gi­bil­i­ty of screen-based work,” he says.

                                    “There’s a profound comfort in making something tactile, analog, rooted in the physical world.” From the visual pre­car­i­ous­ness of the Italic Chair to the appre­ci­a­tion of shadows of the Level Workstation, each piece seeks to do convey the purity of a single artistic idea while remaining entirely functional. </p>
                            </div>
                        </div>
                        <div className='card w-[95%] sticky top-[5vh] flex flex-col gap-5 px-[30px] py-[30vh] rounded-lg bg-slate-900 overflow-hidden'>
                            <div id='video-container'>
                                <video src={vid4} className='absolute inset-0 w-full h-full object-cover z-[-1] opacity-40' autoPlay muted loop />
                            </div>
                            <div id='text-container' className='relative z-10'>
                                <h1 className='text-4xl font-helvetica leading-8 pt-20'>ALWAYS START WITH ART<br /><em className='text-4xl font-freight leading-1'>Creative Strategy</em></h1>
                                <p className='text-xl font-helvetica leading-7 pt-10'>At the center of every great brand, there must be art.

                                    If a brand seeks to participate in culture and be endeared to an audience, it has to meet culture where it is today. An association with creativity used to be a nice to have, an occasional indulgence … but now, due to the speed of and access to information, not only have our collective taste levels elevated, but we’re also more adept at finding heuristics that help us separate the signal from the noise.

                                    Art is the most potent mechanism that helps us communicate the complexity of being human, and it’s now become imperative to recognize that, if a brand has any hope of getting through to us.

                                    It’s no longer enough just to inform, or just to strike an emotional chord — brands must truly be patrons of art and advocates for creativity.

                                    And it starts with art.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Tagline />
                <Footer />
            </div>
        )
    }

    export default Ideas