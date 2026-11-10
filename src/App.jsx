import Aurora from './components/Aurora.jsx'
import BounceCards from './components/BounceCards.jsx'
import ScrollExpand from './components/ScrollExpand.jsx'
import ScrollFloat from './components/ScrollFloat.jsx'
import ScrollReveal from './components/ScrollReveal.jsx'
import ScrollStack, { ScrollStackItem } from './components/ScrollStack.jsx'
import SplitText from './components/SplitText.jsx'
import { momentos } from './momentos.js'

function App() {
  return (
    <main>
      <section className="portada">
        <div className="portada__fondo">
          <Aurora colorStops={['#7c3aed', '#f59e0b', '#7c3aed']} mouseInteraction={false} />
        </div>
        <p className="portada__pre">Momentos para no olvidar</p>
        <SplitText tag="h1" text="El Carlos" className="portada__titulo" trigger="load" />
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
