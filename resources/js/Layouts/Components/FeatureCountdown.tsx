import '../../../sass/layouts/components/feature-countdown.scss'

import React, { useState, useEffect } from 'react';

import imgWorkInProgress from '../../../assets/images/work-in-progress.svg'

export default function FeatureCountdown({ targetDate }: { targetDate: string }) {

  const targetTime = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  function calculateTimeLeft(targetTime: number): { days: number, hours: number, minutes: number, seconds: number } {
    const now = new Date().getTime();
    const difference = targetTime - now;

    let [days, hours, minutes, seconds] = [0, 0, 0, 0];

    if (difference > 0) {
      days = Math.floor(difference / (1000 * 60 * 60 * 24));
      hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((difference % (1000 * 60)) / 1000);
    }

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <section className='s-feature-countdown'>
      <div className='container'>
        <div className='image-container'>
          <img src={imgWorkInProgress} alt="Work in progress..." />
        </div>
        <div className='content-wrapper'>
          <div className='content-head'>
            <h1>Kami akan segera hadir.</h1>
            <p>Our website is under construction. We'll be here soon with our new awesome site, subscribe to be notified.</p>
          </div>
          <div className='timer-wrapper'>
            <div className='timer-item'>
              <span className='timer-num'>{timeLeft.days}</span>
              <span className='timer-label'>Hari</span>
            </div>

            <div className='timer-item'>
              <span className='timer-num'>{timeLeft.hours}</span>
              <span className='timer-label'>Jam</span>
            </div>

            <div className='timer-item'>
              <span className='timer-num'>{timeLeft.minutes}</span>
              <span className='timer-label'>Menit</span>
            </div>

            <div className='timer-item'>
              <span className='timer-num'>{timeLeft.seconds}</span>
              <span className='timer-label'>Detik</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
