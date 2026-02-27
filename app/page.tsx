'use client';

import React, { useState } from 'react';
import { Hero } from '@/components/hero';
import { CostOfWaiting } from '@/components/cost-of-waiting';
import { HowItWorks } from '@/components/how-it-works';
import { SignatureComparison } from '@/components/signature-comparison';
import { SignatureStats } from '@/components/signature-stats';
import { Integrations } from '@/components/integrations';
import { FAQ } from '@/components/faq';
import { Waitlist } from '@/components/waitlist';
import { Footer } from '@/components/footer';
import { ThemeToggle } from '@/components/theme-toggle';
import { supabase } from '../lib/supabase';
import { CheckCircle, AlertCircle, Database, Menu } from 'lucide-react';

// Toast component
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
      }`}>
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <AlertCircle className="w-5 h-5" />
      )}
      <span className="font-medium">{message}</span>
    </div>
  )
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCheckingDuplicate, setIsCheckingDuplicate] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Check if email already exists in database
  const isEmailDuplicate = async (emailToCheck: string) => {
    const normalizedEmail = emailToCheck.toLowerCase()

    try {
      const { data, error } = await supabase
        .from('hackshield_signups')
        .select('email')
        .eq('email', normalizedEmail)
        .limit(1)

      if (error) {
        console.error('Error checking database for duplicate:', error)
        throw error
      }

      return data && data.length > 0
    } catch (error) {
      console.error('Unexpected error checking database:', error)
      throw error
    }
  }

  // Track visitor on page load
  const trackVisitor = async () => {
    try {
      await supabase
        .from('hackshield_visitors')
        .insert([
          {
            page_url: window.location.href,
            user_agent: navigator.userAgent,
            project_name: 'hackshield'
          }
        ])
    } catch (error) {
      console.error('Error tracking visitor:', error)
    }
  }

  React.useEffect(() => {
    trackVisitor()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setToast({ message: 'Please enter a valid email address', type: 'error' })
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setToast({ message: 'Please enter a valid email address', type: 'error' })
      return
    }

    try {
      // Check for duplicate in database
      setIsCheckingDuplicate(true)
      const duplicate = await isEmailDuplicate(email)
      setIsCheckingDuplicate(false)

      if (duplicate) {
        setToast({ message: 'This email is already registered', type: 'error' })
        return
      }

      // Save to Supabase database
      const { error } = await supabase
        .from('hackshield_signups')
        .insert([
          {
            email: email.toLowerCase(),
            project_name: 'hackshield'
          }
        ])

      if (error) {
        console.error('Error saving email to database:', error)
        setToast({ message: 'Failed to register email. Please try again.', type: 'error' })
        return
      }

      setSubmitted(true);
      setEmail('');
      setToast({ message: 'Successfully registered!', type: 'success' })
      setTimeout(() => setSubmitted(false), 3000);

    } catch (error) {
      console.error('Unexpected error:', error)
      setIsCheckingDuplicate(false)
      setToast({ message: 'Registration failed. Please try again.', type: 'error' })
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 64 // Navigation bar height (h-16 = 4rem = 64px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <main className="bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm transition-all duration-300">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Database className="w-4 h-4 text-accent-foreground" />
            </div>
            <h1 className="text-xl font-bold text-primary">HackShield</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium transition-colors hover:text-accent text-muted-foreground"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('register')}
              className="text-sm font-medium transition-colors hover:text-accent text-muted-foreground"
            >
              Early Access
            </button>
            <button
              onClick={() => scrollToSection('cost')}
              className="text-sm font-medium transition-colors hover:text-accent text-muted-foreground"
            >
              Cost of Waiting
            </button>
            <button
              onClick={() => scrollToSection('how')}
              className="text-sm font-medium transition-colors hover:text-accent text-muted-foreground"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('comparison')}
              className="text-sm font-medium transition-colors hover:text-accent text-muted-foreground"
            >
              Why Signatures
            </button>
            <button
              onClick={() => scrollToSection('stats')}
              className="text-sm font-medium transition-colors hover:text-accent text-muted-foreground"
            >
              Database
            </button>
            <button
              onClick={() => scrollToSection('integrations')}
              className="text-sm font-medium transition-colors hover:text-accent text-muted-foreground"
            >
              Integrations
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium transition-colors hover:text-accent text-muted-foreground"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="text-sm font-medium transition-colors hover:text-accent text-muted-foreground"
            >
              Waitlist
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Hero Section */}
      <section id="hero" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-pretty">
            <span className="text-accent">$625M.</span>
            {' '}<span className="text-accent">$117M.</span>
            {' '}<span className="text-accent">$60M.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            All had detectable on-chain patterns before funds left.
          </p>
          <p className="text-lg text-foreground mb-2 leading-relaxed max-w-2xl mx-auto">
            HackShield detects DeFi exploits in real-time using exploit signatures from actual replayed PoCs, not statistical anomalies. Lower false positive rate. Specific alerts. Actionable intelligence.
          </p>
        </div>
      </section>
      {/* Registration Section */}
      <section id="register" className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Early Access Registration
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            First 20 protocols onboarded personally. Limited slots available.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@protocol.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-accent-foreground rounded font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
              disabled={submitted || isCheckingDuplicate}
            >
              {isCheckingDuplicate ? 'Checking...' : submitted ? 'Email Registered!' : 'Protect Your Protocol'}
            </button>
          </form>

          {submitted && (
            <p className="text-accent mt-4 text-sm font-medium">
              Email successfully registered!
            </p>
          )}
        </div>
      </section>
      <CostOfWaiting />
      <HowItWorks />
      <SignatureComparison />
      <SignatureStats />
      <Integrations />
      <FAQ />
      <Waitlist />
      <Footer />
    </main>
  );
}
