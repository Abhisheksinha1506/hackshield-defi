export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <p className="text-sm text-muted-foreground">
            Currently in early access · Hosted on Vercel · Migrating to AWS for full launch
          </p>
          
          <div className="flex gap-6 flex-wrap">
            <a
              href="/privacy"
              className="text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Privacy Policy
            </a>
            
            <a
              href="https://www.linkedin.com/in/abhisheksinha1506/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
            
            <a
              href="mailto:abhisheksinha1594@gmail.com"
              className="text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Contact or feedback
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © 2025 HackShield. Real-time DeFi threat detection.
          </p>
        </div>
      </div>
    </footer>
  );
}
