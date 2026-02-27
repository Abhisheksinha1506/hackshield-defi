const hacks = [
  {
    name: 'The DAO',
    amount: '$60M',
    type: 'Reentrancy',
    description: 'This pattern was detectable. Ours would have caught it.'
  },
  {
    name: 'Ronin Bridge',
    amount: '$625M',
    type: 'Access Control',
    description: 'This pattern was detectable. Ours would have caught it.'
  },
  {
    name: 'Mango Markets',
    amount: '$117M',
    type: 'Oracle Manipulation',
    description: 'This pattern was detectable. Ours would have caught it.'
  },
  {
    name: 'Pancake Bunny',
    amount: '$45M',
    type: 'Flash Loan',
    description: 'This pattern was detectable. Ours would have caught it.'
  }
];

export function CostOfWaiting() {
  return (
    <section id="cost" className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          The Cost of Waiting
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {hacks.map((hack, idx) => (
            <div
              key={idx}
              className="p-6 border border-border rounded bg-card hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {hack.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {hack.type}
                  </p>
                </div>
                <p className="text-2xl font-mono font-bold text-accent">
                  {hack.amount}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                {hack.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
