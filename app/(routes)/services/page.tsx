import type { Metadata } from 'next';
import Navbar       from '@/components/sections/Navbar';
import Footer       from '@/components/sections/Footer';
import ServicesGrid from '@/components/sections/ServicesGrid';
import FAQ          from '@/components/sections/FAQ';
import WhyChoose    from '@/components/sections/WhyChoose';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Services',
  description:
    "Explore TAMKEEN's six specialized domains — from power generation to offshore automation and EV infrastructure.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white dark:bg-gray-950">
      <Navbar />

      {/* Page hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(21,101,192,0.06) 0%, rgba(34,197,94,0.06) 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #D1D5DB 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
            style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
          >
            Capabilities
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Six Domains.{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
            >
              One Partner.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            From turbine maintenance to large-scale solar deployments — TAMKEEN covers the full
            spectrum of industrial energy needs under one roof.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <WhyChoose />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}
// import React from 'react'
// import Link from 'next/link'

// interface Props {}

// function Page(props: Props) {
//   const {} = props

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-950 text-slate-100 font-sans overflow-hidden relative">
      
//       {/* Background Subtle Grid / Glow */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

//       {/* Main Premium Card */}
//       <div className="relative z-10 backdrop-blur-xl bg-slate-900/40 border border-slate-800 p-12 rounded-3xl shadow-2xl max-w-xl w-full flex flex-col items-center border-t-blue-500/30">
        
//         {/* --- PREMIUM ADVANCED ENGINE PART --- */}
//         <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
          
//           {/* Laser Scanning Line */}
//           <div className="absolute inset-0 border border-blue-500/20 rounded-full p-2 animate-pulse">
//             <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute top-1/2 left-0 animate-[bounce_3s_ease-in-out_infinite]"></div>
//           </div>

//           {/* Center Core (Glowing Power Source) */}
//           <div className="absolute w-8 h-8 bg-blue-500 rounded-full blur-md animate-pulse"></div>
//           <div className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#3b82f6]"></div>

//           {/* Gear 1: Central Big Heavy Gear (Clockwise) */}
//           <svg 
//             className="w-32 h-32 text-slate-400 drop-shadow-[0_0_8px_rgba(148,163,184,0.2)] animate-[spin_12s_linear_infinite]" 
//             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
//           >
//             <circle cx="12" cy="12" r="3" />
//             <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
//             <circle cx="12" cy="12" r="7" strokeDasharray="3 3" />
//           </svg>

//           {/* Gear 2: Top Right Tech Gear (Anti-Clockwise) */}
//           <svg 
//             className="w-20 h-20 text-blue-500 absolute top-2 right-2 drop-shadow-[0_0_12px_rgba(59,130,246,0.4)] animate-[spin_6s_linear_infinite_reverse]" 
//             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
//           >
//             <circle cx="12" cy="12" r="4" />
//             <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
//           </svg>

//           {/* Gear 3: Bottom Left Outer Ring Gear (Slow Clockwise) */}
//           <svg 
//             className="w-24 h-24 text-cyan-600/60 absolute bottom-4 left-2 drop-shadow-[0_0_10px_rgba(8,145,178,0.2)] animate-[spin_20s_linear_infinite]" 
//             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
//           >
//             <circle cx="12" cy="12" r="5" />
//             <path strokeDasharray="2 2" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
//           </svg>

//         </div>
//         {/* ------------------------------------- */}

//         {/* Text Content */}
//         <div className="text-center space-y-3">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wider uppercase mb-2">
//             <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
//             System Optimizing
//           </div>
          
//           <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
//             Services Page Under Development
//           </h1>
          
//           <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
//             Our core engine is undergoing architectural refinement. We are building something powerful; check back shortly.
//           </p>
//           <div className="mt-4 border border-blue-500/10 rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-500/10">
//             <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors bold">
//               Go to homepage
//             </Link>
//           </div>
//         </div>

//         {/* Premium Tech Progress Bar (Fixed Error) */}
//         <div className="w-full max-w-xs bg-slate-950 border border-slate-800/80 h-2 rounded-full mt-8 overflow-hidden p-[2px]">
//           <div className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full w-full animate-pulse"></div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Page
