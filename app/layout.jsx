import '../styles.css';

export const metadata = {
  title: 'GeoWeather | Weather, without the noise',
  description: 'A free, ad-free and open source Android weather app for clear forecasts across all your cities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}