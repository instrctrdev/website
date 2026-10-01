const steps = [
  { number: '01', tag: 'GETTING STARTED', title: 'Choose your class', copy: 'Pick car or two-wheeler lessons and tell us what you want to learn.', icon: <><path d="M4 17h16l-1.5-6h-13z"/><circle cx="8" cy="19" r="2"/><circle cx="17" cy="19" r="2"/><path d="M7 11l2-4h6l2 4"/></> },
  { number: '02', tag: 'A GOOD FIRST MATCH', title: 'Meet your trainer', copy: 'We connect you with a verified local trainer who makes you feel at ease.', icon: <><circle cx="12" cy="8" r="4"/><path d="M4 21c.7-4 3.3-6 8-6s7.3 2 8 6"/><path d="m17 8 1.5 1.5L21 7"/></> },
  { number: '03', tag: 'PRACTICE THAT CLICKS', title: 'Learn one step at a time', copy: 'Practice the controls and road skills you need, with calm guidance beside you.', icon: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="m16 8 4-4"/></> },
  { number: '04', tag: 'READY FOR WHAT’S NEXT', title: 'Drive with confidence', copy: 'Keep building your skills until everyday journeys feel like yours.', icon: <><path d="M5 19 19 5M9 5h10v10"/><path d="M5 5v14h14"/></> },
];

export default function DrivingJourney() {
  return <section className="journey section" id="journey">
    <div className="learning-panel">
      <div className="learning-heading">
        <div>
          <span className="learning-kicker"><i /> THE INSTRCTR WAY</span>
          <h2>Confidence comes<br /><span>one lesson at a time.</span></h2>
        </div>
        <p>Good trainers make learning feel simpler. Here’s how we help you get from your first class to feeling at home on the road.</p>
      </div>
      <div className="learning-progress" aria-hidden="true"><span /><span /><span /><span /></div>
      <div className="learning-steps">
        {steps.map((step) => <article key={step.number} className="journey-card learning-step">
          <div className="learning-step-top"><span className="learning-icon"><svg viewBox="0 0 24 24" aria-hidden="true">{step.icon}</svg></span><span className="learning-number">{step.number}</span></div>
          <span className="learning-tag">{step.tag}</span>
          <h3>{step.title}</h3>
          <p>{step.copy}</p>
        </article>)}
      </div>
      <div className="learning-footer"><span>Your first class is free.</span><a href="#join">Find your trainer <b>↗</b></a></div>
    </div>
  </section>;
}
