import { ArrowLeft, Coffee } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "اسپرسو",
      price: "45,000",
      description: "قهوه تازه برشته شده با طعم قوی و تلخ",
      calories: "5 کالری"
    },
    {
      name: "کاپوچینو", 
      price: "55,000",
      description: "اسپرسو با شیر کف کرده و پودر دارچین",
      calories: "150 کالری"
    },
    {
      name: "لاته",
      price: "60,000", 
      description: "اسپرسو با شیر گرم و لایه کف نرم",
      calories: "190 کالری"
    },
    {
      name: "آمریکانو",
      price: "50,000",
      description: "اسپرسو با آب گرم، طعم ملایم",
      calories: "15 کالری"
    },
    {
      name: "موکا",
      price: "65,000",
      description: "اسپرسو با شکلات و شیر کف کرده",
      calories: "290 کالری"
    },
    {
      name: "فرپه",
      price: "70,000",
      description: "قهوه سرد با یخ و کف شیر",
      calories: "240 کالری"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 rtl:space-x-reverse text-accent hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="persian-text text-lg">بازگشت</span>
        </button>
        
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Coffee className="w-8 h-8 text-accent" />
          <h1 className="persian-text text-3xl font-bold text-accent">منوی کافه mine</h1>
        </div>
      </header>

      {/* Menu Items */}
      <main className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-right">
                    <h3 className="persian-text text-2xl font-bold text-accent mb-2">
                      {item.name}
                    </h3>
                    <p className="persian-text text-muted-foreground leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.calories}
                    </p>
                  </div>
                  <div className="text-left">
                    <span className="text-2xl font-bold text-primary">
                      {item.price}
                    </span>
                    <span className="persian-text text-sm text-muted-foreground block">
                      ریال
                    </span>
                  </div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;