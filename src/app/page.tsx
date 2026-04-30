import Hero from "@/components/home/Hero";
import WebHostingPlan from "@/components/home/WebHostingPlan";

const HomePage = () => {
  return (
    <section className="pb-24">
      <Hero />
      
      <div className="text-center mt-20 mb-12 px-5">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-800 tracking-tight">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-accent">Hosting Plan</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">Select the perfect plan for your project&apos;s needs.</p>
      </div>
      
      <div className="container mx-auto flex justify-center items-stretch mt-7 flex-wrap gap-8 px-6">
        <WebHostingPlan />
        <WebHostingPlan />
        <WebHostingPlan />
      </div>
    </section>
  )
}

export default HomePage;
