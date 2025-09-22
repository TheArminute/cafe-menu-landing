import { Coffee, Phone, MapPin } from "lucide-react";
import coffeeLogo from "@/assets/coffee-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-primary animate-float stagger-2"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-coffee-latte animate-float stagger-3"></div>
      </div>

      {/* Header with Logo */}
      <header className="flex justify-center pt-16 pb-8">
        <div className="logo-glow animate-fade-in-up">
          <img 
            src={coffeeLogo} 
            alt="کافه دلگرم - Delgarm Cafe" 
            className="w-32 h-32 object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 space-y-16">
        {/* Welcome Text */}
        <div className="text-center space-y-6 animate-fade-in-up stagger-1">
          <h1 className="arabic-text text-6xl md:text-7xl font-bold text-primary mb-8">
            دلگرم
          </h1>
          <h2 className="persian-text text-2xl md:text-3xl text-foreground font-light mb-4">
            کافه‌ای با طعم گرمای خانه
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
            تجربه‌ای فراموش‌نشدنی از بهترین قهوه‌های دنیا در فضایی صمیمی و دلنشین
          </p>
        </div>

        {/* Menu Options */}
        <div className="space-y-6 w-full max-w-md animate-fade-in-up stagger-2">
          <button className="coffee-menu-item w-full py-6 px-8 flex items-center justify-between group">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Coffee className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
              <span className="persian-text text-xl font-semibold">منوی کافه</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary-foreground opacity-60 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button className="coffee-menu-item w-full py-6 px-8 flex items-center justify-between group">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <MapPin className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
              <span className="persian-text text-xl font-semibold">آدرس و تماس</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary-foreground opacity-60 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>

        {/* Decorative Quote */}
        <div className="text-center animate-fade-in-up stagger-3">
          <blockquote className="persian-text text-coffee-latte italic text-lg font-light">
            "قهوه، زبان مشترک دل‌هاست"
          </blockquote>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 flex justify-center animate-fade-in-up stagger-3">
        <div className="flex space-x-8 rtl:space-x-reverse">
          <a 
            href="tel:+98-21-1234-5678" 
            className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300"
            aria-label="تماس تلفنی"
          >
            <Phone className="w-5 h-5 text-foreground" />
          </a>
          <a 
            href="#location" 
            className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300"
            aria-label="آدرس کافه"
          >
            <MapPin className="w-5 h-5 text-foreground" />
          </a>
          <a 
            href="#menu" 
            className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300"
            aria-label="منوی کافه"
          >
            <Coffee className="w-5 h-5 text-foreground" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;