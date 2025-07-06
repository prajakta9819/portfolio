import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail } from 'lucide-react';
import heroImage from '@/assets/qa-hero.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Software QA Engineer';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen relative flex items-center justify-center bg-gradient-hero overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-primary-glow/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-wide mb-4 animate-slide-in-left">
            Hi, I'm
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-slide-in-right">
            Alex Johnson
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light h-12 flex items-center justify-center">
            <span className="font-mono">
              {displayText}
              {showCursor && <span className="animate-blink border-r-2 border-primary ml-1"></span>}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Passionate about ensuring software quality with 3+ years of experience across India and Canada. 
            I specialize in manual and automated testing, transforming complex requirements into comprehensive test strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <a 
              href="mailto:alex.johnson.qa@gmail.com"
              className="inline-flex"
            >
              <Button size="lg" className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 border-0">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get In Touch
              </Button>
            </a>
            <a 
              href="https://github.com/alex-johnson-qa/resume/raw/main/Alex_Johnson_QA_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary-glow transition-colors animate-bounce cursor-pointer"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;