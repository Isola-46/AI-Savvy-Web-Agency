import { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, ChevronDown, Plus, Wand2, Hexagon, Globe, Cpu, Triangle, Cloud, Zap, Square, Circle, Rocket, Search, RefreshCw, MousePointerClick, MessageSquare, Smartphone, Shield, Play, Star, Twitter, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCarouselScroll } from './hooks/useCarouselScroll';

const logosRow1 = [
  { name: "Nexus", icon: Hexagon },
  { name: "GlobalTech", icon: Globe },
  { name: "Quantum", icon: Cpu },
  { name: "Starlight", icon: Sparkles },
  { name: "Pinnacle", icon: Triangle },
  { name: "Horizon", icon: Cloud },
  { name: "Vanguard", icon: Zap },
  { name: "Acme Corp", icon: Square },
];

const logosRow2 = [
  { name: "Aegis", icon: Circle },
  { name: "Zenith", icon: Hexagon },
  { name: "Nova", icon: Sparkles },
  { name: "Vertex", icon: Triangle },
  { name: "Nexus", icon: Hexagon },
  { name: "GlobalTech", icon: Globe },
  { name: "Quantum", icon: Cpu },
  { name: "Horizon", icon: Cloud },
];

const services = [
  {
    icon: Rocket,
    title: "Lightning Fast Sites",
    description: "Your website loads before you can blink. No more waiting. Happy visitors, happy you."
  },
  {
    icon: Search,
    title: "Find-Me Magic",
    description: "We sprinkle secret SEO dust so Google puts you at the top. Be the first thing people see."
  },
  {
    icon: RefreshCw,
    title: "Auto-Pilot Updates",
    description: "Your site fixes and updates itself. You don't have to touch a single line of boring code."
  },
  {
    icon: MousePointerClick,
    title: "Click Magnet Buttons",
    description: "We make buttons that are impossible not to click. Watch your sales go up, up, up."
  },
  {
    icon: MessageSquare,
    title: "Friendly AI Bots",
    description: "Smart robots talk to your customers 24/7. They never sleep, and they're always polite."
  },
  {
    icon: Smartphone,
    title: "Perfect on Phones",
    description: "Looks amazing on tiny screens. Because let's be honest, everyone is just staring at their phones anyway."
  },
  {
    icon: Shield,
    title: "Super Safe Shield",
    description: "We lock the doors and hide the keys. Bad guys and hackers don't stand a chance against our magic shields."
  }
];

const testimonials = [
  {
    type: 'text',
    name: "Kane Williamson",
    role: "Lead Designer",
    text: "\"This adventure exceeded all my expectations and gave me memories I'll cherish forever.\"",
    avatar: "https://i.pravatar.cc/150?img=11",
    date: "09/30/2024",
    platform: "twitter"
  },
  {
    type: 'video',
    name: "Alex Rivera",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800",
    date: "09/30/2024",
    platform: "twitter"
  },
  {
    type: 'text',
    name: "Sarah Jenkins",
    role: "Marketing Director",
    text: "\"The best decision we made for our online presence. Incredible results in just weeks. It feels like they have a magic wand.\"",
    avatar: "https://i.pravatar.cc/150?img=5",
    date: "10/12/2024",
    platform: "twitter"
  },
  {
    type: 'text',
    name: "Marcus Chen",
    role: "Founder",
    text: "\"They literally read our minds. The final product was exactly what we envisioned but 10x better. ADHD friendly indeed.\"",
    avatar: "https://i.pravatar.cc/150?img=8",
    date: "11/05/2024",
    platform: "twitter"
  },
  {
    type: 'video',
    name: "Elena Rodriguez",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    date: "11/20/2024",
    platform: "twitter"
  }
];

const portfolioProjects = [
  {
    id: 1,
    title: "AI E-Commerce",
    url: "magic.ai/shop",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 2,
    title: "FinTech Platform",
    url: "magic.ai/finance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 3,
    title: "Creative Agency",
    url: "magic.ai/agency",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 4,
    title: "Healthcare Portal",
    url: "magic.ai/health",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 5,
    title: "Real Estate Tech",
    url: "magic.ai/real-estate",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1600"
  }
];

