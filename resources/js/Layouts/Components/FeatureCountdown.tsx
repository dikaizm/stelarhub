import React, { useState, useEffect } from 'react';

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
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <section>
      <div>
        <h1>Kami akan segera hadir.</h1>
        <p>Our website is under construction. We'll be here soon with our new awesome site, subscribe to be notified.</p>
      </div>
      <div>
        <div>
          <span>{timeLeft.days}</span>
          <span>Hari</span>
        </div>

        <div>
          <span>{timeLeft.hours}</span>
          <span>Jam</span>
        </div>

        <div>
          <span>{timeLeft.minutes}</span>
          <span>Menit</span>
        </div>

        <div>
          <span>{timeLeft.seconds}</span>
          <span>Detik</span>
        </div>
      </div>
    </section>
  );
}
