/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { PostIndex } from './pages/PostIndex';
import { CategoryIndex } from './pages/CategoryIndex';
import { PostDetail } from './pages/PostDetail';
import { PillarLaser } from './pages/PillarLaser';
import { Pillar3D } from './pages/Pillar3D';
import { YouTubeChannel } from './pages/YouTubeChannel';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { Support } from './pages/SupportAndShop';
import { Shop } from './pages/Shop';

const helmetContext = {};

export default function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            {/* Posts & Categories */}
            <Route path="posts" element={<PostIndex />} />
            <Route path="categories/:categorySlug" element={<CategoryIndex />} />
            <Route path=":categorySlug/:slug" element={<PostDetail />} />
            
            {/* Pillars */}
            <Route path="/laser" element={<PillarLaser />} />   ✅ mantém assim
            <Route path="3d-printing" element={<Pillar3D />} />
            
            {/* Single Views */}
            <Route path="youtube-channel" element={<YouTubeChannel />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="support" element={<Support />} />
            <Route path="shop" element={<Shop />} />
            
            {/* Legal Pages */}
            <Route path="privacy-policy" element={<Legal type="privacy" />} />
            <Route path="cookie-policy" element={<Legal type="cookie" />} />
            <Route path="terms" element={<Legal type="terms" />} />
            <Route path="disclaimer" element={<Legal type="disclaimer" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}