'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

// Toast component
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 ${
      type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
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

// Top Registration Form Component
const TopRegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Get existing emails from localStorage
  const getExistingEmails = () => {
    const emails = localStorage.getItem('hackshield_emails')
    return emails ? JSON.parse(emails) : []
  }

  // Check if email already exists
  const isEmailDuplicate = (emailToCheck: string) => {
    const existingEmails = getExistingEmails()
    return existingEmails.includes(emailToCheck.toLowerCase())
  }

  // Save email to localStorage
  const saveEmail = (emailToSave: string) => {
    const existingEmails = getExistingEmails()
    const updatedEmails = [...existingEmails, emailToSave.toLowerCase()]
    localStorage.setItem('hackshield_emails', JSON.stringify(updatedEmails))
  }

  const handleSubmit = (e: React.FormEvent) => {
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

    // Check for duplicate
    if (isEmailDuplicate(email)) {
      setToast({ message: 'This email is already registered', type: 'error' })
      return
    }

    // Save email
    saveEmail(email)
    setSubmitted(true);
    setEmail('');
    setToast({ message: 'Successfully registered!', type: 'success' })
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
      
      {/* Top Registration Form */}
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
              disabled={submitted}
            >
              {submitted ? 'Email Registered!' : 'Protect Your Protocol'}
            </button>
          </form>
          
          {submitted && (
            <p className="text-accent mt-4 text-sm font-medium">
              Email successfully registered!
            </p>
          )}
        </div>
      </section>
    </>
  )
}

export { TopRegistrationForm };
export function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Add scroll to top on page refresh
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

// Get existing emails from localStorage
  const getExistingEmails = () => {
    const emails = localStorage.getItem('hackshield_emails')
    return emails ? JSON.parse(emails) : []
  }

  // Check if email already exists
  const isEmailDuplicate = (emailToCheck: string) => {
    const existingEmails = getExistingEmails()
    return existingEmails.includes(emailToCheck.toLowerCase())
  }

  // Save email to localStorage
  const saveEmail = (emailToSave: string) => {
    const existingEmails = getExistingEmails()
    const updatedEmails = [...existingEmails, emailToSave.toLowerCase()]
    localStorage.setItem('hackshield_emails', JSON.stringify(updatedEmails))
  }

  const handleSubmit = (e: React.FormEvent) => {
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

    // Check for duplicate
    if (isEmailDuplicate(email)) {
      setToast({ message: 'This email is already registered', type: 'error' })
      return
    }

    // Save email
    saveEmail(email)
    setSubmitted(true);
    setEmail('');
    setToast({ message: 'Successfully registered!', type: 'success' })
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Early Access
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
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
              disabled={submitted}
            >
              {submitted ? 'Email Registered!' : 'Protect Your Protocol'}
            </button>
          </form>
          
          {submitted && (
            <p className="text-accent mt-4 text-sm font-medium">
              Email successfully registered!
            </p>
          )}
        </div>
      </section>
    </>
  );
}
