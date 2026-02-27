export function SignatureComparison() {
  return (
    <section id="comparison" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Why Signatures Beat Anomaly Detection
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Generic Monitor */}
          <div className="p-8 border border-border rounded bg-card">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Generic Monitor
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <div>
                  <p className="font-medium text-foreground">High False Positives</p>
                  <p className="text-sm text-muted-foreground">Statistical anomaly detection flags normal market behavior</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <div>
                  <p className="font-medium text-foreground">No Context</p>
                  <p className="text-sm text-muted-foreground">You get a flag, but don't know what it means</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground mt-1">•</span>
                <div>
                  <p className="font-medium text-foreground">Alert Fatigue</p>
                  <p className="text-sm text-muted-foreground">Constant notifications you learn to ignore</p>
                </div>
              </li>
            </ul>
          </div>

          {/* HackShield */}
          <div className="p-8 border border-accent/30 bg-card rounded">
            <h3 className="text-xl font-semibold text-accent mb-6">
              HackShield
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-foreground">Matched to Real PoC</p>
                  <p className="text-sm text-muted-foreground">Every signature from actual replayed exploit</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-foreground">Named Exploit Type</p>
                  <p className="text-sm text-muted-foreground">Know exactly which historical hack it matches</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-medium text-foreground">Actionable Immediately</p>
                  <p className="text-sm text-muted-foreground">Specific threat means you can respond with confidence</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
