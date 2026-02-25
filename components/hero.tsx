export function Hero() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
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
  );
}
