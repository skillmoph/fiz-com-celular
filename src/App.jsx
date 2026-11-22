import React, {useEffect} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Collapsible, CollapsibleGroup} from '@astryxdesign/core/Collapsible';

const CHECKOUT = 'https://pay.hotmart.com/U63087062A?checkoutMode=10';

function BuyButton({children, className = ''}) {
  return (
    <Button
      label={typeof children === 'string' ? children : 'Quero entrar'}
      variant="primary"
      size="lg"
      href={CHECKOUT}
      data-cta=""
      className={`btn ${className}`}
    >
      <span className="rec" aria-hidden="true"></span>
      {children}
    </Button>
  );
}

const MODULES = [
  {img: 'img/mod1.jpg', alt: 'Módulo 01 - Bem-vindo ao mercado'},
  {img: 'img/mod2.jpg', alt: 'Módulo 02 - Rig profissional'},
  {img: 'img/mod3.jpg', alt: 'Módulo 03 - Posicionamento profissional'},
  {img: 'img/mod4.jpg', alt: 'Módulo 04 - Gestão e estratégia'},
  {img: 'img/mod5.jpg', alt: 'Módulo 05 - Inteligências artificiais'},
];

const LESSON_GROUPS = [
  {
    title: 'Gravação e organização',
    count: '7 aulas',
    open: true,
    lessons: [
      'Aula 0 - Bem-vindos',
      'Aula 1 - Conhecendo o aplicativo de edição',
      'Aula 2 - Gravando com o método 5 takes',
      'Aula 3 - Aula prática de gravação',
      'Aula 4 - Gestão de arquivos',
      'Aula 5 - Edição',
      'Tutorial de edição - Treino de box Whindersson Nunes África',
    ],
  },
  {
    title: 'Cor, ritmo e som',
    count: '7 aulas',
    lessons: [
      'Aula 6 - Coloração',
      'Aula 7 - Speed ramp',
      'Aula 8 - Efeitos de transição',
      'Aula 9 - Efeitos sonoros',
      'Aula 10 - Iluminação de 3 pontos',
      'Aula 11 - Legenda automática',
      'Tutorial rápido de instalação dos filtros de cor',
    ],
  },
  {
    title: 'Recursos de cinema',
    count: '5 aulas',
    lessons: [
      'Aula 12 - Gravando uma locução',
      'Aula 13 - Timelapse',
      'Aula 14 - Hyperlapse',
      'Aula 15 - Movimentos de câmera cinemáticos',
      'Lapela sem fio para celular',
    ],
  },
  {
    title: 'Efeitos avançados',
    count: '5 aulas',
    lessons: [
      'Aula 16 - Teleprompter',
      'Aula 17 - Baixando músicas gratuitas',
      'Aula 18 - Criando clones com máscaras',
      'Aula 19 - Transição de portal com máscaras',
      'Aula 20 - Removendo fundo e chroma key',
    ],
  },
];

const FIT_YES = [
  'Quer gravar vídeos que parecem cinema usando só o celular',
  'Já grava, mas deixa o material parado na galeria sem saber editar',
  'Quer um passo a passo do zero, sem equipamento caro',
  'É empreendedor, criador de conteúdo, artista ou profissional autônomo e quer produzir vídeos do próprio negócio',
  'Quer levar a gravação para o lado profissional, com rig, posicionamento e gestão',
];

const FIT_NO = [
  'Não é para quem espera resultado sem gravar nem praticar',
  'Não é uma lista de truques soltos: é um método, passo a passo',
];

const CHIPS = [
  'Gestão de arquivos', 'Speed ramp', 'Efeitos de transição', 'Efeitos sonoros',
  'Legenda automática', 'Filtros de cor', 'Iluminação de 3 pontos', 'Locução',
  'Timelapse', 'Hyperlapse', 'Movimentos de câmera', 'Gimbal e estabilizadores',
  'Lapela sem fio',
];

