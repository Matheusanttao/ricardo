import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/logo.png'
import photo from './assets/ricardo.jpg'

const CONTACT = {
  whatsapp: 'https://wa.me/5531982197768',
  instagram: 'https://instagram.com/personalricsrdonfves',
  email: 'ricardonevespersonal82@gmail.com',
}

const WhatsAppIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const SERVICES = [
  {
    title: 'Treino Personalizado',
    tag: 'Método',
    desc: 'Treinos ajustados ao seu nível, rotina e objetivos — com progressão inteligente e segurança.',
  },
  {
    title: 'Acompanhamento de Verdade',
    tag: 'Constância',
    desc: 'Organização, feedback e ajustes frequentes para você não ficar travado e manter o ritmo.',
  },
  {
    title: 'Saúde e Performance',
    tag: 'Equilíbrio',
    desc: 'Fortaleça corpo e mente: mais disposição, mais confiança e resultados sustentáveis.',
  },
]

const METHOD = [
  {
    title: 'Avaliação & Objetivo',
    tag: 'Clareza',
    desc: 'Entendemos seu ponto de partida, limitações e metas reais para traçar o caminho certo.',
  },
  {
    title: 'Plano com Estratégia',
    tag: 'Ciência',
    desc: 'Método e organização: estrutura de treino + ajustes pensando no seu dia a dia.',
  },
  {
    title: 'Acompanhamento Contínuo',
    tag: 'Resultado',
    desc: 'Constância vence intensidade exagerada: a evolução vem com consistência e direção.',
  },
]

