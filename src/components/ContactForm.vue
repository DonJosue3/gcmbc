<template>
  <div class="contact-form-wrap">
    <h3 class="form-title">Envoyer une demande</h3>

    <template v-if="!sent">
      <div class="form-row">
        <div class="form-group">
          <label>Prénom &amp; Nom *</label>
          <input v-model="form.name" type="text" placeholder="Jean Dupont" />
        </div>
        <div class="form-group">
          <label>Téléphone</label>
          <input v-model="form.phone" type="tel" placeholder="+257 XX XXX XXX" />
        </div>
      </div>

      <div class="form-group">
        <label>Adresse email *</label>
        <input v-model="form.email" type="email" placeholder="vous@email.com" />
      </div>

      <div class="form-group">
        <label>Type de service</label>
        <select v-model="form.service">
          <option value="">Sélectionner un service…</option>
          <option>Architecture &amp; Design</option>
          <option>Travaux de Génie Civil</option>
          <option>Achat de Plan de Maison</option>
          <option>Matériaux de Construction</option>
          <option>Suivi de Chantier</option>
          <option>Études Techniques</option>
          <option>Autre</option>
        </select>
      </div>

      <div class="form-group">
        <label>Message *</label>
        <textarea v-model="form.message" rows="5" placeholder="Décrivez votre projet en quelques mots…"></textarea>
      </div>

      <p v-if="error" class="form-error">{{ error }}</p>

      <button class="form-submit" @click="submit" :disabled="loading">
        <span v-if="!loading">Envoyer la demande →</span>
        <span v-else>Envoi en cours…</span>
      </button>
    </template>

    <div v-else class="form-success">
      <div class="success-icon">✓</div>
      <strong>Merci, {{ firstName }} !</strong>
      <p>Votre demande a bien été reçue. Notre équipe vous contactera sous 24h.</p>
      <button class="form-reset" @click="reset">Envoyer une autre demande</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const form = ref({ name: '', phone: '', email: '', service: '', message: '' })
const sent    = ref(false)
const loading = ref(false)
const error   = ref('')

const firstName = computed(() => form.value.name.split(' ')[0] || 'vous')

function validate() {
  if (!form.value.name.trim())    return 'Veuillez saisir votre nom.'
  if (!form.value.email.trim())   return 'Veuillez saisir votre email.'
  if (!form.value.message.trim()) return 'Veuillez décrire votre projet.'
  if (!/\S+@\S+\.\S+/.test(form.value.email)) return 'Email invalide.'
  return ''
}

async function submit() {
  error.value = validate()
  if (error.value) return
  loading.value = true
  await new Promise(r => setTimeout(r, 1000)) // simulate API call
  loading.value = false
  sent.value = true
}

function reset() {
  form.value = { name: '', phone: '', email: '', service: '', message: '' }
  sent.value = false
  error.value = ''
}
</script>

<style scoped>
.contact-form-wrap {
  background: var(--off-white);
  padding: 2.8rem;
  box-shadow: var(--shadow-sm);
}
.form-title {
  font-family: var(--font-cond);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--blue);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1.8rem;
  padding-bottom: 0.9rem;
  border-bottom: 3px solid var(--yellow);
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.form-error {
  font-size: 0.83rem;
  color: #c0392b;
  margin-bottom: 0.5rem;
  padding: 0.6rem 1rem;
  background: #fdf0ef;
  border-left: 3px solid #c0392b;
}
.form-submit {
  width: 100%;
  background: var(--blue);
  color: var(--white);
  border: none;
  padding: 15px;
  font-family: var(--font-cond);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.25s, transform 0.2s;
}
.form-submit:hover:not(:disabled) { background: var(--blue-mid); transform: translateY(-2px); }
.form-submit:disabled { opacity: 0.65; cursor: not-allowed; }

/* Success */
.form-success {
  text-align: center;
  padding: 3rem 2rem;
}
.success-icon {
  width: 64px; height: 64px;
  background: var(--yellow);
  color: var(--blue);
  font-size: 1.8rem;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.2rem;
}
.form-success strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--blue);
  margin-bottom: 0.6rem;
}
.form-success p {
  font-size: 0.9rem;
  color: var(--gray-500);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
.form-reset {
  background: none;
  border: 1px solid var(--blue);
  color: var(--blue);
  padding: 10px 24px;
  font-family: var(--font-cond);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.25s, color 0.25s;
}
.form-reset:hover { background: var(--blue); color: var(--white); }

@media (max-width: 560px) {
  .form-row { grid-template-columns: 1fr; }
  .contact-form-wrap { padding: 2rem 1.5rem; }
}
</style>
