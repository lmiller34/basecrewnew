const benefits = [
  { stat: "+38%", label: "More customers served per hour on peak days" },
  { stat: "−62%", label: "Fewer end-of-day inventory discrepancies" },
  { stat: "1 afternoon", label: "To get a new seasonal hire fully checkout-ready" },
  { stat: "0", label: "Double bookings on demo and rental gear" },
];

export function Benefits() {
  return (
    <section className="border-y border-border bg-surface/40 py-16">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.label} className="text-center">
              <div className="font-display text-3xl font-bold text-flare sm:text-4xl">{b.stat}</div>
              <p className="mt-2 text-sm leading-snug text-mist">{b.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
