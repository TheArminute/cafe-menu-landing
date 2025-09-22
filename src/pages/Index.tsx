import { Coffee, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import coffeeLogo from "@/assets/coffee-logo.png";
const Index = () => {
  const navigate = useNavigate();
  
  return <div className="min-h-screen bg-gradient-dark flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 mx-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-primary animate-float stagger-2"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-coffee-latte animate-float stagger-3"></div>
      </div>

      {/* Header with Logo */}
      <header className="flex justify-center pt-16 pb-8">
        <div className="logo-glow animate-fade-in-up">
          <img src={coffeeLogo} alt="کافه دلگرم - Delgarm Cafe" className="w-32 h-32 object-contain" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 space-y-16">
        {/* Welcome Text */}
        <div className="text-center space-y-6 animate-fade-in-up stagger-1">
          <h1 className="arabic-text text-6xl md:text-7xl font-bold text-primary mb-8">mine</h1>
          <h2 className="persian-text text-2xl md:text-3xl text-foreground font-light mb-4">
            کافه‌ای با طعم گرمای خانه
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
            تجربه‌ای فراموش‌نشدنی از بهترین قهوه‌های دنیا در فضایی صمیمی و دلنشین
          </p>
        </div>

        {/* Menu Section */}
        <div className="space-y-6 w-full max-w-md animate-fade-in-up stagger-2">
          <button 
            onClick={() => navigate('/menu')}
            className="text-center w-full group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            {/* Top decorative line */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mb-6 group-hover:via-primary transition-colors duration-300"></div>
            
            {/* Menu text */}
            <div className="persian-text text-2xl font-semibold text-accent flex items-center justify-center space-x-3 rtl:space-x-reverse group-hover:text-primary transition-colors duration-300">
              <Coffee className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
              <span>منوی کافه</span>
            </div>
            
            {/* Bottom decorative line */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mt-6 group-hover:via-primary transition-colors duration-300"></div>
          </button>
        </div>

        {/* Decorative Quote */}
        <div className="text-center animate-fade-in-up stagger-3">
          <blockquote className="persian-text text-coffee-latte italic text-lg font-light my-[2px]">
            "قهوه، زبان مشترک دل‌هاست"
          </blockquote>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 flex justify-center animate-fade-in-up stagger-3 mx-0 px-0 my-[15px]">
        <div className="flex space-x-8 rtl:space-x-reverse">
          <a href="https://instagram.com" className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300" aria-label="اینستاگرام">
            <Instagram className="w-5 h-5 text-foreground" />
          </a>
        </div>
      </footer>
    </div>;
};
export default Index;