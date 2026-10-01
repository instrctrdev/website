'use client';

import { useState } from 'react';

type LessonMode = 'car' | 'twoWheeler';

const lessonPlans: Record<LessonMode, { label: string; title: string; description: string; stages: { tag: string; title: string; copy: string }[] }> = {
  car: {
    label: 'CAR LESSON',
    title: 'Get comfortable in the driver’s seat.',
    description: 'Your trainer starts with the basics and builds from there.',
    stages: [
      { tag: 'SETTLE IN', title: 'Get to know the car', copy: 'Seats, mirrors, controls — take your time.' },
      { tag: 'START EASY', title: 'Try the basics', copy: 'Steering, starting, stopping, and shifting.' },
      { tag: 'BUILD AWARENESS', title: 'Read the road', copy: 'Learn to notice what’s happening around you.' },
      { tag: 'YOUR NEXT STEP', title: 'Choose what to practice', copy: 'Your trainer helps plan the next class with you.' },
    ],
  },
  twoWheeler: {
    label: 'TWO-WHEELER LESSON',
    title: 'Find your balance, one step at a time.',
    description: 'Start with the basics in a calm, supportive setting.',
    stages: [
      { tag: 'SETTLE IN', title: 'Get to know the vehicle', copy: 'Learn the controls and get a feel for the weight.' },
      { tag: 'START EASY', title: 'Find your balance', copy: 'Practice posture, balance, and gentle movement.' },
      { tag: 'BUILD AWARENESS', title: 'Practice control', copy: 'Work on starting, stopping, and turning smoothly.' },
      { tag: 'YOUR NEXT STEP', title: 'Choose what to practice', copy: 'Your trainer helps plan the next class with you.' },
    ],
  },
};

export default function DrivingJourney() {
  const [mode, setMode] = useState<LessonMode>('car');
  const plan = lessonPlans[mode];

  return <section className="journey section" id="journey">
    <div className="lesson-preview">
      <div className="lesson-intro">
        <span className="lesson-kicker"><i /> A FIRST CLASS THAT FEELS LIKE YOURS</span>
        <h2>Start where you are.<br /><span>We’ll take it from there.</span></h2>
        <p>No pressure to know it all on day one. Pick what you want to learn and see how your first class can unfold.</p>
        <div className="lesson-mode-switch" role="group" aria-label="Choose a lesson type">
          <button type="button" className={mode === 'car' ? 'selected' : ''} onClick={() => setMode('car')} aria-pressed={mode === 'car'}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16h16l-1.5-6h-13z"/><circle cx="8" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="m7 10 2-4h6l2 4"/></svg> Car
          </button>
          <button type="button" className={mode === 'twoWheeler' ? 'selected' : ''} onClick={() => setMode('twoWheeler')} aria-pressed={mode === 'twoWheeler'}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="m6 17 4-7h4l4 7M10 10 8 7H5M13 10l2-3h3"/></svg> Two-wheeler
          </button>
        </div>
        <div className="lesson-vehicle-art">
          <span className="vehicle-index">01</span>
          <img key={mode} className="lesson-photo" src={mode === 'car' ? '/images/car-lesson.png' : '/images/scooter-lesson.png'} alt={mode === 'car' ? 'A learner practicing in a car with an instructor' : 'A learner practicing on a scooter with an instructor'} />
          <span className="vehicle-caption">{plan.label}<b>Made for your pace <i>↗</i></b></span>
        </div>
        <span className="lesson-note"><b>✳</b> Your first class is free</span>
      </div>
      <div className="lesson-board">
        <div className="lesson-board-head"><div><span>THE FIRST CLASS</span><h3>{plan.title}</h3></div><span className="board-stamp">YOUR<br />PACE</span></div>
        <p className="lesson-board-copy">{plan.description}</p>
        <div className="lesson-sequence">
          {plan.stages.map((stage, index) => <article className="lesson-stage" key={stage.tag}>
            <div className="stage-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div><span className="stage-tag">{stage.tag}</span><h4>{stage.title}</h4><p>{stage.copy}</p></div>
          </article>)}
        </div>
        <div className="lesson-board-foot"><span>VERIFIED LOCAL TRAINERS</span><a href="#join">Meet your trainer <b>↗</b></a></div>
      </div>
    </div>
  </section>;
}