const pricingPlans = [
  {
    id: 'popular',
    name: 'Popular',
    target: 'For Small Businesses',
    price: '40',
    features: [
      'Easily create, assign, and track tasks in real time.',
      'Chat, share files, and collaborate seamlessly with your team.',
      'Gain insights with detailed performance dashboards.',
      'Automate repetitive tasks with custom workflow rules.',
      'Connect with Dropbox, Google Drive, and more.'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    target: 'For Marketing Teams',
    price: '50',
    features: [
      'Everything in Popular, plus:',
      'Advanced AI driven analytics and reporting.',
      'Custom branding on all client-facing portals.',
      'Dedicated account manager and priority support.',
      'Unlimited integrations with third-party tools.'
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced',
    target: 'For Agencies',
    price: '60',
    features: [
      'Everything in Pro, plus:',
      'White-labeling options for your agency.',
      'Custom SLA and enterprise-grade security.',
      'On-premise deployment options available.',
      'Direct access to our development team.'
    ]
  }
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most of our magic happens within 2 to 4 weeks depending on the complexity of the project. We prioritize speed without sacrificing that pixel-perfect quality. Custom web platforms are faster, while full e-commerce or SaaS dashboards may take the full 4 weeks."
  },
  {
    question: "Do you use templates or custom designs?",
    answer: "We build everything completely from scratch using modern frameworks like React and Next.js. No boring templates, no bloated themes holding back your performance. Your business is unique, and your digital presence should be completely bespoke."
  },
  {
    question: "What if I am not happy with the designs?",
    answer: "We don't vanish after the first draft! We work closely with you through iterative, real-time feedback loops. Depending on your plan, we offer rounds of revisions or unlimited revisions. We adjust, tweak, and refine until you're absolutely obsessed with the final result."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes! Our relationship doesn't end when your site goes live. We offer ongoing maintenance retainers to ensure your site stays blazing fast, perfectly secure, and up-to-date. Think of us as your continuously operating digital partner."
  },
  {
    question: "Do you also help with copywriting and content?",
    answer: "Absolutely. Great design without great copy is just a pretty picture. We can collaborate with you to craft compelling, conversion-focused copy that aligns with your brand voice and perfectly guides visitors towards making a purchase or booking a call."
  }
];

// New component for Animated and Reactive Orbs
function AnimatedOrb({ positionAndTransform, size, color, mousePosition, intensity = 50, blurClass = "blur-[150px]", animationClass = "animate-orb-float" }: any) {
  const tx = mousePosition.x * intensity;
  const ty = mousePosition.y * intensity;
  
  return (
    <div className={`absolute pointer-events-none z-0 ${positionAndTransform} ${size}`}>
      <div 
        className="w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translate3d(${tx}px, ${ty}px, 0)` }}
      >
        <div className={`w-full h-full rounded-full ${color} ${blurClass} ${animationClass}`}></div>
      </div>
    </div>
  );
}

export default function App() {
  const servicesCarousel = useCarouselScroll(4000);
  const testimCarousel = useCarouselScroll(5000);
  const portfolioCarousel = useCarouselScroll(4500);
  const [selectedPlanId, setSelectedPlanId] = useState('popular');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track global mouse position for parallax orbs
  useEffect(() => {
    let frameId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: (e.clientY / window.innerHeight) * 2 - 1,
        });
        frameId = null;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="bg-black text-white font-sans selection:bg-white selection:text-black hover:bg-black/99 transition-colors">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col p-6 md:p-10 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/nq149LJc/1775727695139.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          {/* Gradient overlay to ensure text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>

        {/* Header */}
        <header className="relative z-10 flex justify-between items-center mb-20">
          {/* Logo */}
          <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">
              <Wand2 className="w-5 h-5" />
            </div>
            MAGIC.AI
          </div>

          {/* Navigation - Pill shape */}
          <nav className="hidden lg:flex items-center gap-8 border border-zinc-800 rounded-full px-8 py-3 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact us</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors">
              English <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 border border-zinc-800 rounded-full px-5 py-2.5 text-sm hover:bg-white hover:text-black transition-all duration-300 group">
              <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowRight className="w-3 h-3" />
              </div>
              Let's Connect
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col lg:flex-row relative z-10">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-12 z-10">
            
            {/* Headline */}
            <h1 className="text-7xl sm:text-8xl lg:text-[6.5rem] font-bold tracking-tight leading-[1.1] mb-10">
              We Build <br />
              <span className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-zinc-900 rounded-2xl mx-3 align-middle border border-zinc-800 shadow-2xl">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </span>
              Magical <br />
              Websites.
            </h1>

            {/* CTA */}
            <button className="flex items-center gap-4 text-lg font-medium hover:text-zinc-300 transition-colors group w-fit mb-8">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
              Start Now
            </button>

            {/* Divider */}
            <div className="w-full max-w-md h-px bg-zinc-800 mb-8"></div>

            {/* Paragraph - ADHD Friendly */}
            <p className="text-zinc-400 text-lg sm:text-xl max-w-md leading-relaxed font-light">
              We use smart computer brains to make your website. 
              It's super fast. It's really easy. No boring stuff allowed.
            </p>
          </div>

          {/* Right Column - Empty to let background shine through */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto mt-16 lg:mt-0 relative pointer-events-none">
          </div>

          {/* Bottom Right Toggle (from screenshot) */}
          <div className="absolute bottom-0 right-0 hidden md:flex items-center gap-3 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-400 bg-black">
            <span>AI Mode:</span>
            <div className="flex items-center gap-1 bg-zinc-900 rounded-full p-1">
              <button className="px-3 py-1 rounded-full bg-white text-black font-medium text-xs">On</button>
              <button className="px-3 py-1 rounded-full hover:text-white transition-colors text-xs">Off</button>
            </div>
          </div>
        </main>
      </div>

      {/* Marquee Section */}
      <section className="py-20 border-t border-zinc-900 relative overflow-hidden bg-black">
        <div className="text-center mb-12">
          <p className="text-zinc-400 font-medium tracking-wide text-lg">Trusted by 350+ happy customers</p>
        </div>
        
        <div className="relative flex flex-col gap-8 overflow-hidden group">
          {/* Gradient masks for smooth fade on edges */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* Row 1 */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            <div className="flex items-center gap-16 px-8">
              {logosRow1.map((logo, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors grayscale hover:grayscale-0 opacity-70 hover:opacity-100 cursor-pointer">
                  <logo.icon className="w-8 h-8" />
                  <span className="text-2xl font-bold tracking-tight">{logo.name}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-16 px-8">
              {logosRow1.map((logo, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors grayscale hover:grayscale-0 opacity-70 hover:opacity-100 cursor-pointer">
                  <logo.icon className="w-8 h-8" />
                  <span className="text-2xl font-bold tracking-tight">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] ml-[-200px]">
            <div className="flex items-center gap-16 px-8">
              {logosRow2.map((logo, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors grayscale hover:grayscale-0 opacity-70 hover:opacity-100 cursor-pointer">
                  <logo.icon className="w-8 h-8" />
                  <span className="text-2xl font-bold tracking-tight">{logo.name}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-16 px-8">
              {logosRow2.map((logo, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors grayscale hover:grayscale-0 opacity-70 hover:opacity-100 cursor-pointer">
                  <logo.icon className="w-8 h-8" />
                  <span className="text-2xl font-bold tracking-tight">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-10 bg-black relative border-t border-zinc-900 overflow-hidden">
        {/* Background glowing orbs */}
        <AnimatedOrb positionAndTransform="top-0 left-1/4" size="w-[400px] h-[400px]" color="bg-purple-500/10" mousePosition={mousePosition} intensity={40} />
        <AnimatedOrb positionAndTransform="bottom-0 right-1/4" size="w-[500px] h-[500px]" color="bg-blue-500/10" mousePosition={mousePosition} intensity={-40} animationClass="animate-orb-float-reverse" />

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 relative z-10">
          {/* Left Side Header */}
          <div className="lg:w-1/2">
            <p className="text-zinc-500 font-bold uppercase tracking-wider text-sm mb-4">/ OUR MAGIC TRICKS</p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Cool Stuff We Build <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">For Your Business</span>
            </h2>
          </div>

          {/* Right Side Description & Controls */}
          <div className="lg:w-1/3 flex flex-col justify-end lg:pt-8">
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-light">
              At MAGIC.AI, we know every business is unique. That's why we don't do boring templates. We build custom, super-fast sites that work like magic for you.
            </p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => servicesCarousel.handleScrollBtn('left')} 
                className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="h-px bg-zinc-800 flex-1 relative overflow-hidden">
                <div 
                  className="absolute top-0 h-full bg-zinc-400 rounded-full transition-all duration-300 ease-out"
                  style={{ 
                    width: `${servicesCarousel.indicatorWidth}%`,
                    left: `${servicesCarousel.scrollProgress * (100 - servicesCarousel.indicatorWidth)}%` 
                  }}
                ></div>
              </div>
              <button 
                onClick={() => servicesCarousel.handleScrollBtn('right')} 
                className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Cards */}
        <div
          ref={servicesCarousel.containerRef}
          {...servicesCarousel.handlers}
          className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 touch-pan-x select-none relative z-10"
        >
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="service-card snap-start shrink-0 w-[300px] md:w-[380px] bg-[#111111] rounded-[2rem] p-8 flex flex-col justify-between aspect-[4/5] border border-zinc-900 hover:border-zinc-700 transition-colors group cursor-grab active:cursor-grabbing"
            >
              <div className="w-16 h-16 rounded-full bg-black border border-zinc-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 relative bg-black overflow-hidden flex flex-col items-center border-t border-zinc-900">
        {/* Background glowing orbs */}
        <AnimatedOrb positionAndTransform="top-1/3 left-0 -translate-x-1/2" size="w-[600px] h-[600px]" color="bg-emerald-500/10" mousePosition={mousePosition} intensity={60} />
        <AnimatedOrb positionAndTransform="bottom-1/4 right-0 translate-x-1/3" size="w-[500px] h-[500px]" color="bg-blue-500/10" mousePosition={mousePosition} intensity={-50} animationClass="animate-orb-float-reverse" />

        <div className="text-center max-w-3xl mb-16 px-6 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-zinc-300 font-medium mb-6">
            Testimonial
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Chosen by 14k+ growing <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">businesses worldwide!</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            See what our clients are saying about their experiences and the results they've achieved working with us.
          </p>
          <button className="flex items-center gap-2 bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-zinc-200 transition-colors mx-auto">
            Contact Sales
          </button>
        </div>

        {/* Testimonials Carousel */}
        <div 
          ref={testimCarousel.containerRef}
          {...testimCarousel.handlers}
          className="flex items-center gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-[20vw] py-12 w-full touch-pan-x select-none relative z-10"
        >
          {testimonials.map((t, idx) => (
            t.type === 'text' ? (
              <div 
                key={idx} 
                className={`w-[320px] md:w-[400px] shrink-0 p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col justify-between snap-center cursor-grab active:cursor-grabbing hover:border-white/20 transition-all duration-500 ${
                  idx === testimCarousel.activeIndex ? 'scale-105 opacity-100 z-10 shadow-2xl shadow-black/50' : 'scale-[0.85] opacity-30 z-0'
                }`}
                style={{ height: '400px' }}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-white/10" referrerPolicy="no-referrer" />
                      <div>
                        <h4 className="font-semibold text-white">{t.name}</h4>
                        <p className="text-sm text-zinc-400">{t.role}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Twitter className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-zinc-300 font-light leading-relaxed mb-8 text-lg">
                    {t.text}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-zinc-500 font-medium">{t.date}</span>
                </div>
              </div>
            ) : (
              <div 
                key={idx} 
                className={`w-[320px] md:w-[400px] shrink-0 rounded-[2rem] overflow-hidden relative snap-center border border-white/10 cursor-grab active:cursor-grabbing group transition-all duration-500 ${
                  idx === testimCarousel.activeIndex ? 'scale-105 opacity-100 z-10 shadow-2xl shadow-black/50' : 'scale-[0.85] opacity-30 z-0'
                }`}
                style={{ height: '450px' }}
              >
                <img src={t.image} alt={t.name} className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/80"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-white text-lg">{t.name}</h4>
                      <p className="text-sm text-zinc-300">{t.role}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                      <Twitter className="w-5 h-5 text-black" fill="currentColor" />
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer pointer-events-auto hover:scale-110 transition-transform ring-1 ring-white/30">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <Play className="w-5 h-5 text-black ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-1 opacity-90">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-white/70 font-medium">{t.date}</span>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 relative bg-black overflow-hidden flex flex-col items-center border-t border-zinc-900">
        {/* Background glowing orbs */}
        <AnimatedOrb positionAndTransform="top-1/4 right-0 translate-x-1/3" size="w-[600px] h-[600px]" color="bg-indigo-600/10" mousePosition={mousePosition} intensity={50} />
        <AnimatedOrb positionAndTransform="bottom-0 left-0 -translate-x-1/3" size="w-[400px] h-[400px]" color="bg-purple-500/10" mousePosition={mousePosition} intensity={-60} animationClass="animate-orb-float-reverse" />

        {/* Header with Floating Icons */}
        <div className="text-center max-w-4xl mb-16 px-6 relative z-10 w-full">
          {/* Floating Icons mimicking the screenshot */}
          <div 
            className="hidden lg:flex absolute top-0 left-4 w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl items-center justify-center -rotate-12 shadow-xl animate-bounce"
            style={{ animationDuration: '4s' }}
          >
            <Cpu className="w-6 h-6 text-indigo-400" />
          </div>
          <div 
            className="hidden lg:flex absolute top-20 right-4 w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl items-center justify-center rotate-12 shadow-xl animate-bounce"
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          >
            <Rocket className="w-5 h-5 text-pink-400" />
          </div>
          <div 
            className="hidden lg:flex absolute -bottom-10 left-16 w-10 h-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl items-center justify-center rotate-6 shadow-xl animate-bounce"
            style={{ animationDuration: '6s', animationDelay: '0.5s' }}
          >
            <Shield className="w-4 h-4 text-emerald-400" />
          </div>
          <div 
            className="hidden lg:flex absolute -bottom-5 right-16 w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl items-center justify-center -rotate-6 shadow-xl animate-bounce"
            style={{ animationDuration: '4.5s', animationDelay: '2s' }}
          >
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>

          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-zinc-300 font-medium mb-6">
            Our Portfolio
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Empowering Ambitions <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">Through Magic Work</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10">
            Discover flexible, world-class digital platforms designed to elevate your brand and accelerate your journey.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => portfolioCarousel.handleScrollBtn('left')} 
              className="w-14 h-14 rounded-full border border-zinc-700 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => portfolioCarousel.handleScrollBtn('right')} 
              className="w-14 h-14 rounded-full border border-zinc-700 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Next project"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Portfolio Carousel */}
        <div 
          ref={portfolioCarousel.containerRef}
          {...portfolioCarousel.handlers}
          className="flex items-center gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-[7.5vw] lg:px-[20vw] py-12 w-full touch-pan-x select-none relative z-10"
        >
          {portfolioProjects.map((project, idx) => (
            <div 
              key={project.id}
              className={`w-[85vw] lg:w-[60vw] max-w-[900px] shrink-0 rounded-[1.5rem] overflow-hidden relative snap-center cursor-grab active:cursor-grabbing transition-all duration-700 ease-out border border-white/10 flex flex-col bg-zinc-950 ${
                idx === portfolioCarousel.activeIndex 
                  ? 'scale-100 opacity-100 z-10 shadow-[0_0_50px_rgba(30,10,50,0.5)] blur-none' 
                  : 'scale-[0.85] opacity-40 z-0 blur-[3px]'
              }`}
              style={{ height: 'auto', aspectRatio: '16/10' }} // Browser window aspect ratio
            >
              {/* Browser Native Top Bar */}
              <div className="h-10 md:h-12 bg-[#1A1A1A] flex items-center px-4 md:px-6 gap-2 w-full border-b border-white/5 shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="hidden md:flex items-center justify-center bg-black/50 border border-white/5 rounded-md px-16 py-1.5 text-xs text-zinc-500 font-mono tracking-wide">
                    {project.url}
                  </div>
                </div>
              </div>
              
              {/* Mockup Image */}
              <div className="w-full flex-1 relative bg-zinc-900 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-[10s] ease-linear group-hover:object-bottom"
                  referrerPolicy="no-referrer" 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-6 md:px-10 bg-black relative border-t border-zinc-900 overflow-hidden">
        {/* Background glowing orbs */}
        <AnimatedOrb positionAndTransform="top-1/4 right-1/4" size="w-[500px] h-[500px]" color="bg-rose-500/10" mousePosition={mousePosition} intensity={30} />
        <AnimatedOrb positionAndTransform="bottom-1/4 left-1/4" size="w-[400px] h-[400px]" color="bg-orange-500/10" mousePosition={mousePosition} intensity={-40} animationClass="animate-orb-float-reverse" />

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
          <div className="text-center mb-20 max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-zinc-300 font-medium mb-6">
              How It Works
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Three Steps To <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400">Digital Perfection</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              We've stripped away the complexity. Our streamlined process is built for speed, transparency, and delivering jaw-dropping results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-36 h-36 rounded-full border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl flex items-center justify-center mb-8 relative group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-colors duration-500">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-black font-bold border-4 border-black z-20">1</div>
                <MessageSquare className="w-12 h-12 text-zinc-400 group-hover:text-orange-400 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Discovery & Strategy</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                We kick things off with a deep dive into your vision, goals, and audience. We establish the roadmap and map out exactly what success looks like.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative z-10 group mt-12 md:mt-0">
              <div className="w-36 h-36 rounded-full border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl flex items-center justify-center mb-8 relative group-hover:border-rose-500/50 group-hover:bg-rose-500/10 transition-colors duration-500">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-black font-bold border-4 border-black z-20">2</div>
                <Wand2 className="w-12 h-12 text-zinc-400 group-hover:text-rose-400 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">The Magic Happens</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                Our team gets to work designing and building your bespoke digital platform. You get regular updates and full transparency as your idea comes to life.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative z-10 group mt-12 md:mt-0">
              <div className="w-36 h-36 rounded-full border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl flex items-center justify-center mb-8 relative group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-colors duration-500">
                 <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-black font-bold border-4 border-black z-20">3</div>
                <Rocket className="w-12 h-12 text-zinc-400 group-hover:text-purple-400 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Launch & Scale</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                We meticulously test everything before hitting the big red deploy button. You receive a blazing-fast platform and the keys to start scaling immediately.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 relative bg-black overflow-hidden flex flex-col items-center border-t border-zinc-900">
        {/* Background glowing orbs */}
        <AnimatedOrb positionAndTransform="top-1/4 right-0 translate-x-1/3" size="w-[600px] h-[600px]" color="bg-indigo-600/10" mousePosition={mousePosition} intensity={50} />
        <AnimatedOrb positionAndTransform="bottom-0 left-0 -translate-x-1/3" size="w-[400px] h-[400px]" color="bg-purple-500/10" mousePosition={mousePosition} intensity={-60} animationClass="animate-orb-float-reverse" />

        {/* Header with Floating Icons */}
        <div className="text-center max-w-4xl mb-16 px-6 relative z-10 w-full">
          {/* Floating Icons mimicking the screenshot */}
          <div 
            className="hidden lg:flex absolute top-0 left-4 w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl items-center justify-center -rotate-12 shadow-xl animate-bounce"
            style={{ animationDuration: '4s' }}
          >
            <Cpu className="w-6 h-6 text-indigo-400" />
          </div>
          <div 
            className="hidden lg:flex absolute top-20 right-4 w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl items-center justify-center rotate-12 shadow-xl animate-bounce"
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          >
            <Rocket className="w-5 h-5 text-pink-400" />
          </div>
          <div 
            className="hidden lg:flex absolute -bottom-10 left-16 w-10 h-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl items-center justify-center rotate-6 shadow-xl animate-bounce"
            style={{ animationDuration: '6s', animationDelay: '0.5s' }}
          >
            <Shield className="w-4 h-4 text-emerald-400" />
          </div>
          <div 
            className="hidden lg:flex absolute -bottom-5 right-16 w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl items-center justify-center -rotate-6 shadow-xl animate-bounce"
            style={{ animationDuration: '4.5s', animationDelay: '2s' }}
          >
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>

          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-zinc-300 font-medium mb-6">
            Our Portfolio
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Empowering Ambitions <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">Through Magic Work</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10">
            Discover flexible, world-class digital platforms designed to elevate your brand and accelerate your journey.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => portfolioCarousel.handleScrollBtn('left')} 
              className="w-14 h-14 rounded-full border border-zinc-700 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => portfolioCarousel.handleScrollBtn('right')} 
              className="w-14 h-14 rounded-full border border-zinc-700 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Next project"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Portfolio Carousel */}
        <div 
          ref={portfolioCarousel.containerRef}
          {...portfolioCarousel.handlers}
          className="flex items-center gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-[7.5vw] lg:px-[20vw] py-12 w-full touch-pan-x select-none relative z-10"
        >
          {portfolioProjects.map((project, idx) => (
            <div 
              key={project.id}
              className={`w-[85vw] lg:w-[60vw] max-w-[900px] shrink-0 rounded-[1.5rem] overflow-hidden relative snap-center cursor-grab active:cursor-grabbing transition-all duration-700 ease-out border border-white/10 flex flex-col bg-zinc-950 ${
                idx === portfolioCarousel.activeIndex 
                  ? 'scale-100 opacity-100 z-10 shadow-[0_0_50px_rgba(30,10,50,0.5)] blur-none' 
                  : 'scale-[0.85] opacity-40 z-0 blur-[3px]'
              }`}
              style={{ height: 'auto', aspectRatio: '16/10' }} // Browser window aspect ratio
            >
              {/* Browser Native Top Bar */}
              <div className="h-10 md:h-12 bg-[#1A1A1A] flex items-center px-4 md:px-6 gap-2 w-full border-b border-white/5 shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="hidden md:flex items-center justify-center bg-black/50 border border-white/5 rounded-md px-16 py-1.5 text-xs text-zinc-500 font-mono tracking-wide">
                    {project.url}
                  </div>
                </div>
              </div>
              
              {/* Mockup Image */}
              <div className="w-full flex-1 relative bg-zinc-900 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-[10s] ease-linear group-hover:object-bottom"
                  referrerPolicy="no-referrer" 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-6 md:px-10 bg-black relative border-t border-zinc-900 overflow-hidden">
        {/* Background glowing orbs */}
        <AnimatedOrb positionAndTransform="top-1/4 right-1/4" size="w-[500px] h-[500px]" color="bg-rose-500/10" mousePosition={mousePosition} intensity={30} />
        <AnimatedOrb positionAndTransform="bottom-1/4 left-1/4" size="w-[400px] h-[400px]" color="bg-orange-500/10" mousePosition={mousePosition} intensity={-40} animationClass="animate-orb-float-reverse" />

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
          <div className="text-center mb-20 max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-zinc-300 font-medium mb-6">
              How It Works
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Three Steps To <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400">Digital Perfection</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              We've stripped away the complexity. Our streamlined process is built for speed, transparency, and delivering jaw-dropping results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-36 h-36 rounded-full border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl flex items-center justify-center mb-8 relative group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-colors duration-500">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-black font-bold border-4 border-black z-20">1</div>
                <MessageSquare className="w-12 h-12 text-zinc-400 group-hover:text-orange-400 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Discovery & Strategy</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                We kick things off with a deep dive into your vision, goals, and audience. We establish the roadmap and map out exactly what success looks like.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative z-10 group mt-12 md:mt-0">
              <div className="w-36 h-36 rounded-full border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl flex items-center justify-center mb-8 relative group-hover:border-rose-500/50 group-hover:bg-rose-500/10 transition-colors duration-500">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-black font-bold border-4 border-black z-20">2</div>
                <Wand2 className="w-12 h-12 text-zinc-400 group-hover:text-rose-400 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">The Magic Happens</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                Our team gets to work designing and building your bespoke digital platform. You get regular updates and full transparency as your idea comes to life.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative z-10 group mt-12 md:mt-0">
              <div className="w-36 h-36 rounded-full border border-zinc-800 bg-zinc-950/50 backdrop-blur-xl flex items-center justify-center mb-8 relative group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-colors duration-500">
                 <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-black font-bold border-4 border-black z-20">3</div>
                <Rocket className="w-12 h-12 text-zinc-400 group-hover:text-purple-400 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Launch & Scale</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                We meticulously test everything before hitting the big red deploy button. You receive a blazing-fast platform and the keys to start scaling immediately.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6 md:px-10 bg-black relative border-t border-zinc-900 overflow-hidden">
        {/* Background glowing orbs to enhance glassmorphism */}
        <AnimatedOrb positionAndTransform="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" size="w-[500px] h-[500px]" color="bg-blue-500/20" mousePosition={mousePosition} intensity={70} />
        <AnimatedOrb positionAndTransform="top-1/2 right-0 translate-x-1/4 -translate-y-1/2" size="w-[500px] h-[500px]" color="bg-purple-500/20" mousePosition={mousePosition} intensity={-40} animationClass="animate-orb-float-reverse" />
        <AnimatedOrb positionAndTransform="top-0 right-1/4" size="w-[300px] h-[300px]" color="bg-emerald-500/10" blurClass="blur-[120px]" mousePosition={mousePosition} intensity={30} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Choose the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">ideal plan</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Get access to premium features designed to boost productivity and simplify your workflow with seamless performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column: Glassmorphic Features Box */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between min-h-[500px] shadow-2xl shadow-black/50">
              {/* Subtle inner gradient lighting */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>
              
              <div className="relative z-10">
                <ul className="space-y-6">
                  {pricingPlans.find(p => p.id === selectedPlanId)?.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-300">
                      <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-zinc-300 font-light leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                <button className="text-sm font-medium text-white hover:text-zinc-300 transition-colors border-b border-white/30 hover:border-white/60 pb-1">
                  See All Comparison
                </button>
              </div>
            </div>

            {/* Right Column: Plan Selection list */}
            <div className="flex flex-col gap-4 justify-center">
              {pricingPlans.map((plan) => {
                const isSelected = selectedPlanId === plan.id;
                return (
                  <div 
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`p-8 rounded-[2rem] cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                      isSelected 
                        ? 'bg-gradient-to-r from-white/10 to-white/5 border border-white/20 shadow-xl backdrop-blur-md' 
                        : 'bg-transparent border border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <div className="shrink-0">
                        {isSelected ? (
                          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-110 transition-transform">
                            <Check className="w-4 h-4 text-black" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-full border border-zinc-600 group-hover:border-zinc-400 group-hover:bg-white/5 transition-all"></div>
                        )}
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold tracking-tight mb-2 transition-colors ${isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                          {plan.name}
                        </h3>
                        <p className="text-sm font-light text-zinc-500">{plan.target}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-end justify-end gap-1">
                        <span className={`text-4xl font-bold tracking-tight transition-colors ${isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                          ${plan.price}
                        </span>
                        <span className="text-zinc-500 text-sm font-light mb-1">/month</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-10 bg-black relative border-t border-zinc-900 overflow-hidden">
        {/* Background glowing orbs */}
        <AnimatedOrb positionAndTransform="top-1/4 left-1/4" size="w-[500px] h-[500px]" color="bg-emerald-500/10" mousePosition={mousePosition} intensity={40} />
        <AnimatedOrb positionAndTransform="bottom-1/4 right-1/4" size="w-[400px] h-[400px]" color="bg-cyan-500/10" mousePosition={mousePosition} intensity={-30} animationClass="animate-orb-float-reverse" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-zinc-300 font-medium mb-6">
              Clear The Doubts
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Got questions? <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">We've got answers</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              Everything you need to know before we start making magic together.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Grand Finale Footer */}
      <footer className="relative bg-black border-t border-zinc-900 pt-32 pb-10 overflow-hidden">
        {/* Background glowing orb rising from the bottom */}
        <AnimatedOrb positionAndTransform="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" size="w-[800px] h-[800px]" color="bg-indigo-500/10" mousePosition={mousePosition} intensity={20} blurClass="blur-[200px]" animationClass="animate-orb-float-reverse" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          
          {/* Top Half: The Final Call to Action */}
          <div className="flex flex-col items-center text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              Ready to make some magic? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Let's build your dream platform.</span>
            </h2>
            <button className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative text-lg tracking-wide z-10 flex items-center gap-2">
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Separation Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>

          {/* Bottom Half: 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            
            {/* Column 1: Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6 cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-zinc-400 flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-sm transform rotate-45"></div>
                </div>
                <span className="font-bold text-xl tracking-tight">Magic</span>
              </div>
              <p className="text-zinc-500 font-light text-sm mb-8 max-w-[200px]">
                Engineering digital perfection for forward-thinking brands.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="col-span-1">
              <h4 className="text-white font-semibold mb-6 tracking-tight">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Services</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Portfolio</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Pricing</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Testimonials</a></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="col-span-1">
              <h4 className="text-white font-semibold mb-6 tracking-tight">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">About Us</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Careers</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Blog</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Contact</a></li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div className="col-span-1">
              <h4 className="text-white font-semibold mb-6 tracking-tight">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Privacy Policy</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Terms of Service</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Cookie Policy</a></li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
            <p className="text-zinc-600 text-sm font-light mb-4 md:mb-0">
              © {new Date().getFullYear()} Magic Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-zinc-600 text-sm font-light">
              Crafted with <Star className="w-3 h-3 text-purple-500" /> by Magic.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({ faq }: { faq: typeof faqs[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 overflow-hidden group">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className={`text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300 pr-8 ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
          {faq.question}
        </span>
        <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? 'border-zinc-400 bg-white/5' : 'border-zinc-800 group-hover:border-zinc-500 group-hover:bg-white/5'}`}>
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Plus className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
          </motion.div>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pb-8 pr-12 md:pr-24">
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
