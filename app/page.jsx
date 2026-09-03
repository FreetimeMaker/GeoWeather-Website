'use client';

import { useEffect } from 'react';

const repository = 'https://github.com/FreetimeMaker/GeoWeather';
const fDroid = 'https://f-droid.org/packages/com.freetime.geoweather/';
const icons = {
  geoWeather: 'https://raw.githubusercontent.com/FreetimeMaker/GeoWeather/master/fastlane/metadata/android/en-US/images/icon.png',
  github: 'https://cdn.simpleicons.org/github/16201c',
  fDroid: 'https://cdn.simpleicons.org/fdroid/1976d2',
  obtainium: 'https://raw.githubusercontent.com/ImranR98/Obtainium/main/assets/graphics/icon_small.png',
};

function Brand() {
  return <span className="brand"><img className="brand-icon" src={icons.geoWeather} alt="" /><span>GeoWeather</span></span>;
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <nav className="nav" aria-label="Main navigation">
        <a href="#top" aria-label="GeoWeather home"><Brand /></a>
        <div className="nav-links"><a href="#features">Features</a><a href="#preview">Preview</a><a href="#open-source">Open source</a></div>
        <a className="nav-cta" href={fDroid} target="_blank" rel="noreferrer">Get the app <span>↗</span></a>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="hero-copy reveal"><p className="eyebrow"><span className="pulse" /> Open source weather for Android</p><h1>Weather,<br /><em>without the noise.</em></h1><p className="hero-intro">A calm, capable forecast for every place you call home. GeoWeather brings the detail you need and leaves the clutter behind.</p><div className="hero-actions"><a className="button button-dark" href={fDroid} target="_blank" rel="noreferrer"><img className="button-icon" src={icons.fDroid} alt="" />Download on F-Droid <span>↗</span></a><a className="text-link" href={repository} target="_blank" rel="noreferrer">Explore the source <span>→</span></a></div><div className="trust-row"><span>100% free</span><i /><span>No ads</span><i /><span>No tracking</span></div></div>
          <div className="hero-visual reveal reveal-delay"><div className="sun-disc" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="weather-card main-weather"><div className="card-top"><span>Zurich, CH</span><span className="menu-dot">•••</span></div><div className="current-temp">18°</div><div className="weather-state">Partly cloudy <span>◒</span></div><div className="high-low"><span>H 21°</span><span>L 12°</span></div><div className="chart"><span className="chart-line" /><span className="chart-dot dot-a" /><span className="chart-dot dot-b" /><span className="chart-dot dot-c" /><span className="chart-dot dot-d" /></div><div className="chart-labels"><span>Now</span><span>12 PM</span><span>4 PM</span><span>8 PM</span></div></div><div className="weather-card mini-weather"><span className="mini-label">NEXT 7 DAYS</span><strong>16 days</strong><span className="mini-spark">↗</span></div><div className="weather-card location-chip"><span className="location-pin">⌖</span><span>3 cities tracked</span></div></div>
        </section>

        <section className="ticker" aria-label="GeoWeather highlights"><div>BUILT FOR ANDROID</div><div>JETPACK COMPOSE</div><div>POWERED BY OPEN DATA</div><div>MADE BY FREETIME MAKER</div></section>

        <section className="section features-section" id="features"><div className="section-heading reveal"><p className="eyebrow">01 / The essentials</p><h2>Everything you need<br /><em>to read the sky.</em></h2><p>Useful detail, presented with a little more breathing room. Designed for quick checks and thoughtful planning alike.</p></div><div className="feature-grid"><Feature className="feature-large" icon="☼" kicker="FORECASTING" title="Look further ahead." number="01">See a detailed 16-day outlook and precise hourly conditions, so your plans are never based on a guess.</Feature><Feature className="feature-blue" icon="⌖" kicker="YOUR PLACES" title="Every city in one view." number="02">Add and manage as many locations as you need.</Feature><Feature className="feature-yellow" icon="◌" kicker="YOUR SETTINGS" title="Make it yours." number="03">Switch units, choose your language and let Material You bring your wallpaper&apos;s colors into the experience.</Feature><Feature className="feature-dark" icon="♧" kicker="STAY INFORMED" title="Quietly on top of it." number="04">Weather notifications and an in-app changelog keep you informed without demanding attention.</Feature></div></section>

        <section className="preview-section section" id="preview"><div className="preview-copy reveal"><p className="eyebrow">02 / In the app</p><h2>Clarity at<br /><em>a glance.</em></h2><p>Inspired by MeteoSwiss, GeoWeather makes complex weather data feel approachable. Bright, legible and intentionally quiet.</p><a className="text-link" href={`${repository}/tree/master/fastlane/metadata/android/en-US/images/phoneScreenshots`} target="_blank" rel="noreferrer">See all screenshots <span>→</span></a></div><div className="screenshots reveal reveal-delay"><Screen src="1.png" alt="GeoWeather forecast screen" /><Screen src="2.png" alt="GeoWeather city screen" offset /><Screen src="3.png" alt="GeoWeather hourly forecast screen" /></div></section>

        <section className="open-source section" id="open-source"><div className="source-panel reveal"><div><p className="eyebrow">03 / Open by design</p><h2>Good weather<br /><em>belongs to everyone.</em></h2><p>GeoWeather is free, open source and built in public. Read the code, report an issue, suggest an idea or help shape what comes next.</p><div className="source-actions"><a className="button button-light" href={repository} target="_blank" rel="noreferrer"><img className="button-icon" src={icons.github} alt="" />View on GitHub <span>↗</span></a><a className="button button-outline" href={`${repository}/issues`} target="_blank" rel="noreferrer">Report an issue</a></div></div><div className="source-stats"><Stat value="Apache-2.0" label="License" /><Stat value="Kotlin" label="100% native" /><Stat value="v2.3.0" label="Latest release" /><Stat value="15+" label="Contributors" /></div></div></section>

        <section className="download section"><div className="download-heading"><p className="eyebrow">04 / Take it with you</p><h2>A better forecast<br /><em>is one tap away.</em></h2></div><div className="download-links"><Download href={`${repository}/releases/latest`} icon={icons.github} alt="GitHub" title="GitHub Releases" detail="Direct APK downloads" /><Download href={fDroid} icon={icons.fDroid} alt="F-Droid" title="F-Droid" detail="Free and open source" /><Download href="https://apps.obtainium.imranr.dev/" icon={icons.obtainium} alt="Obtainium" title="Obtainium" detail="Automatic updates" /></div></section>
      </main>
      <footer className="footer"><a href="#top"><Brand /></a><span>Weather, without the noise.</span><span>© FreetimeMaker · Apache-2.0</span><a href="mailto:FreetimeMaker@proton.me">Get in touch ↗</a></footer>
    </div>
  );
}

function Feature({ className, icon, kicker, title, number, children }) { return <article className={`feature-card ${className} reveal`}><div className="feature-icon">{icon}</div><div><p className="card-kicker">{kicker}</p><h3>{title}</h3><p>{children}</p></div><span className="card-number">{number}</span></article>; }
function Screen({ src, alt, offset }) { return <figure className={offset ? 'screen-offset' : ''}><img src={`https://raw.githubusercontent.com/FreetimeMaker/GeoWeather/master/fastlane/metadata/android/en-US/images/phoneScreenshots/${src}`} alt={alt} /></figure>; }
function Stat({ value, label }) { return <div><strong>{value}</strong><span>{label}</span></div>; }
function Download({ href, icon, alt, title, detail }) { return <a href={href} target="_blank" rel="noreferrer"><span className="download-icon"><img src={icon} alt={alt} /></span><span><strong>{title}</strong><small>{detail}</small></span><b>↗</b></a>; }