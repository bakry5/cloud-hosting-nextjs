import { TiTick } from 'react-icons/ti';

const WebHostingPlan = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:w-[45%] lg:w-[30%] bg-surface rounded-3xl p-8 shadow-md hover:shadow-2xl border border-slate-100 hover:border-brand/30 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden'>
        
  
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand to-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

        <h3 className='text-3xl font-black text-slate-800 tracking-tight'>Premium</h3>
        
        <strong className='text-4xl font-bold text-brand my-6'>
            $4.99<span className="text-xl text-slate-400 font-medium">/mo</span>
        </strong>
        
        <span className='bg-red-100/80 text-red-600 rounded-full px-3 py-1 text-sm font-bold tracking-wider ring-1 ring-red-200'>
            10% OFF
        </span>
        
        <div className='mt-8 w-full border-t border-slate-100 pt-6'>
            <h5 className='text-xl mb-4 font-bold text-slate-800'>
                Top Features
            </h5>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center text-slate-600 font-medium'>
                    <TiTick className="text-brand text-xl mr-2" /> 100 Websites
                </div>
                <div className='flex items-center text-slate-600 font-medium'>
                    <TiTick className="text-brand text-xl mr-2" /> 100 GB SSD Storage
                </div>
                <div className='flex items-center text-slate-600 font-medium'>
                    <TiTick className="text-brand text-xl mr-2" /> Weekly Backups
                </div>
                <div className='flex items-center text-slate-600 font-medium'>
                    <TiTick className="text-brand text-xl mr-2" /> Unlimited Bandwidth
                </div>
                <div className='flex items-center text-slate-600 font-medium'>
                    <TiTick className="text-brand text-xl mr-2" /> Free SLL
                </div>
                <div className='flex items-center text-slate-600 font-medium'>
                    <TiTick className="text-brand text-xl mr-2" /> Free Email
                </div>
            </div>
        </div>
        
        <button className='mt-8 w-full bg-slate-100 text-slate-800 text-lg font-bold py-3 px-6 rounded-full group-hover:bg-brand group-hover:text-white transition-colors duration-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-brand/30'>
            BUY NOW
        </button>
    </div>
  )
}

export default WebHostingPlan