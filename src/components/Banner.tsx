

const Banner = () => {
  return (
    <main className="h-screen flex flex-col bg-hero-pattern 
    bg-cover bg-center justify-center items-center">
        <div className="text-center mb-11 h-[40rem] bg-slate-900 flex flex-col justify-center items-center overflow-visible w-[28rem]">
            <p className="text-[2rem] italic  text-cyan-500">Find the Best</p>
            <p className="text-white font-bold mb-6 w-[46rem] text-[3rem]">MODERN APARTMENT IN A NEW RESIDENTIAL COMPLEX</p>
            <button className=" bg-blue-400 hover:bg-blue-500 
            text-[.9rem] px-9 py-3 uppercase text-white">Learn More</button>
        </div>
        <div>
            <p className="text-white cursor-pointer uppercase text-[.9rem]">Explore</p>
        </div>
    </main>
  )
}

export default Banner