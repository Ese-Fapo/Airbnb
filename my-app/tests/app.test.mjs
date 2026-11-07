import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from '../src/App.tsx';
import { pages, pageFromHash } from '../src/data/navigation.ts';
import { places } from '../src/data/places.ts';
import { propertyAddress, propertyMapUrl } from '../src/data/property.ts';
import { hostWhatsappUrl } from '../src/data/contact.ts';
import { Modal } from '../src/components/Modal.tsx';

function environment(language = 'pt', page = 'home', storageBlocked = false) {
  const navigator = { languages: [language], language, userAgent: 'test', platform: 'test', maxTouchPoints: 0 };
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: navigator });
  globalThis.window = {
    location: { hash: `#${page}` }, navigator,
    localStorage: { getItem: () => {
      if (storageBlocked) throw new Error('Storage disabled');
      return language;
    } },
    matchMedia: () => ({ matches: false }),
  };
}

const titles = {
  en: ['Guesthouse', 'Photo gallery', 'Getting Here', 'House Guide', 'Before You Arrive', 'Check-in Instructions', 'Amenities', 'How Things Work', 'Trash &amp; Recycling', 'Emergency Info', 'House Rules', 'WiFi', 'Explore Nearby', 'Check-out'],
  pt: ['Hospedaria', 'Galeria de fotos', 'Como Chegar', 'Guia da Casa', 'Antes de Chegar', 'Instruções de Check-in', 'Comodidades', 'Como Tudo Funciona', 'Lixo e Reciclagem', 'Informações de Emergência', 'Regras da Casa', 'WiFi', 'Explore por Perto', 'Check-out'],
  es: ['Casa de Huéspedes', 'Galería de fotos', 'Cómo Llegar', 'Guía de la Casa', 'Antes de Llegar', 'Instrucciones de Check-in', 'Comodidades', 'Cómo Funciona Todo', 'Basura y Reciclaje', 'Información de Emergencia', 'Reglas de la Casa', 'WiFi', 'Explorar Cerca', 'Check-out'],
};

for (const language of ['en', 'pt', 'es']) {
  for (const [index, page] of pages.entries()) {
    test(`${language}: ${page} renders a translated heading, valid links and existing images`, () => {
      environment(language, page);
      const html = renderToStaticMarkup(createElement(App));
      const headings = [...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)];
      assert.equal(headings.length, 1, 'Each page needs one main heading');
      assert.ok(headings[0][1].includes(titles[language][index]), 'Heading follows the chosen language');
      assert.equal((html.match(/<main\b/g) ?? []).length, 1);
      assert.ok(html.includes('id="main-content"'));
      assert.doesNotMatch(html, /undefined|NaN|\ufffd|[A-Za-zÀ-ÿ]\?[A-Za-zÀ-ÿ]/);
      for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
        const src = tag.match(/src="([^"]+)"/)?.[1];
        assert.ok(src, 'Images have a source');
        assert.match(tag, /alt="[^"]+"/, 'Images have descriptive alternative text');
        if (src.startsWith('/')) assert.ok(existsSync(new URL(`../public${src}`, import.meta.url)), `Missing asset: ${src}`);
      }
      for (const [, href] of html.matchAll(/href="([^"]*)"/g)) {
        assert.match(href, /^(https:\/\/|tel:|\/|#)/, `Unexpected or empty link: ${href}`);
      }
      const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
      assert.equal(new Set(ids).size, ids.length, 'Element IDs must be unique');
    });
  }
}

test('App still opens when browser storage is blocked', () => {
  environment('en', 'home', true);
  assert.match(renderToStaticMarkup(createElement(App)), /Guesthouse/);
});

test('Unknown hashes fall back to home and known page hashes survive refresh', () => {
  for (const page of pages) assert.equal(pageFromHash(`#${page}`), page);
  for (const value of ['', '#unknown', '#%invalid', '#<script>']) assert.equal(pageFromHash(value), 'home');
});

test('Check-in shows both arrival options and an honest video placeholder', () => {
  environment('en', 'check-in');
  const html = renderToStaticMarkup(createElement(App));
  assert.match(html, /Arriving before 10 PM/);
  assert.match(html, /meet you in person and hand over the keys/);
  assert.match(html, /10 PM or later/);
  assert.match(html, /Video coming soon/);
  assert.doesNotMatch(html, /<video\b/);
});

test('Checkout includes the yellow mailbox and WiFi remains in the house guide', () => {
  environment('en', 'checkout');
  assert.match(renderToStaticMarkup(createElement(App)), /yellow mailbox at the gate/);
  environment('en', 'guide');
  assert.match(renderToStaticMarkup(createElement(App)), />WiFi</);
});

test('Nearby recommendations have translated descriptions and valid source URLs', () => {
  const names = [];
  for (const items of Object.values(places)) {
    for (const place of items) {
      names.push(place.name);
      assert.ok(place.name && place.location && place.type);
      assert.equal(new URL(place.source).protocol, 'https:');
      for (const language of ['en', 'pt', 'es']) assert.ok(place.detail[language]?.trim());
    }
  }
  assert.equal(new Set(names).size, names.length);
  for (const name of ['Tempero da JU', 'Cesar Gourmet — Ipiranga', 'Alemão Lanches e Porções', 'Mercado Tibes 24hs']) assert.ok(names.includes(name));
  assert.ok(names.some((name) => name.startsWith('Praça do CEU')));
  for (const removed of ['Moreira', 'Big Bang', 'Uara', 'Afonso Burger', 'Villa Park', 'Somel', 'Ponto de ônibus', 'Unidade Básica', 'Auto Posto']) {
    assert.ok(names.every((name) => !name.includes(removed)), `Removed place returned: ${removed}`);
  }
});

test('Tempero da JU map uses the house address and all contacts prefill a message', () => {
  const restaurant = places.food.find((place) => place.name === 'Tempero da JU');
  assert.equal(restaurant.mapUrl, propertyMapUrl);
  assert.equal(new URL(restaurant.mapUrl).searchParams.get('query'), propertyAddress);
  const contact = new URL(hostWhatsappUrl);
  assert.equal(contact.hostname, 'wa.me');
  assert.match(contact.searchParams.get('text'), /Hospedaria Real Parque/);
  environment('en', 'home');
  const links = [...renderToStaticMarkup(createElement(App)).matchAll(/href="(https:\/\/wa.me[^\"]+)"/g)];
  assert.ok(links.length >= 2);
  for (const [, href] of links) assert.equal(new URL(href.replaceAll('&amp;', '&')).searchParams.get('text'), contact.searchParams.get('text'));
});

test('Dialogs use native modal semantics and descriptive labels', () => {
  const html = renderToStaticMarkup(createElement(Modal, { label: 'Guest menu', onClose: () => {} }, createElement('button', {}, 'Close')));
  assert.match(html, /<dialog\b/);
  assert.match(html, /aria-modal="true"/);
  assert.match(html, /aria-label="Guest menu"/);
});

test('Public app icons exist and the page shell has no stray body text', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /<\/head>\s*<body>/);
  for (const name of ['favicon.png', 'apple-touch-icon.png', 'icon-192.png', 'icon.png', 'icon-maskable.png']) {
    assert.ok(existsSync(new URL(`../public/${name}`, import.meta.url)), `Missing icon: ${name}`);
  }
});
