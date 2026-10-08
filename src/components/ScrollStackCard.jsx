import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smile, Flame, Users, Cross, HeartHandshake, BookOpen } from 'lucide-react';

const iconMap = {
  Shield: Shield,
  Smile: Smile,
  Flame: Flame,
  Users: Users,
  Cross: Cross,
};

export const ScrollStackCard = ({ item, index }) => {
  const IconComponent = iconMap[item.icon] || Cross;

  // Desfase para el efecto apilado de códice / pergamino sagrado
  const topOffset = 95 + index * 26;

  return (
    <motion.article
      className="sacred-card"
      style={{
        top: `${topOffset}px`,
        zIndex: index + 1,
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="card-top-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span className="card-number-badge">Nota {item.number} / V</span>
          <span className="card-reference-pill">{item.sectionRef}</span>
          <span className="badge-sacred" style={{ margin: 0, padding: '0.25rem 0.85rem' }}>{item.badge}</span>
        </div>

        <div className="card-icon-wrapper">
          <IconComponent size={26} />
        </div>
      </div>

      <h3 className="card-title font-cinzel">{item.title}</h3>
      <span className="card-subtitle-tag">{item.subtitle}</span>

      {/* Párrafos extensos y teológicos del Capítulo 4 */}
      <div className="card-paragraphs">
        {item.paragraphs.map((pText, pIdx) => (
          <p key={pIdx} className="card-paragraph">
            {pText}
          </p>
        ))}
      </div>

      {item.quote && (
        <blockquote className="card-quote-sacred">
          {item.quote}
        </blockquote>
      )}

      {item.reflection && (
        <div className="card-reflection">
          <BookOpen size={20} color="var(--color-gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
          <div>
            <strong style={{ color: 'var(--color-gold-light)', display: 'block', marginBottom: '0.25rem', fontFamily: 'var(--font-heading-cinzel)', fontSize: '0.88rem', letterSpacing: '0.05em' }}>
              Para la meditación personal:
            </strong>
            <span>{item.reflection}</span>
          </div>
        </div>
      )}
    </motion.article>
  );
};
