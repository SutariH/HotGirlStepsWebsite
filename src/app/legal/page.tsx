import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Information - Hot Girl Steps',
  description: 'Legal and company information for Hot Girl Steps',
};

export default function Legal() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold mb-8">✅ Legal & Company Information</h1>
      
      <section className="space-y-6">
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">Company Details</h2>
          <div className="space-y-3">
            <p><span className="font-semibold">Company Name:</span> Vim Digital Oy</p>
            <p><span className="font-semibold">Business ID (Y-tunnus):</span> 3186318-3</p>
            <p><span className="font-semibold">Registered Address:</span> Runeberginkatu 25 A 25, 00100 Helsinki</p>
            <p><span className="font-semibold">Contact Email:</span> hello@vimdigital.fi</p>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">Legal Documents</h2>
          <div className="space-y-3">
            <p>
              <a href="/privacy" className="text-pink-500 hover:text-pink-400 transition-colors">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="/terms" className="text-pink-500 hover:text-pink-400 transition-colors">
                Terms of Use
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 