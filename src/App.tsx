/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import AgriTechHero from './components/AgriTechHero';
import HarvestSimulator from './components/HarvestSimulator';
import Traceability from './components/Traceability';
import SimpleExplanation from './components/SimpleExplanation';
import BusinessModel from './components/BusinessModel';
import LegalShield from './components/LegalShield';
import WaitlistForm from './components/WaitlistForm';

import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-snow-white">
      <AgriTechHero />
      <HarvestSimulator />
      <Traceability />
      <SimpleExplanation />
      <BusinessModel />
      <LegalShield />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
