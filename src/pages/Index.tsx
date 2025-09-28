import { Coffee, Instagram, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import coffeeLogo from "@/assets/coffee-logo.png";

const Index = () => {
  const navigate = useNavigate();
  
  return <div className="min-h-screen bg-gradient-background flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 mx-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-primary animate-float stagger-2"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-secondary animate-float stagger-3"></div>
      </div>

      {/* Large, faded 'M' in the background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg
          className="w-4/5 h-auto text-primary"
          viewBox="0 0 400 400"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M48 375 L118 100 L200 300 L282 100 L352 375 H300 L230 175 L170 375 H120 L190 175 L120 375 Z" />
        </svg>
      </div>

      {/* Header with Logo */}
      <header className="flex justify-center pt-20 md:pt-20 pb-20 md:pb-16">
        <div className="logo-glow animate-fade-in-up">
          <img src={coffeeLogo} alt="کافه دلگرم - Delgarm Cafe" className="w-32 h-32 md:w-36 md:h-36 object-contain" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 md:px-8">
        {/* Welcome Text */}
        <div className="text-center space-y-6 md:space-y-8 animate-fade-in-up stagger-1">
          <h1 className="arabic-text text-5xl md:text-7xl font-bold text-primary mb-4 md:mb-8">mine</h1>
          <h2 className="persian-text text-xl md:text-3xl text-foreground font-light mb-2 md:mb-4">
            با مجموعه ای از تلخی ها و شیرینی های زندگی در کنار شما هستیم
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-sm md:max-w-md mx-auto leading-relaxed">
            به کافه ماین خوش امدید
          </p>
        </div>

        {/* Menu Section */}
        <div className="w-full max-w-md animate-fade-in-up stagger-2 mt-10 md:mt-12">
          <button 
            onClick={() => navigate('/menu')}
            className="text-center w-full group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            {/* Top decorative line */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mb-5 md:mb-6 group-hover:via-primary transition-colors duration-300"></div>
            
            {/* Menu text */}
            <div className="persian-text text-xl md:text-2xl font-semibold text-accent group-hover:text-primary transition-colors duration-300">
              <span>منوی کافه</span>
            </div>
            
            {/* Bottom decorative line */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mt-5 md:mt-6 group-hover:via-primary transition-colors duration-300"></div>
          </button>
        </div>

        {/* Spacer to push quote down */}
        <div className="flex-grow"></div>

        {/* Decorative Quote */}
        <div className="text-center animate-fade-in-up stagger-3 pb-6 pt-12 md:pt-16">
          <blockquote className="persian-text text-muted-foreground italic text-base md:text-lg font-light">
            
          </blockquote>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black py-4 flex justify-center animate-fade-in-up stagger-3">
        <div className="flex space-x-8 rtl:space-x-reverse">
          {/* Instagram Icon */}
          <a href="https://instagram.com" className="w-12 h-12 rounded-full bg-gray-800 backdrop-blur flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-300" aria-label="اینستاگرام">
            <Instagram className="w-5 h-5 text-white" />
          </a>
          
          {/* Location Icon */}
          <a href="https://maps.google.com/?q=your-cafe-address" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 backdrop-blur flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-300" aria-label="لوکیشن کافه">
            <MapPin className="w-5 h-5 text-white" />
          </a>
        </div>
      </footer>
    </div>;
};

export default Index;