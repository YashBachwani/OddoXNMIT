import { Link } from "react-router-dom";

export default function Category() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <h1 className="text-3xl font-semibold text-center mx-auto">Our Category</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                Shop, swap, or sell pre-loved outfits and accessories for every occasion—casual, formal, or traditional.
            </p>

            <div className="flex flex-wrap items-center justify-center mt-12 gap-4 max-w-5xl mx-auto">

                {/* Jeans */}
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="/images/jeanscover.jpg" 
                        alt="Jeans" 
                        className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Jeans</h1>
                        <Link to="/pages/jeans" className="flex items-center gap-1 text-sm text-white/70">
                            Show More →
                        </Link>
                    </div>
                </div>

                {/* T-Shirts */}
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="/images/tshirtcover.jpg" 
                        alt="T-Shirt" 
                        className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">T-Shirt</h1>
                        <Link to="/detail/tshirt" className="flex items-center gap-1 text-sm text-white/70">
                            Show More →
                        </Link>
                    </div>
                </div>

                {/* Jackets */}
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="/images/jacketcover.jpg" 
                        alt="Jacket" 
                        className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Jacket</h1>
                        <Link to="/detail/jacket" className="flex items-center gap-1 text-sm text-white/70">
                            Show More →
                        </Link>
                    </div>
                </div>

                {/* Casual Dress */}
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="/images/casualdresscover.jpg" 
                        alt="Casual Dress" 
                        className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Casual Dress</h1>
                        <Link to="/detail/shirt" className="flex items-center gap-1 text-sm text-white/70">
                            Show More →
                        </Link>
                    </div>
                </div>

                {/* Assesories */}
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="/images/assesoriescover.jpg" 
                        alt="Assesories" 
                        className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Assesories</h1>
                        <Link to="/detail/hoodie" className="flex items-center gap-1 text-sm text-white/70">
                            Show More →
                        </Link>
                    </div>
                </div>

                {/* Footwear */}
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="/images/footwearcover.jpg" 
                        alt="Footwear" 
                        className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Footwear</h1>
                        <Link to="/detail/sneakers" className="flex items-center gap-1 text-sm text-white/70">
                            Show More →
                        </Link>
                    </div>
                </div>

                {/* Jeans */}
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="/images/bagscover.jpg" 
                        alt="Bags" 
                        className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Bags</h1>
                        <Link to="/pages/jeans" className="flex items-center gap-1 text-sm text-white/70">
                            Show More →
                        </Link>
                    </div>
                </div>
                {/* Jeans */}
                <div className="relative group rounded-lg overflow-hidden">
                    <img src="/images/tocover.jpg" 
                        alt="Traditional Outfits" 
                        className="size-56 object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-xl font-medium">Traditional Outfits</h1>
                        <Link to="/pages/jeans" className="flex items-center gap-1 text-sm text-white/70">
                            Show More →
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
