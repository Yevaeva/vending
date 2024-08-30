import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10 main-content">
            <section>
                <h1>Experience Luxury in Every Spritz</h1>

                <div className={'image-wrapper'}>
                    <Image data-aos="fade-right" src='/images/home/44.png' width={330} height={400} alt="logo"/>

                    <div className={'mt-10'} data-aos="fade-left">
                        <h2>Discover the {"world's"} finest perfumes at your fingertips.<span className='title'> AromaTick</span> brings instant elegance to your daily routine.</h2>
                        <p>
                            {"AromaTick is revolutionizing the way you experience luxury fragrances. Our state-of-the-art vending machines offer a curated selection of 10 original, high-end perfumes, each carefully chosen to suit every occasion and mood. Whether you're on the go or just looking for a quick refresh, AromaTick provides a convenient and affordable way to indulge in luxury."}
                        </p>
                    </div>
                </div>
            </section>
            <section className={'mt-24'} id={'luxury'}>
                <h1>Luxury Without the High Price Tag</h1>

                <div className={'image-wrapper'} >

                    <div className={'mt-10'} data-aos="fade-right">
                        <h2>Enjoy premium scents without the commitment.</h2>
                        <p>
                            {"Why pay for an expensive bottle when you can enjoy the same luxurious scent at a fraction of the cost? With AromaTick, you don’t need to carry around large bottles of perfume. Instead, you can easily spritz on your favorite fragrance whenever you need it. Plus, it's a perfect way to explore new scents before committing to a full-size bottle."}
                        </p>
                    </div>
                    <Image data-aos="flip-right"
                           data-aos-duration="2000" src='/images/home/6.png' width={460} height={640} alt="logo"/>
                </div>
            </section>
            <section className={'big-section mt-24'} id={'smart'}>
                <h1>Intuitive and Informative</h1>

                <div className={'image-wrapper'} >
                    <Image data-aos="flip-right"
                           data-aos-duration="2000"  src='/images/home/11.png' width={600} height={750} alt="logo"/>
                    <div className={'mt-2'}  data-aos="fade-left">
                        <h2> Two screens, endless possibilities.</h2>
                        <p>
                            AromaTick machines are designed with convenience and clarity in mind. Each machine features
                            two screens to enhance your experience:
                        </p>
                        <ul>
                            <li> Selection Screen: A user-friendly touchscreen allows you to easily browse and
                                select your desired perfume. Navigate through the options and find the perfect scent
                                in just a few taps.

                            </li>
                            <li>Information Screen: Discover detailed information about each fragrance, including
                                names, photos, and scent profiles. Learn about the notes and inspiration behind each
                                perfume, helping you make an informed choice.

                            </li>
                            <li>These features ensure that every interaction with AromaTick is smooth, informative,
                                and satisfying.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={'mt-24'} id={'how'}>
                <h1>How It Works</h1>

                <div className={'image-wrapper'}>

                    <div className={'mt-10'} data-aos="fade-right">
                        <h2>Your perfect scent is just a few steps away.</h2>
                        <ol>
                            <li>Select: Use our intuitive touchscreen to explore our collection of luxury perfumes.
                                Find the scent that matches your vibe.
                            </li>
                            <li>{"Spritz: Once you've made your choice, simply pay and enjoy a perfectly measured spritz of your chosen perfume."}
                            </li>
                            <li>Enjoy: Bask in the refined aroma that enhances your style and leaves a lasting
                                impression.
                            </li>
                        </ol>
                        <p>

                            AromaTick makes it easy to refresh your fragrance on the go, without breaking the bank or
                            lugging around heavy bottles.
                        </p>
                    </div>
                    <video data-aos="fade-left" width="240" height="600" controls autoPlay preload="none" loop muted className={'video'}>
                        <source src="/video/1.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </main>
    );
}
