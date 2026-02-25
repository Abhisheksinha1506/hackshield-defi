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
import { supabase } from '../lib/supabase';
import { CheckCircle, AlertCircle } from 'lucide-react';

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

  return (
    <main className="bg-background text-foreground">
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Top Registration Form */}
      <Hero />
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-b border-border">
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
