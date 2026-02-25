const stats = [
  {
    number: '12+',
    label: 'Chains Monitored',
    note: 'at launch'
  },
  {
    number: '47+',
    label: 'Exploit Patterns',
    note: 'in signature database'
  },
  {
    number: '5',
    label: 'Attack Categories',
    note: 'covered'
  },
  {
    number: '<2s',
    label: 'Alert Latency',
    note: 'average'
  }
];

export function SignatureStats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Signature Database
        </h2>
        
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 border border-border rounded bg-card text-center"
            >
              <p className="text-4xl sm:text-5xl font-mono font-bold text-accent mb-2">
                {stat.number}
              </p>
              <p className="font-medium text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
