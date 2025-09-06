import { Link } from "react-router-dom";

export default function Arrivals() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                .font-poppins {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <br/>
            <h1 className="text-3xl font-medium text-slate-800 text-center mb-2 font-poppins">
                New Arrivals
            </h1>
            <p className="text-slate-600 mb-10 font-poppins text-center">
                Explore the latest additions to our collection.
            </p>

            <section className="flex flex-wrap items-center justify-center gap-6">

                {/* Item 1 */}
                <Link to="/pages/JeansDetail" className='group w-56'>
                    <img 
                        className='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-top'
                        src="/images/j1.jpg" 
                        alt="Wide-Leg Jeans" 
                    />
                    <p className='text-xl mt-2'>Wide-Leg Jeans</p>
                    <p className='text-sm mt-2 text-violet-800'><span className="text-orange-600">Seller</span> Krupa Panchal</p>
                    <p className='text-xl'>Rs. 290.00</p>
                </Link>

                {/* Item 2 */}
                <Link to="/pages/JeansDetail" className='group w-56'>
                    <img 
                        className='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right'
                        src="/images/j2.jpg" 
                        alt="Baggy Jeans" 
                    />
                    <p className='text-sm mt-2'>Baggy Jeans</p>
                    <p className='text-sm mt-2 text-violet-800'><span className="text-orange-600">Seller</span> Yash Bachwani</p>
                    <p className='text-xl'>Rs. 390.00</p>
                </Link>

                {/* Item 3 */}
                <Link to="/pages/JeansDetail" className='group w-56'>
                    <img 
                        className='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right'
                        src="/images/j3.jpg" 
                        alt="Cargo" 
                    />
                    <p className='text-sm mt-2'>Cargo</p>
                    <p className='text-sm mt-2 text-violet-800'><span className="text-orange-600">Seller</span> Jeet Pitale</p>
                    <p className='text-xl'>Rs. 290.00</p>
                </Link>

                {/* Item 4 */}
                <Link to="/pages/JeansDetail" className='group w-56'>
                    <img 
                        className='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right'
                        src="/images/j5.jpg" 
                        alt="Flared Jeans" 
                    />
                    <p className='text-sm mt-2'>Flared Jeans</p>
                    <p className='text-sm mt-2 text-violet-800'><span className="text-orange-600">Seller</span> Krupa Panchal</p>
                    <p className='text-xl'>Rs 490.00</p>
                </Link>

            </section>
        </>
    );
};
