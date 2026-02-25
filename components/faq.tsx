'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Which chains are supported?',
    answer: 'We currently monitor 12+ chains including Ethereum, Arbitrum, Optimism, Polygon, Avalanche, and more. Contact us for specific chain support or integrations.'
  },
  {
    question: 'What is your false positive rate?',
    answer: 'Because we use signatures from real replayed exploits rather than statistical anomaly detection, our false positive rate is significantly lower. Most competitors report 30-50% false positive rates; ours is under 5%.'
  },
  {
    question: 'How fast are alerts?',
    answer: 'Average alert latency is under 2 seconds from the time a matching transaction appears on-chain. This gives protocols a critical window to respond before damage compounds.'
  },
  {
    question: 'Do you need access to my contract source code?',
    answer: 'No. We monitor on-chain transaction patterns only. We don\'t need or ask for your source code, private keys, or internal systems.'
  },
  {
    question: 'How are exploit signatures created?',
    answer: 'We use the Web3-Graveyard repository of real historical PoCs, replay them against on-chain data, and extract the specific patterns. Every signature is auditable and reproducible.'
  },
  {
    question: 'Is there a testnet mode?',
    answer: 'Yes. Early access users can test on testnet chains before enabling mainnet monitoring. This lets you validate alerts and integrations in your environment first.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <button
              key={idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left p-6 border border-border rounded bg-card hover:border-accent/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-foreground text-balance pr-4">
                  {faq.question}
                </h3>
                <span className="text-accent text-xl font-mono flex-shrink-0">
                  {openIndex === idx ? '−' : '+'}
                </span>
              </div>
              
              {openIndex === idx && (
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
