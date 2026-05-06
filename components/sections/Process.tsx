import { STEPS } from '@/lib/content';

export function Process() {
  return (
    <section className="section" id="ablauf">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">So einfach läuft es ab</span>
          <h2 className="h1">In drei Schritten zum sauberen Ergebnis.</h2>
        </div>
        <ol className="steps">
          {STEPS.map((s) => (
            <li key={s.n} className="step">
              <div className="step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
