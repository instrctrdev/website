'use client';

import { useEffect, useRef } from 'react';

const steps = [
  { number: '01', title: 'Choose your path', copy: 'Pick car or two-wheeler lessons and the skills you want to build.', side: 'left', position: '14%', x: '72%' },
  { number: '02', title: 'Meet your instructor', copy: 'Connect with a supportive local instructor who understands your pace.', side: 'right', position: '38%', x: '21%' },
  { number: '03', title: 'Practice with purpose', copy: 'Build vehicle control, road awareness, and confidence one lesson at a time.', side: 'left', position: '63%', x: '79%' },
  { number: '04', title: 'Find your freedom', copy: 'Take your skills onto local roads and keep growing with every journey.', side: 'right', position: '87%', x: '29%' },
];

export default function DrivingJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const carRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    const car = carRef.current;
    if (!section || !path || !car) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = section.getBoundingClientRect();
        const available = Math.max(1, bounds.height - window.innerHeight * 0.58);
        const progress = reduceMotion ? 0 : Math.max(0, Math.min(1, (window.innerHeight * 0.3 - bounds.top) / available));
        const length = path.getTotalLength();
        const point = path.getPointAtLength(length * progress);
        const ahead = path.getPointAtLength(Math.min(length, length * progress + 1));
        const angle = Math.atan2(ahead.y - point.y, ahead.x - point.x) * 180 / Math.PI;
        car.setAttribute('transform', `translate(${point.x} ${point.y}) rotate(${angle})`);
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <section className="journey section" id="journey" ref={sectionRef}>
    <div className="road-journey-panel">
      <div className="road-journey-heading">
        <span className="road-journey-kicker"><i /> YOUR LEARNING JOURNEY</span>
        <h2>Every confident driver<br /><span>starts somewhere.</span></h2>
        <p>Follow your own route, with the right person beside you at every turn.</p>
      </div>
      <div className="road-route" aria-label="Four steps in your driving journey">
        <svg className="road-route-art" viewBox="0 0 1000 1300" role="img" aria-label="A winding road connecting four learning milestones" preserveAspectRatio="none">
          <path className="road-edge" d="M500 30 C500 150 790 125 790 275 C790 430 210 400 210 565 C210 730 790 690 790 855 C790 1020 290 990 290 1160 C290 1220 430 1250 500 1280" />
          <path className="road-surface" d="M500 30 C500 150 790 125 790 275 C790 430 210 400 210 565 C210 730 790 690 790 855 C790 1020 290 990 290 1160 C290 1220 430 1250 500 1280" />
          <path className="road-centerline" d="M500 30 C500 150 790 125 790 275 C790 430 210 400 210 565 C210 730 790 690 790 855 C790 1020 290 990 290 1160 C290 1220 430 1250 500 1280" />
          <g className="road-car-marker" ref={carRef} transform="translate(500 30)">
            <ellipse cx="0" cy="3" rx="40" ry="24" fill="#07142f" opacity=".24" />
            <rect x="-38" y="-22" width="76" height="44" rx="17" fill="#0b7b80" stroke="#06102b" strokeWidth="5" />
            <path d="M-19-16 Q-14-27 0-27 Q14-27 19-16 L16 13 Q0 21-16 13Z" fill="#fff8dc" stroke="#07142f" strokeWidth="3" />
            <path d="M-14-13H14L11-4H-11Z M-12 4H12L14 12Q0 17-14 12Z" fill="#18243a" />
            <rect x="-43" y="-15" width="8" height="13" rx="3" fill="#07142f" /><rect x="35" y="-15" width="8" height="13" rx="3" fill="#07142f" />
            <rect x="-43" y="5" width="8" height="13" rx="3" fill="#07142f" /><rect x="35" y="5" width="8" height="13" rx="3" fill="#07142f" />
          </g>
        </svg>
        <div className="road-route-label route-label-left" style={{ top: '14%' }}><span>01 / THE FIRST TURN</span><b>Choose your path</b></div>
        <div className="road-route-label route-label-right" style={{ top: '38%' }}><span>02 / THE RIGHT GUIDE</span><b>Meet your instructor</b></div>
        <div className="road-route-label route-label-left" style={{ top: '63%' }}><span>03 / BUILD YOUR SKILLS</span><b>Practice with purpose</b></div>
        <div className="road-route-label route-label-right" style={{ top: '87%' }}><span>04 / YOUR NEXT CHAPTER</span><b>Find your freedom</b></div>
        {steps.map((step) => <div key={step.number} className={`road-stop stop-${step.side}`} style={{ top: step.position, left: step.x }}><span>{step.number}</span></div>)}
      </div>
      <div className="road-journey-footer"><span>YOUR PACE. YOUR PLACE. YOUR ROAD.</span><a href="#services">Explore the programs <b>↗</b></a></div>
    </div>
  </section>;
}
