import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqItems as defaultItems } from '../data/homeContent';
import { RevealText } from './Reveal';

export default function FAQ({ items = defaultItems, initiallyOpen = 0, title = 'Tout savoir avant de faire danser vos invités.', compact = false }) {
  const [activeIndex, setActiveIndex] = useState(initiallyOpen);
  const reduceMotion = useReducedMotion();

  return (
    <section id={compact ? undefined : 'faq'} className={`faq-outer${compact ? ' faq-outer--compact' : ''}`} aria-labelledby="faq-title">
      <div className={`faq-section section-wrap${compact ? ' faq-section--compact' : ''}`}>
      <RevealText className="faq-heading">
        <p className="microcopy">Vos questions</p>
        <h2 id="faq-title">{title}</h2>
      </RevealText>

      <div className="faq-list">
        {items.map(({ question, answer }, index) => {
          const expanded = activeIndex === index;
          const questionId = `faq-question-${index}`;
          const answerId = `faq-answer-${index}`;

          return (
            <div className="faq-item" key={question}>
              <button
                id={questionId}
                type="button"
                onClick={() => setActiveIndex(expanded ? -1 : index)}
                aria-expanded={expanded}
                aria-controls={answerId}
              >
                <span>{question}</span>
                <Plus className={expanded ? 'is-open' : ''} aria-hidden="true" />
              </button>
              <AnimatePresence initial={false}>
                {expanded ? (
                  <motion.div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={reduceMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0.1 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p>{answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
