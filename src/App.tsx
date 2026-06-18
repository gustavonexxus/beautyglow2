/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-brand-offwhite min-h-screen selection:bg-brand-beige selection:text-brand-black">
        <Navbar />
        
        <main>
          <Home />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

