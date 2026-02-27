export function Integrations() {
  const platforms = [
    { name: 'Telegram', icon: '📱' },
    { name: 'Slack', icon: '💬' },
    { name: 'PagerDuty', icon: '📟' },
    { name: 'Webhook', icon: '🔗' },
    { name: 'Email', icon: '✉️' }
  ];

  return (
    <section id="integrations" className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Alert Integrations
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 border border-border rounded flex items-center justify-center text-3xl bg-card">
                {platform.icon}
              </div>
              <p className="text-sm font-medium text-foreground text-center">
                {platform.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
