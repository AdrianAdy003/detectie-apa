// Configurație centrală a site-ului. Modifică aici datele firmei / domeniul.

// Domeniul canonic. De confirmat: varianta ASCII (detectieapa.ro) vs. cu diacritice.
export const SITE_URL = 'https://detectieapa.ro';

export const SITE_NAME = 'Detecție Apă';
// Firma e în curs de înființare — se folosește doar numele de brand, fără forma juridică
// (SRL) și fără CUI/Reg. Com. inventate. Actualizează aici odată ce firma e înregistrată.
export const COMPANY_NAME = 'Detecție Apă';

export const PHONE_DISPLAY = '0740 912 166';
export const PHONE_E164 = '+40740912166';
export const CONTACT_EMAIL = 'contact@detectieapa.ro';

// Numărul pentru WhatsApp, în format internațional fără "+" (cerut de wa.me).
export const WHATSAPP_NUMBER = '40740912166';
// Link exact cerut, cu mesaj predefinit.
export const WHATSAPP_URL =
  'https://wa.me/40740912166?text=Bun%C4%83,%20vreau%20o%20detec%C8%9Bie';

// Zone deservite — se pot extinde ulterior.
export const SERVICE_AREAS = ['Cluj', 'Alba', 'Mureș', 'Sibiu', 'Bistrița-Năsăud'];

// Adâncimea maximă orientativă până la care se poate detecta (fapt tehnic, nu marcă/model).
export const MAX_DEPTH_METERS = 300;

// Costul standard al unei evaluări (lei).
export const SERVICE_PRICE_LEI = 500;

export const COMPANY_ADDRESS_LOCALITY = 'Cluj-Napoca';
export const COMPANY_ADDRESS_COUNTRY = 'RO';

// Formular de contact — Web3Forms (gratuit, fără card). Obții cheia pe web3forms.com,
// introducând emailul firmei — primești access key-ul instant. Înlocuiește placeholder-ul de mai jos.
export const WEB3FORMS_ACCESS_KEY = 'ef72801e-385b-4484-b8e2-0320c67aaf13';

// Google Analytics (GA4). Se încarcă doar în build-ul de producție (nu la `npm run dev`).
export const GA_MEASUREMENT_ID = 'G-6VXZDHBC8Y';
