import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Hot Girl Steps',
  description: 'Privacy Policy for Hot Girl Steps app',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold mb-8">🔐 Privacy Policy</h1>
      <p className="text-sm opacity-80">Effective Date: 23.4.2025</p>
      
      <p className="mb-4">
        Vim Digital Oy ("we", "our", or "us") is committed to protecting your privacy. 
        This Privacy Policy explains how we collect, use, and safeguard your data in accordance 
        with the General Data Protection Regulation (GDPR) and other applicable laws.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">1. Data We Collect</h2>
        <p>We may collect the following types of data:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Health and Fitness Data (via Apple HealthKit): Step count, walking distance</li>
          <li>Usage Data: App interactions, crash logs, feature engagement</li>
          <li>Device Information: Device model, operating system version</li>
          <li>Email (optional): For feedback, beta testing, or support</li>
        </ul>
        <p>We do not collect personally identifiable information unless you voluntarily provide it.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">2. How We Use Your Data</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide core app functionality (e.g., track your steps, visualize streaks)</li>
          <li>To improve the app and user experience (e.g., detect bugs, optimize performance)</li>
          <li>To enable future features (e.g., personalized recommendations, paid features)</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">3. In-App Purchases & Paid Features</h2>
        <p>
          If you choose to upgrade to premium features, purchases are handled through Apple and 
          no payment information is ever stored or accessed by us.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">4. Third-Party Services</h2>
        <p>
          We may use third-party tools like analytics (e.g., Apple, Firebase) in a way that 
          respects your data privacy. These providers are contractually bound to follow GDPR requirements.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">5. Your Rights (Under GDPR)</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access, correct, or delete your data</li>
          <li>Withdraw consent at any time</li>
          <li>Request a copy of your personal data</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
        <p>You can exercise these rights by contacting: 📩 hello@vimdigital.fi</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">6. Data Security & Retention</h2>
        <p>
          We take data security seriously. Data is encrypted where applicable and stored securely. 
          We retain anonymized analytics data only for as long as necessary to fulfill the stated purposes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">7. International Transfers</h2>
        <p>
          Your data is stored within the European Economic Area (EEA) where possible. 
          If transferred outside the EEA, we ensure appropriate safeguards are in place.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">8. Updates</h2>
        <p>
          We may update this policy to reflect changes in our practices. Material changes will be 
          communicated via app updates or email (if applicable).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">📬 Contact</h2>
        <p>Vim Digital Oy</p>
        <p>Y-tunnus: 3186318-3</p>
        <p>Runeberginkatu 25 A 25, 00100 Helsinki, Finland</p>
        <p>📧 hello@vimdigital.fi</p>
      </section>
    </div>
  );
} 