const OFFER = [
  ['12 módulos + 1 módulo gratuito', 'De bem-vindo ao mercado até inteligências artificiais, passando por rig, posicionamento e gestão.'],
  ['Mais de 20 aulas práticas', 'De gravar com o método dos 5 takes a edições como speed ramp, máscaras e chroma key.'],
  ['O método dos 5 takes', 'Um jeito simples de gravar para a edição já sair fácil.'],
  ['Edição no celular, passo a passo', 'Speed ramp, transições, efeitos sonoros, legenda automática, filtros de cor, locução, timelapse e hyperlapse.'],
  ['Tutoriais de aplicativos', 'Passo a passo direto no celular.'],
  ['Acesso online na área de membros da Hotmart', 'Estude no seu ritmo, quando e onde quiser.'],
];

const FAQ = [
  ['Preciso ter experiência com vídeo?', 'Não. O treinamento parte do zero e mostra o passo a passo da gravação e da edição.'],
  ['Preciso de equipamento caro?', 'Não. O foco é extrair o máximo do celular que você já tem. Também há aulas opcionais sobre acessórios, como gimbal e lapela.'],
  ['E se eu não gostar?', 'A Hotmart garante no mínimo 7 dias para pedir reembolso depois da compra.'],
  ['Posso estudar pelo celular?', 'O treinamento é todo online, na área de membros da Hotmart, e você acessa de onde preferir.'],
  ['Como acesso as aulas?', 'Online, pela área de membros da Hotmart, quando e onde você quiser.'],
];

