import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import photo from './assets/ricardo.jpg'

const CONTACT = {
  whatsapp: 'https://wa.me/55XXXXXXXXXXX',
  instagram: 'https://instagram.com/',
  email: 'contato@exemplo.com',
}

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

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="app">
      <header className="topbar">
        <div className="container">
          <div className="topbarInner">
            <a className="brand" href="#inicio" onClick={() => setMobileOpen(false)}>
              <img className="brandLogo" src={logo} alt="Logo Ricardo Personal" />
              <div className="brandText">
                <strong>Ricardo Personal</strong>
                <span>Educação Física • Personal Trainer</span>
              </div>
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
              <a className="btn btnPrimary" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
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
        <section className="hero" id="inicio">
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
                  <a className="btn btnPrimary" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
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

        <section className="section section--alt" id="servicos">
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
                  <a className="btn btnPrimary" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
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

        <section className="section section--alt" id="metodo">
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

        <section className="section" id="historia">
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

        <section className="section section--alt" id="faq">
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

        <section className="section" id="contato">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <div className="kicker">Contato</div>
                <h2 className="h2">Vamos começar?</h2>
                <p className="sub">
                  Me diga seu objetivo e sua rotina. Eu te respondo com direção, clareza e o próximo passo.
                </p>
              </div>
            </div>

            <div className="split">
              <div className="card">
                <h3 className="cardTitle">
                  Chame agora <span className="tag">Rápido</span>
                </h3>
                <p className="cardIntro">
                  WhatsApp é o jeito mais direto. Se preferir, mande mensagem no Instagram ou e-mail.
                </p>
                <div className="ctaButtons">
                  <a className="btn btnPrimary" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                  <a className="btn" href={CONTACT.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a className="btn" href={`mailto:${CONTACT.email}`}>
                    E-mail
                  </a>
                </div>
              </div>

              <div className="card">
                <h3 className="cardTitle">
                  Checklist de início <span className="tag">Objetivo</span>
                </h3>
                <p>
                  Para eu te orientar melhor, me mande: idade, objetivo (emagrecimento/hipertrofia/saúde), rotina de
                  trabalho, histórico de lesões e disponibilidade de dias/horários.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footerGrid">
            <div>
              <div className="brand footerBrand">
                <img className="brandLogo" src={logo} alt="" />
                <div className="brandText">
                  <strong>Ricardo Personal</strong>
                  <span>Treino com método e valores</span>
                </div>
              </div>
              <small>© {new Date().getFullYear()} Ricardo Personal. Todos os direitos reservados.</small>
            </div>
            <div className="links">
              <a href="#inicio">Topo</a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