const FAQ = [
  {
    q: 'Preciso ter experiência na academia?',
    a: 'Não. O treino é ajustado para iniciantes e para quem já treina — sempre com progressão e segurança.',
  },
  {
    q: 'Atende pessoas acima de 40 anos?',
    a: 'Sim. O foco é saúde, confiança e resultado sustentável respeitando histórico e limitações.',
  },
  {
    q: 'Como funciona o acompanhamento?',
    a: 'Você recebe orientação e ajustes frequentes com base no seu progresso, rotina e feedback.',
  },
]

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)
const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const PinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)
const InstagramIcon = ({ className = '' }) => (
  <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [formNome, setFormNome] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formMensagem, setFormMensagem] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const subject = `Contato do site - ${formNome.trim() || 'Sem nome'}`
    const body = `${formMensagem.trim()}\n\n---\nEmail: ${formEmail.trim()}\nNome: ${formNome.trim()}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <header className="topbar">
        <div className="container">
          <div className="topbarInner">
            <a className="brand" href="#inicio" onClick={() => setMobileOpen(false)}>
              <img className="brandLogo" src={logo} alt="Logo Ricardo Personal" />
              <span className="brandName">Ricardo</span>
            </a>

            <nav className="nav" aria-label="Navegação principal">
              <a href="#servicos">Serviços</a>
              <a href="#metodo">Método</a>
              <a href="#historia">História</a>
              <a href="#faq">Dúvidas</a>
              <a href="#contato">Contato</a>
            </nav>

            <div className="actions">
              <button className="btn menuBtn" onClick={() => setMobileOpen((v) => !v)}>
                {mobileOpen ? 'Fechar' : 'Menu'}
              </button>
              <a className="btn btnPrimary btnWhatsApp" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="btnIcon" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <div className={`mobileNav${mobileOpen ? ' open' : ''}`} aria-label="Menu mobile">
              {[
                ['Serviços', '#servicos'],
                ['Método', '#metodo'],
                ['História', '#historia'],
                ['Dúvidas', '#faq'],
                ['Contato', '#contato'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
        </div>
      </header>

      <main>
        <section className="hero scroll-reveal" id="inicio">
          <div className="container">
            <div className="heroGrid">
              <div className="heroContent">
                <div className="pillRow">
                  <span className="pill">
                    <span className="pillDot" aria-hidden="true" />
                    Fé • Disciplina • Família
                  </span>
                </div>

                <h1 className="heroTitle">
                  Transforme sua rotina em <span>resultado real</span> — com método e acompanhamento.
                </h1>
                <p className="heroLead">
                  Treinar vai além de estética. É saúde, mente forte e confiança. Eu trabalho com pessoas, com famílias e
                  com histórias — para que você viva com mais disposição e qualidade.
                </p>

                <div className="heroCtas">
                  <a className="btn btnPrimary btnWhatsApp" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                    <WhatsAppIcon className="btnIcon" />
                    Quero começar agora
                  </a>
                  <a className="btn" href="#metodo">
                    Ver como funciona
                  </a>
                </div>
              </div>

              <div className="heroVisual" aria-label="Foto do Ricardo">
                <img className="heroPhoto" src={photo} alt="Ricardo em ambiente de academia" />
                <div className="badge">
                  <strong>Ricardo Personal</strong>
                  <span>Saúde, disciplina e evolução com acompanhamento.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt scroll-reveal" id="servicos">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <div className="kicker">Serviços</div>
                <h2 className="h2">O que você recebe</h2>
                <p className="sub">
                  Um trabalho baseado em método, organização e acompanhamento — com valores sólidos e responsabilidade.
                </p>
              </div>
            </div>

            <div className="grid3">
              {SERVICES.map((s) => (
                <article key={s.title} className="card">
                  <h3 className="cardTitle">
                    {s.title} <span className="tag">{s.tag}</span>
                  </h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>

            <div className="ctaBand">
              <div className="ctaBandInner">
                <div>
                  <h3>Pronto pra dar o primeiro passo com direção?</h3>
                  <p>
                    Me chama e me conte seu objetivo. Eu te ajudo a construir um plano possível, eficiente e sustentável.
                  </p>
                </div>
                <div className="ctaButtons">
                  <a className="btn btnPrimary btnWhatsApp" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                    <WhatsAppIcon className="btnIcon" />
                    Falar no WhatsApp
                  </a>
                  <a className="btn" href="#historia">
                    Conhecer minha história
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt scroll-reveal" id="metodo">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <div className="kicker">Método</div>
                <h2 className="h2">Como funciona na prática</h2>
                <p className="sub">
                  Constância vence intensidade exagerada. O foco é criar um processo que você consiga manter — e evoluir.
                </p>
              </div>
            </div>

            <div className="grid3">
              {METHOD.map((m) => (
                <article key={m.title} className="card">
                  <h3 className="cardTitle">
                    {m.title} <span className="tag">{m.tag}</span>
                  </h3>
                  <p>{m.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section scroll-reveal" id="historia">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <div className="kicker">História</div>
                <h2 className="h2">Fé, disciplina e família</h2>
                <p className="sub">
                  Minha missão é contribuir para que você tenha mais saúde, mais disposição para sua família e mais
                  confiança para viver melhor.
                </p>
              </div>
            </div>

            <div className="split">
              <div className="story">
                <p>
                  Minha história na Educação Física é construída sobre três pilares: fé, disciplina e família. Antes mesmo
                  da faculdade, eu já entendia que a base de tudo começa dentro de casa. Foi na minha família que aprendi
                  valores como responsabilidade, trabalho duro, respeito e perseverança.
                </p>
                <p>
                  Sempre enxerguei o exercício físico como algo maior do que estética. Para mim, treinar é cuidar da
                  saúde, fortalecer a mente e construir confiança. É aprender a não desistir quando fica difícil.
                </p>
                <p>
                  Quando decidi cursar Educação Física (Bacharelado), não foi apenas por gostar de academia. Foi uma
                  escolha consciente de transformar aquilo que eu acreditava em profissão — com ciência, estratégia e
                  responsabilidade.
                </p>
              </div>

              <div className="story">
                <p>
                  Na prática, convivendo com pessoas comuns — pais, mães, trabalhadores, pessoas acima dos 40 anos e
                  iniciantes inseguros — percebi que muitos carregam histórias, frustrações e medos. E foi aí que
                  compreendi que meu papel vai além de montar treinos.
                </p>
                <p className="quote">
                  Eu trabalho com pessoas. Com famílias. Com histórias. Muitas vezes, quando um aluno decide mudar seus
                  hábitos, ele não transforma só o próprio corpo — ele influencia sua casa inteira.
                </p>
                <p>
                  Foi dessa visão que nasceu o Ricardo Personal: um trabalho baseado em método, organização e
                  acompanhamento. A Educação Física é minha profissão. A família é minha base. E transformar vidas é meu
                  propósito.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt scroll-reveal" id="faq">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <div className="kicker">Dúvidas</div>
                <h2 className="h2">Perguntas frequentes</h2>
                <p className="sub">Se ainda ficou alguma dúvida, é só chamar no WhatsApp.</p>
              </div>
            </div>

            <div className="grid3">
              {FAQ.map((f) => (
                <article key={f.q} className="card">
                  <h3 className="cardTitle">
                    {f.q} <span className="tag">FAQ</span>
                  </h3>
                  <p>{f.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contactSection scroll-reveal" id="contato">
          <div className="container">
            <div className="contactHeader">
              <h2 className="contactTitle">
                Vamos <span className="contactTitleHighlight">começar juntos?</span>
              </h2>
              <p className="contactSub">
                Preencha o formulário ou chame direto. Vou te responder com direção e o próximo passo.
              </p>
            </div>

            <div className="contactWrap">
              <div className="contactInfo">
                <div className="contactCard">
                  <span className="contactCardIcon contactCardIconEmail">
                    <MailIcon />
                  </span>
                  <div>
                    <span className="contactCardLabel">E-mail</span>
                    <a href={`mailto:${CONTACT.email}`} className="contactCardValue">{CONTACT.email}</a>
                  </div>
                </div>
                <div className="contactCard">
                  <span className="contactCardIcon contactCardIconPhone">
                    <PhoneIcon />
                  </span>
                  <div>
                    <span className="contactCardLabel">Telefone / WhatsApp</span>
                    <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="contactCardValue">(31) 98219-7768</a>
                  </div>
                </div>
                <div className="contactCard">
                  <span className="contactCardIcon contactCardIconPin">
                    <PinIcon />
                  </span>
                  <div>
                    <span className="contactCardLabel">Atendimento</span>
                    <span className="contactCardValue">Presencial e online</span>
                  </div>
                </div>
                <div className="contactSocial">
                  <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="contactSocialBtn contactSocialWhatsApp" aria-label="WhatsApp">
                    <WhatsAppIcon />
                  </a>
                  <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="contactSocialBtn contactSocialInsta" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="contactSocialBtn contactSocialMail" aria-label="E-mail">
                    <MailIcon />
                  </a>
                </div>
              </div>

              <div className="contactFormWrap">
                <form className="contactForm" onSubmit={handleFormSubmit}>
                  <label className="contactLabel">
                    Nome <span className="contactRequired">*</span>
                    <input
                      type="text"
                      className="contactInput"
                      placeholder="Seu nome"
                      value={formNome}
                      onChange={(e) => setFormNome(e.target.value)}
                    />
                  </label>
                  <label className="contactLabel">
                    E-mail <span className="contactRequired">*</span>
                    <input
                      type="email"
                      className="contactInput"
                      placeholder="seu@email.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                    />
                  </label>
                  <label className="contactLabel">
                    Mensagem <span className="contactRequired">*</span>
                    <textarea
                      className="contactInput contactTextarea"
                      placeholder="Conte seu objetivo, rotina e como posso te ajudar..."
                      rows={4}
                      value={formMensagem}
                      onChange={(e) => setFormMensagem(e.target.value)}
                    />
                  </label>
                  <button type="submit" className="contactSubmit">
                    Enviar mensagem
                    <SendIcon />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footerCols">
            <div className="footerBlock">
              <div className="brand footerBrand">
                <img className="brandLogo" src={logo} alt="" />
                <div className="brandText">
                  <strong>Ricardo Personal</strong>
                  <span>Educação Física • Personal Trainer</span>
                </div>
              </div>
              <p className="footerAbout">
                Treinos com método, disciplina e acompanhamento. Saúde, disposição e resultados sustentáveis para você e sua família.
              </p>
            </div>

            <div className="footerBlock">
              <h4 className="footerTitle">Atalhos</h4>
              <nav className="footerNav">
                <a href="#inicio">Início</a>
                <a href="#servicos">Serviços</a>
                <a href="#metodo">Método</a>
                <a href="#historia">História</a>
                <a href="#contato">Contato</a>
              </nav>
            </div>

            <div className="footerBlock">
              <h4 className="footerTitle">Fale comigo</h4>
              <div className="footerContact">
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="footerContactItem">
                  <WhatsAppIcon />
                  <span>(31) 98219-7768</span>
                </a>
                <a href={`mailto:${CONTACT.email}`} className="footerContactItem">
                  <MailIcon />
                  <span>{CONTACT.email}</span>
                </a>
                <span className="footerContactItem">
                  <PinIcon />
                  <span>Presencial e online</span>
                </span>
              </div>
              <div className="footerSocial">
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="footerSocialBtn" aria-label="WhatsApp">
                  <WhatsAppIcon />
                </a>
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="footerSocialBtn" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="footerBottom">
            <p className="footerCopy">
              © {new Date().getFullYear()} Ricardo Personal. Desenvolvido por <a href="https://matheusantao.com.br" target="_blank" rel="noreferrer">Matheus Antão</a>.
            </p>
          </div>
        </div>
      </footer>

      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="whatsappFloat"
        aria-label="Abrir WhatsApp"
      >
        <WhatsAppIcon className="whatsappFloatIcon" />
      </a>
    </div>
  )
}

export default App
