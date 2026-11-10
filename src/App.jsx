import Aurora from './components/Aurora.jsx'
import BounceCards from './components/BounceCards.jsx'
import ScrollExpand from './components/ScrollExpand.jsx'
import ScrollFloat from './components/ScrollFloat.jsx'
import ScrollReveal from './components/ScrollReveal.jsx'
import ScrollStack, { ScrollStackItem } from './components/ScrollStack.jsx'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import LetrasFuzzy from './components/LetrasFuzzy.jsx'
import { momentos } from './momentos.js'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function App() {
  const portada = useRef(null)

  // Al deslizar, las letras de la portada se sueltan una por una y caen
  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.to('.letra', {
        y: () => window.innerHeight,
        rotation: 'random(-120, 120)',
        ease: 'power1.in',
        duration: 0.4,
        stagger: { amount: 0.6, from: 'random' },
        scrollTrigger: {
          trigger: portada.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
    },
    { scope: portada }
  )

  return (
    <main>
      <section className="portada" ref={portada}>
        <div className="portada__fondo">
          <Aurora colorStops={['#7c3aed', '#f59e0b', '#7c3aed']} mouseInteraction={false} />
        </div>
        <p className="portada__pre">Momentos para no olvidar</p>
        <h1 className="portada__titulo">
          <LetrasFuzzy texto="El Carlos" />
        </h1>
        <p className="portada__sub">
          <LetrasFuzzy texto="y su descenso a la locura" fuzzRange={12} />
        </p>
        <p className="portada__pista">desliza ↓</p>
      </section>

      {momentos.map(m => (
        <article key={`${m.anio}-${m.titulo}`}>
          <section className="era">
            <ScrollFloat textClassName="era__anio">{m.anio}</ScrollFloat>
            <ScrollReveal baseRotation={0} wordAnimationEnd="bottom center" containerClassName="era__titulo">
              {m.titulo}
            </ScrollReveal>
          </section>
          <ScrollExpand useWindowScroll src={m.fotos[0]} alt={m.titulo} startWidth={55} holdDistance={0.8}>
            <p className="era__texto">{m.descripcion}</p>
            {m.fotos.length > 1 && (
              <BounceCards
                images={m.fotos.slice(1)}
                containerWidth="100%"
                containerHeight={220}
                cardSize={150}
                spread={100}
                animationDelay={0}
              />
            )}
          </ScrollExpand>
        </article>
      ))}

      <section className="cierre">
        <ScrollFloat>Para no olvidar</ScrollFloat>
        <ScrollStack useWindowScroll>
          {momentos.map(m => (
            <ScrollStackItem
              key={`${m.anio}-${m.titulo}`}
              itemClassName="resumen"
              style={{ backgroundImage: `linear-gradient(rgb(0 0 0 / 0.45), rgb(0 0 0 / 0.75)), url("${m.fotos[0]}")` }}
            >
              <span className="resumen__anio">{m.anio}</span>
              <span className="resumen__titulo">{m.titulo}</span>
            </ScrollStackItem>
          ))}
        </ScrollStack>
        <p className="cierre__fin">Continuará…</p>
      </section>
    </main>
  )
}

export default App
