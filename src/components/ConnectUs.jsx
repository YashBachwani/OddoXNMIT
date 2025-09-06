import { useEffect, useRef } from "react";

export default function ConnectUs() {
  const cardRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.animate(
        [
          { opacity: 0, transform: "scale(0.95) translateY(40px)" },
          { opacity: 1, transform: "scale(1) translateY(0)" }
        ],
        {
          duration: 950,
          easing: "cubic-bezier(0.5,1.2,0.5,1)",
          fill: "forwards"
        }
      );
    }
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
        body { font-family: 'Poppins', sans-serif; }
        .pretty-bg {
          background: linear-gradient(125deg, #fff7ed 68%, #eceaff 100%);
          min-height: 380px;
          width: 100vw;
          position: relative;
        }
        .pretty-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.14;
          background-image: radial-gradient(#ff770046 2px, transparent 2px), radial-gradient(#c3b4fa33 2px, transparent 2px);
          background-size: 26px 26px;
          z-index: 0;
        }
        .glass-card {
          background: rgba(255,255,255, 0.84);
          box-shadow: 0 6px 32px 0 #ccb8fb26;
          border-radius: 1.3rem;
          border: 1px solid #f1eafc;
          backdrop-filter: blur(3px) saturate(1.2);
        }
        .cta-glow {
          box-shadow: 0 0 0px 0 #ff77005a;
          transition: box-shadow 0.17s cubic-bezier(.5,2,.5,1), transform 0.15s cubic-bezier(.45,1.5,.53,1.2);
        }
        .cta-glow:hover {
          box-shadow: 0 6px 30px 0 #ff770063, 0 2px 16px 4px #ec426629;
          transform: scale(1.06);
          background: linear-gradient(90deg,#ff7700 70%, #ffab4d 100%);
        }
      `}</style>
      
      <section className="pretty-bg w-full pt-0 pb-0 flex items-center" style={{ marginTop: '0' }}>
        <div className="flex flex-col md:flex-row items-center justify-around w-full gap-10 z-10 px-6 md:px-16 py-14">
          
          <div className="md:w-[500px] w-full">
            <h1 className="text-[2.6rem] md:text-5xl font-bold text-neutral-900 !leading-tight mb-4 drop-shadow-sm">
              What do you want to Buy?
            </h1>
            <p className="text-xl text-neutral-500 mb-8 md:mb-10 font-medium">
              Shop, swap, or sell pre-loved outfits and accessories for every occasion—casual, formal, or traditional..
            </p>
            <button
              ref={btnRef}
              className="cta-glow font-bold px-10 py-4 rounded-full text-white text-[1.1rem] bg-[#ff7700] transition-all shadow-lg"
              style={{ fontWeight: 600, letterSpacing: '.02em' }}
            >
              Contact us
            </button>
          </div>

          <div ref={cardRef} className="glass-card md:w-[370px] w-full p-7 flex flex-col gap-4 items-center">
            <div className="w-full flex flex-row items-center gap-3 mb-1">
              <input
                type="text"
                placeholder="Tell us about your idea"
                className="w-full px-5 py-3 rounded-lg border border-orange-100 focus:outline-none focus:ring-2 focus:ring-[#ff7700] text-neutral-800 bg-white placeholder:text-neutral-400 text-base transition"
              />
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff7700] text-white text-xl transition cta-glow"
              >
                <span style={{ fontWeight: 700 }}>↑</span>
              </button>
            </div>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff7700] text-white text-xl transition cta-glow"
            >
              <span style={{ fontWeight: 700 }}>+</span>
            </button>
            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2 w-full text-[15px] text-neutral-700 font-medium">
              <span className="hover:text-[#ff7700] transition-colors cursor-pointer">How do I write a resume or cover letter?</span>
              <span className="hover:text-[#ff7700] transition-colors cursor-pointer">How do I improve my writing skills?</span>
              <span className="hover:text-[#ff7700] transition-colors cursor-pointer">Can you translate something for me?</span>
              <span className="hover:text-[#ff7700] transition-colors cursor-pointer">How can I be more productive?</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
