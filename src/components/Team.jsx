export default function Team() {
    const teamMembers = [
        {
            name: "Yash Bachwani",
            role: "Full Stack Developer",
            image: "/images/yash.jpg",
        },
        {
            name: "Krupa Panchal",
            role: "Graphic Designer",
            image: "/images/krupa.jpg",
        },
        {
            name: "Jeet Pitale",
            role: "Cyber Security",
            image: "/images/jeet.jpg",
        },
    ];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                * { font-family: 'Poppins', sans-serif; }
            `}</style>
            <br />
            <h1 className="text-3xl font-semibold text-slate-800 text-center">
                Meet Our Team
            </h1>
            <p className="text-slate-500 text-center mt-2">
                The people behind the product, passionate about what they do.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="max-w-80 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        <div className="relative overflow-hidden rounded-t-2xl">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="h-[270px] w-full object-cover object-top hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="px-5 pb-6 text-center">
                            <p className="mt-4 text-lg font-medium text-slate-800">
                                {member.name}
                            </p>
                            <p className="text-sm font-semibold text-orange-500">
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
