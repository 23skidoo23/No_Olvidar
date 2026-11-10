import { useMemo, useState } from 'react'
import FuzzyText from './FuzzyText.jsx'

// Dibuja el texto con un <FuzzyText> por letra (clase .letra) para poder animar cada letra por separado.
// El tamaño y color salen del CSS del contenedor (className).
function LetrasFuzzy({ texto, className = '', fuzzRange = 30, fontWeight = 900 }) {
  const [encima, setEncima] = useState(false)

  // Medidas de cada letra en em, para colocar cada canvas donde iría la letra en texto normal
  const palabras = useMemo(() => {
    const ctx = document.createElement('canvas').getContext('2d')
    ctx.font = `${fontWeight} 100px ${getComputedStyle(document.body).fontFamily}`
    return texto.split(' ').map(palabra =>
      Array.from(palabra, letra => {
        const m = ctx.measureText(letra)
        return { letra, ancho: m.width / 100, izq: m.actualBoundingBoxLeft / 100, desc: m.actualBoundingBoxDescent / 100 }
      })
    )
  }, [texto, fontWeight])

  // FuzzyText deja este margen transparente a la izquierda del texto dentro de su canvas (padX + inset)
  const margen = fuzzRange + 25

  return (
    <span className={`letras ${className}`} onPointerEnter={() => setEncima(true)} onPointerLeave={() => setEncima(false)}>
      <span className="solo-lector">{texto}</span>
      <span aria-hidden="true">
        {palabras.map((palabra, i) => (
          <span key={i}>
            {i > 0 && ' '}
            <span className="letras__palabra">
              {palabra.map((m, j) => (
                <span
                  key={j}
                  className="letra"
                  style={{ width: `${m.ancho}em`, '--x': `calc(${-margen}px - ${m.izq}em)`, '--y': `${-m.desc}em` }}
                >
                  <FuzzyText
                    fontSize="1em"
                    fontWeight={fontWeight}
                    fuzzRange={fuzzRange}
                    baseIntensity={encima ? 0.5 : 0.2}
                    enableHover={false}
                    intro
                  >
                    {m.letra}
                  </FuzzyText>
                </span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </span>
  )
}

export default LetrasFuzzy
