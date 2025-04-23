import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use - Hot Girl Steps',
  description: 'Terms of Use for Hot Girl Steps app',
};

export default function TermsOfUse() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold mb-8">📜 Terms of Use</h1>
      <p className="text-sm opacity-80">Effective Date: 23.4.2025</p>
      
      <p className="mb-4">
        By downloading or using Hot Girl Steps, you agree to these Terms of Use. 
        If you do not agree, please uninstall the app.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">1. License to Use</h2>
        <p>
          We grant you a personal, non-transferable, non-exclusive license to use the app 
          solely for personal, non-commercial purposes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">2. Eligibility</h2>
        <p>
          You must be at least 13 years old to use this app. If you are under 18, 
          you must have permission from a legal guardian.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">3. Health Disclaimer</h2>
        <p>
          This app is not a medical or health advice tool. You are responsible for your own 
          health and fitness routines. Always consult a medical professional before beginning 
          any physical activity.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">4. No Liability</h2>
        <p>We are not liable for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Injury, data loss, or consequences resulting from your use of the app</li>
          <li>Malfunctions or third-party service interruptions</li>
          <li>Inaccurate step counts due to device limitations</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">5. Paid Features</h2>
        <p>
          We may offer optional in-app purchases. All sales are final and handled through 
          the App Store. We are not responsible for billing disputes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">6. Intellectual Property</h2>
        <p>
          All logos, content, visuals, and branding remain the property of Vim Digital Oy 
          and may not be used or reproduced without permission.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">7. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the app at our discretion, 
          including for violations of these terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">8. Future Modifications</h2>
        <p>
          These terms may be updated to reflect changes in functionality or legal obligations. 
          Continued use of the app constitutes your acceptance of the new terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🛠 Support</h2>
        <p>For any issues, reach out at</p>
        <p>📧 hello@vimdigital.fi</p>
      </section>
    </div>
  );
} 