export default function App() {
  useEffect(() => {
    let s = 0;
    const tc = document.getElementById('tc');
    const tk = document.getElementById('take');
    const timer = setInterval(() => {
      s++;
      const m = String(Math.floor(s / 60)).padStart(2, '0');
      const x = String(s % 60).padStart(2, '0');
      if (tc) tc.textContent = '00:' + m + ':' + x;
      if (tk) tk.textContent = 'TAKE ' + (Math.floor(s / 4) % 5 + 1) + '/5';
    }, 1000);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          i.target.classList.add('in');
          io.unobserve(i.target);
        }
      });
    }, {threshold: 0.12});
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    const hero = document.querySelector('.hero');
    const stick = document.getElementById('stick');
    const fin = document.getElementById('entrar');
    let a = true, b = false;
    const u = () => stick && stick.classList.toggle('on', !a && !b);
    let io2, io3;
    if ('IntersectionObserver' in window && hero && fin) {
      io2 = new IntersectionObserver((e) => { a = e[0].isIntersecting; u(); });
      io2.observe(hero);
      io3 = new IntersectionObserver((e) => { b = e[0].isIntersecting; u(); });
      io3.observe(fin);
    }
    return () => {
      clearInterval(timer);
      io.disconnect();
      io2 && io2.disconnect();
      io3 && io3.disconnect();
    };
  }, []);

  return (
    <>
      <header className="hero">
        <img src="img/andre_hero.jpg" alt="André Loureiro, criador do Fiz com Celular, filmando com o celular" fetchpriority="high" />
        <div className="vf" aria-hidden="true">
          <span className="tl"></span><span className="tr"></span><span className="bl"></span><span className="br"></span>
          <span className="hud"><i className="d"></i>REC <em id="tc" style={{fontStyle: 'normal'}}>00:00:00</em></span>
          <span className="take" id="take">TAKE 1/5</span>
        </div>
        <div className="nav">
          <div className="wrap">
            <a className="brand" href="#"><img src="img/logo.png" alt="Fiz com Celular" /></a>
            <Button label="Quero entrar" variant="ghost" href={CHECKOUT} data-cta="" className="nav-cta">Quero entrar</Button>
          </div>
        </div>
        <div className="wrap in">
          <div>
            <h1>Vídeo com cara de cinema, gravado no seu celular.</h1>
            <p className="lead">Aprenda o método dos 5 takes e edite nos principais apps. Do zero, sem equipamento caro.</p>
            <BuyButton>Quero aprender agora</BuyButton>
          </div>
        </div>
      </header>

      <main>
        <section className="vsl" id="video">
          <div className="wrap reveal">
            <div className="kicker">Conheça o curso</div>
            <h2>Veja o treinamento em 3 minutos</h2>
            <div className="vbox">
              <iframe src="https://www.youtube-nocookie.com/embed/j0upMpeURMw?rel=0" title="Vídeo de apresentação do curso Fiz com Celular, com André Loureiro" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" style={{display: 'block', width: '100%', aspectRatio: '16/9', border: 0}}></iframe>
            </div>
            <p className="vcap">Vídeo de apresentação do curso Fiz com Celular, com André Loureiro.</p>
          </div>
        </section>

        <section className="mods" id="modulos">
          <div className="wrap">
            <div className="reveal">
              <div className="kicker">Conteúdo</div>
              <h2>O conteúdo do Fiz com Celular</h2>
              <p className="sub">São 12 módulos + 1 gratuito, da captação ao mercado: você aprende a gravar, montar o equipamento, se posicionar, gerir a carreira e usar inteligência artificial, com aulas práticas de gravação e edição no celular.</p>
            </div>
            <div className="mcards reveal">
              {MODULES.map((m) => (
                <figure key={m.img}><img loading="lazy" src={m.img} alt={m.alt} /></figure>
              ))}
            </div>
            <h3 className="subh reveal">Aulas práticas do curso</h3>
            <p className="sub reveal" style={{marginTop: '10px'}}>Passo a passo de gravação e edição, direto no celular.</p>
            <div className="accs reveal">
              <CollapsibleGroup type="multiple" defaultValue={['Gravação e organização']}>
                {LESSON_GROUPS.map((g) => (
                  <Collapsible
                    key={g.title}
                    value={g.title}
                    className="acc"
                    trigger={
                      <>
                        <span className="n">•</span>
                        <strong>{g.title}</strong>
                        <small>{g.count}</small>
                      </>
                    }
                  >
                    <ul>
                      {g.lessons.map((l) => <li key={l}>{l}</li>)}
                    </ul>
                  </Collapsible>
                ))}
              </CollapsibleGroup>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap intro reveal">
            <div>
              <h2>Seu celular já grava bem. Falta o método.</h2>
            </div>
            <div>
              <p>Hoje o celular tem tudo para fazer vídeos incríveis, mas a maioria das pessoas grava, não sabe o que fazer com o material e deixa o arquivo parado na galeria.</p>
              <p>O Fiz com Celular mostra o caminho completo: como filmar com o método dos 5 takes, como organizar os arquivos e como editar até o vídeo ficar pronto para postar.</p>
              <div className="stats">
                <div><b>5</b><span>takes por cena</span></div>
                <div><b>12</b><span>módulos + 1 gratuito</span></div>
                <div><b>100%</b><span>no celular</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="fitsec" id="para-quem">
          <div className="wrap">
            <div className="reveal">
              <div className="kicker">Para quem é</div>
              <h2>Esse treinamento é para você se...</h2>
            </div>
            <div className="fit reveal">
              <ul className="yes">{FIT_YES.map((t) => <li key={t}>{t}</li>)}</ul>
              <ul className="no">{FIT_NO.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="who">
          <div className="wrap">
            <div className="reveal">
              <h2>Aprenda com quem filma de verdade</h2>
              <p className="sub">André Loureiro é filmmaker, diretor de fotografia e empresário. No curso, ele ensina o método que usa para gravar e editar com o celular.</p>
            </div>
            <div className="cards">
              <article className="card reveal">
                <img loading="lazy" src="img/andre_close.jpg" alt="André Loureiro filmando com o celular nas duas mãos" />
                <div><h3>Do enquadramento ao corte</h3><p>Gravação, iluminação, som e edição, tudo com o aparelho que você já tem.</p></div>
              </article>
              <article className="card reveal">
                <img loading="lazy" src="img/tablet.jpg" style={{objectPosition: '50% 45%'}} alt="Aulas do Fiz com Celular em um tablet" />
                <div><h3>Aulas no seu ritmo</h3><p>Acesso online, para estudar quando e onde quiser.</p></div>
              </article>
              <article className="card reveal">
                <img loading="lazy" src="img/box.jpg" style={{objectPosition: '50% 50%'}} alt="Caixa do curso Fiz com Celular" />
                <div><h3>O método completo</h3><p>Os 5 takes e os principais aplicativos de edição.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="prof">
          <div className="wrap reveal">
            <div className="kicker">Quem ensina</div>
            <h2>André Loureiro</h2>
            <p className="sub">Diretor audiovisual e filmmaker há mais de 13 anos, já trabalhou com grandes produtores de conteúdo da internet, como Whindersson Nunes, Mr Poladoful, O Que Não Dizer e Gabi Luthai. Hoje ensina qualquer pessoa, mesmo sem experiência, a criar vídeos cinematográficos usando apenas o celular.</p>
          </div>
        </section>

        <section>
          <div className="wrap edit">
            <img className="reveal" loading="lazy" src="img/tablet.jpg" alt="Tela do curso Fiz com Celular em um tablet com André Loureiro" />
            <div className="reveal">
              <h2>Da gravação ao vídeo pronto, tudo no celular</h2>
              <p className="sub">Aulas práticas, com exemplos reais, nos principais aplicativos de edição.</p>
              <ul className="chips">{CHIPS.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="offer" id="oferta">
          <div className="wrap offg">
            <div className="reveal">
              <div className="kicker">O que você recebe</div>
              <h2>Tudo que está dentro do Fiz com Celular</h2>
              <ul className="stack">
                {OFFER.map(([b, s]) => <li key={b}><b>{b}</b><span>{s}</span></li>)}
              </ul>
              <p className="price">Tudo por apenas <b>R$ 197</b><small>acesso a todo o conteúdo do curso</small></p>
              <div className="cta-row"><BuyButton>Quero entrar na formação</BuyButton></div>
            </div>
            <img className="reveal" loading="lazy" src="img/box.jpg" alt="Caixa do curso Fiz com Celular" />
          </div>
        </section>

        <section className="guar">
          <div className="wrap reveal">
            <div className="seal"><img className="gseal" src="img/selo-7dias.svg" alt="Selo de garantia de 7 dias" width="150" height="150" /></div>
            <div>
              <h2>Compra com garantia</h2>
              <p className="sub">A compra é feita pela Hotmart, que garante no mínimo 7 dias para pedir reembolso. Assista às primeiras aulas e decida com tranquilidade.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap faq reveal">
            <h2>Perguntas rápidas</h2>
            <CollapsibleGroup type="multiple">
              {FAQ.map(([q, a]) => (
                <Collapsible key={q} value={q} className="acc faq-acc" trigger={<strong>{q}</strong>}>
                  <p>{a}</p>
                </Collapsible>
              ))}
            </CollapsibleGroup>
          </div>
        </section>

        <section className="final" id="entrar">
          <img loading="lazy" src="img/box.jpg" alt="" />
          <div className="wrap reveal">
            <h2>Pegue o celular. A primeira cena é hoje.</h2>
            <p className="sub">Entre no Fiz com Celular e aprenda a gravar e editar vídeos que parecem filme.</p>
            <BuyButton>Quero entrar no Fiz com Celular</BuyButton>
          </div>
        </section>
      </main>

      <div className="stick" id="stick">
        <BuyButton className="stick-btn">Quero aprender agora</BuyButton>
      </div>
      <footer>© Fiz com Celular. Todos os direitos reservados.</footer>
    </>
  );
}
