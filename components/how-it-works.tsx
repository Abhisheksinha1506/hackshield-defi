const steps = [
  {
    number: 1,
    title: 'Connect Your Protocol',
    description: 'Provide your contract address and chain. We start monitoring immediately.'
  },
  {
    number: 2,
    title: 'Match in Real-Time',
    description: 'Every transaction checked against exploit signature database built from real PoCs.'
  },
  {
    number: 3,
    title: 'Instant Alert',
    description: 'Telegram, Slack, PagerDuty, or webhook fires before damage compounds.'
  }
];

export function HowItWorks() {
  return (
    <section id="how" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          How Detection Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="mb-4">
                <div className="w-12 h-12 rounded border-2 border-accent flex items-center justify-center">
                  <span className="text-accent font-bold text-lg font-mono">
                    {step.number}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
