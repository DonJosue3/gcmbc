<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="brand-logo">
          <div class="logo-icon"><span>GC</span><div class="logo-bar"></div></div>
          <div>
            <div class="logo-name">GCMBC GROUP</div>
            <div class="logo-tag">Architecture &amp; Génie Civil</div>
          </div>
        </div>
        <div class="brand-divider"></div>
        <p>Votre partenaire de confiance pour tous vos projets de construction au Burundi depuis plus de 15 ans.</p>
        <div class="social-links">
          <a class="social-btn" href="#" aria-label="Facebook" target="_blank">
            <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a class="social-btn" href="#" aria-label="LinkedIn" target="_blank">
            <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a class="social-btn" href="#" aria-label="WhatsApp" target="_blank">
            <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><router-link to="/services">Architecture &amp; Design</router-link></li>
          <li><router-link to="/services">Génie Civil</router-link></li>
          <li><router-link to="/plans">Plans de Maisons</router-link></li>
          <li><router-link to="/materiaux">Matériaux</router-link></li>
          <li><router-link to="/services">Suivi de Chantier</router-link></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Entreprise</h4>
        <ul>
          <li><router-link to="/a-propos">À propos</router-link></li>
          <li><router-link to="/projets">Réalisations</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><a href="#">Carrières</a></li>
          <li><a href="#">Mentions légales</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Coordonnées</h4>
        <ul class="contact-list">
          <li>
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            En demenagement..
          </li>
          <li>
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.77-.77a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +257 71 39 50 44
          </li>
          <li>
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            gcmbcgroupe@gmail.com
          </li>
          <li>
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Lun–Sam : 8h – 18h
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ year }} GCMBC Group. Tous droits réservés.</p>
      <p class="footer-credits">Conçu avec ❤️ pour le secteur BTP au Burundi</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--blue);
  padding: 5rem 5vw 0;
}
.footer-top {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 4rem;
  padding-bottom: 4rem;
}

/* Brand */
.brand-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.2rem;
}
.logo-icon {
  width: 40px; height: 40px;
  background: rgba(255,255,255,0.15);
  display: flex; align-items: center;
  justify-content: center;
  position: relative; overflow: hidden;
  flex-shrink: 0;
}
.logo-bar {
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 5px; background: var(--yellow);
}
.logo-icon span {
  font-family: var(--font-cond);
  font-weight: 700; font-size: 1rem;
  color: #fff; padding-bottom: 4px;
}
.logo-name {
  font-family: var(--font-cond);
  font-weight: 700; font-size: 1.25rem;
  letter-spacing: 0.1em; color: var(--white);
}
.logo-tag {
  font-size: 0.58rem; letter-spacing: 0.18em;
  text-transform: uppercase; color: rgba(255,255,255,0.45);
}
.brand-divider {
  width: 36px; height: 3px;
  background: var(--yellow);
  margin-bottom: 1rem;
}
.footer-brand p {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.75;
  max-width: 260px;
  margin-bottom: 1.5rem;
}
.social-links { display: flex; gap: 0.8rem; }
.social-btn {
  width: 36px; height: 36px;
  border: 1px solid rgba(255,255,255,0.18);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; text-decoration: none;
  transition: border-color 0.25s, background 0.25s;
}
.social-btn:hover {
  border-color: var(--yellow);
  background: var(--yellow);
}
.social-btn svg {
  width: 14px; height: 14px;
  stroke: rgba(255,255,255,0.6);
  fill: none; stroke-width: 2;
  transition: stroke 0.25s;
}
.social-btn:hover svg { stroke: var(--blue); }

/* Columns */
.footer-col h4 {
  font-family: var(--font-cond);
  font-size: 0.78rem; font-weight: 700;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--yellow);
  margin-bottom: 1.5rem;
}
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
.footer-col ul a {
  text-decoration: none;
  font-size: 0.86rem;
  color: rgba(255,255,255,0.55);
  transition: color 0.25s;
}
.footer-col ul a:hover { color: var(--yellow); }

/* Contact list */
.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.55);
}
.contact-list svg {
  width: 15px; height: 15px; flex-shrink: 0;
  stroke: var(--yellow); fill: none; stroke-width: 1.8;
  margin-top: 2px;
}

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer-bottom p { font-size: 0.78rem; color: rgba(255,255,255,0.35); }
.footer-credits { font-style: italic; }

@media (max-width: 1024px) {
  .footer-top { grid-template-columns: 1fr 1fr; gap: 3rem; }
}
@media (max-width: 600px) {
  .footer-top { grid-template-columns: 1fr; gap: 2.5rem; }
  .footer-bottom { flex-direction: column; text-align: center; }
}
</style>
