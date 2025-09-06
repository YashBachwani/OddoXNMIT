export default function JeansBelow2() {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg max-w-3xl mx-auto my-10 overflow-hidden">
      {/* Product Image */}
      <img
        className="w-full md:w-1/2 h-80 md:h-auto object-cover"
        src="/images/j6.jpg"
        alt="White crew-Neck T-Shirt"
      />

      {/* Product Details */}
      <div className="p-6 flex flex-col justify-between">
        {/* Title + Sale Badge */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-slate-800">
            Straight Fit Jeans
          </h3>
          <span className="px-3 py-1 bg-red-500 text-white rounded text-xs font-medium">
            SALE
          </span>
        </div>

        {/* Description */}
        <p className="text-sm mt-3 text-slate-600 leading-relaxed">
          Buy crew neck T-shirts online at India's best online shopping store.
        </p>

        {/* Price */}
        <p className="text-2xl font-bold text-slate-800 mt-4">Rs. 290.00</p>

        {/* Sizes */}
        <div className="flex items-center gap-5 mt-5 flex-wrap">
          {["XS", "S", "M", "L"].map((size) => (
            <label
              key={size}
              className="flex flex-col gap-1 items-center cursor-pointer"
            >
              <input type="radio" name="size" className="hidden peer" />
              <span className="w-6 h-6 border border-slate-300 rounded-full relative flex items-center justify-center peer-checked:after:content-[''] peer-checked:after:w-3 peer-checked:after:h-3 peer-checked:after:bg-indigo-600 peer-checked:border-indigo-600 peer-checked:after:rounded-full peer-checked:after:absolute"></span>
              <span className="text-gray-700 text-sm select-none">{size}</span>
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button className="flex-1 px-6 py-3 bg-slate-800 text-white rounded-md uppercase font-medium hover:bg-slate-700 transition">
            Add to cart
          </button>
          <button className="flex-1 px-6 py-3 border border-slate-800 text-slate-800 rounded-md uppercase font-medium hover:bg-slate-800 hover:text-white transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
