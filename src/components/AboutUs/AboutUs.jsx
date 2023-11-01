/* eslint-disable react/no-unescaped-entities */

const AboutUs = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 my-16">

        <div className="container flex flex-col-reverse mx-auto lg:flex-row-reverse">
            <div className="flex flex-col w-1/2 rounded-sm sm:p-8 lg:w-1/2 xl:w-2/5">
        <h3 className="text-3xl font-bold text-orange-400 pb-4">About Us</h3>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <p className="pb-4">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <span><button className="btn btn-primary">Get More Info</button></span>
    </div>
        
            <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                <div className="flex items-center justify-center h-full">
                    <img src="https://source.unsplash.com/640x480/" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default AboutUs;