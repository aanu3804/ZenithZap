const AboutCompany = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About <span className="text-orange-600">Zenith Zap</span>
          </h2>
          
          <div className="text-lg text-gray-300 space-y-6 leading-relaxed">
            <p>
              Born from the relentless pursuit of peak performance, <strong className="text-orange-600">Zenith Zap</strong> was 
              founded by athletes who understood that hydration isn't just about water—it's about timing, 
              precision, and scientific innovation.
            </p>
            
            <p>
              Our journey began in 2020 when our founder, a former Olympic trainer, realized that traditional 
              sports drinks weren't addressing the specific needs of different workout phases. We set out to 
              create the world's first comprehensive hydration system tailored for pre, mid, and post-workout performance.
            </p>
            
            <p>
              Today, <strong className="text-amber-400">Zenith Zap</strong> powers athletes from weekend warriors to professional competitors, 
              helping them push beyond their limits and achieve their personal zenith of performance.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
              <div className="text-gray-300">Athletes Powered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-300">Research Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-gray-300">Performance Formulas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutCompany;




