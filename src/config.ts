// Configurație centrală a site-ului. Modifică aici datele firmei / domeniul.

// Domeniul canonic. De confirmat: varianta ASCII (detectieapa.ro) vs. cu diacritice.
export const SITE_URL = 'https://detectieapa.ro';

export const SITE_NAME = 'Detecție Apă';
export const COMPANY_NAME = 'Detecție Apă SRL';

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

export const COMPANY_ADDRESS_LOCALITY = 'Cluj-Napoca';
export const COMPANY_ADDRESS_COUNTRY = 'RO';

// Formular de contact — Web3Forms (gratuit, fără card). Obții cheia pe web3forms.com,
// introducând emailul firmei — primești access key-ul instant. Înlocuiește placeholder-ul de mai jos.
export const WEB3FORMS_ACCESS_KEY = 'INLOCUIESTE-CU-CHEIA-TA-WEB3FORMS';
