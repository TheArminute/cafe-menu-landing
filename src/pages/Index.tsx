
import { Coffee, Instagram, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import coffeeLogo from "@/assets/android-chrome-192x192.png";

const Index = () => {
  const navigate = useNavigate();
  
return <div className="h-full overflow-hidden bg-background flex flex-col justify-center relative overflow-hidden">      

      {/* Header with Logo */}

      <header className="flex justify-center pt-10 md:pt-20 pb-5 md:pb-12">
        <div className="logo-glow animate-fade-in-up flex justify-center items-center flex-col">
          <img src={coffeeLogo} alt="کافه ماین - mine cafe" className="object-contain" />
          <h1 className="font-directional text-7xl md:text-8xl font-bold text-black mb- md:mb-6 tracking-widest">MINE</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center px-14 md:px-8">
        {/* Welcome Text */}
        <div className="text-center space-y-8 md:space-y-8 animate-fade-in-up stagger-1">
          <p className="persian-text text-xl md:text-2xl text-accent font-semibold max-w-sm md:max-w-md mx-auto leading-relaxed">
            به کافه ماین خوش امدید
          </p>
          <h2 className="persian-text text-xl md:text-3xl text-foreground font-light mb-2 md:mb-4">
            با مجموعه ای از تلخی ها و شیرینی ها در کنار شما هستیم
          </h2>
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

        {/* Decorative Quote */}
        <div className="text-center animate-fade-in-up stagger-3 pt-10 md:pt-16">
          <blockquote className="persian-text flex justify-center items-center text-muted-foreground italic text-base md:text-lg font-light">
            <div className="flex space-x-6 rtl:space-x-reverse">
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/_cafe.mine_?igsh=MXUydXhzOXRzaHpweQ==" className="w-12 h-12 rounded-full bg-gray-800 backdrop-blur flex items-center justify-center hover:bg-white-700 hover:scale-110 transition-all duration-300 bg-transparent" aria-label="اینستاگرام">
                <Instagram className="w-5 h-5 text-black" />
              </a>
              
              {/* Location Icon */}
              <a href="https://maps.app.goo.gl/K7X7sTpGryTWTQJW8" target="_blank" rel="noopener noreferrer" className="w-12 h-18 rounded-full bg-gray-800 backdrop-blur flex items-center justify-center hover:bg-white-700 hover:scale-110 transition-all duration-300 bg-transparent" aria-label="لوکیشن کافه">
                <MapPin className="w-5 h-5 text-black" />
              </a>
            </div>
          </blockquote>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="w-full py-2 mb-10   flex justify-center animate-fade-in-up stagger-1">
        
      </footer> */}
    </div>
};

export default Index;