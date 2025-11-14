'use client';

import { ReactNode } from 'react';
import * as LucideIcons from 'lucide-react';
import { ChapterContent } from '@/lib/types';

interface EbookSectionProps {
  chapter: ChapterContent;
  children?: ReactNode;
}

export default function EbookSection({ chapter, children }: EbookSectionProps) {
  const IconComponent = (LucideIcons as any)[chapter.icon] || LucideIcons.BookOpen;

  return (
    <section className="mb-16 scroll-mt-24" id={chapter.id}>
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20 rounded-3xl p-8 md:p-12 shadow-2xl border border-emerald-700/20">
        {/* Header */}
        <div className="flex items-start gap-6 mb-8">
          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mb-2">
              {chapter.title}
            </h2>
            <p className="text-emerald-300/80 text-lg md:text-xl">
              {chapter.subtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-8">
          {chapter.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-slate-200 text-lg leading-relaxed bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-700/10"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Mindset Principles */}
        {chapter.mindsetPrinciples && chapter.mindsetPrinciples.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
              <LucideIcons.Lightbulb className="w-6 h-6" />
              Princípios Fundamentais
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {chapter.mindsetPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-900/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-emerald-600/20 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <h4 className="text-xl font-bold text-emerald-300 mb-3">
                    {principle.principle}
                  </h4>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {principle.explanation}
                  </p>
                  <div className="bg-amber-900/20 border border-amber-600/30 rounded-xl p-4">
                    <p className="text-amber-300 font-semibold text-sm mb-1">
                      ⚡ Ação Imediata:
                    </p>
                    <p className="text-amber-100 text-sm">{principle.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        {chapter.tips && chapter.tips.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
              <LucideIcons.Zap className="w-6 h-6" />
              Dicas Práticas
            </h3>
            <div className="space-y-4">
              {chapter.tips.map((tip, index) => {
                const TipIcon = (LucideIcons as any)[tip.icon] || LucideIcons.CheckCircle;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/20 hover:border-emerald-600/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center">
                        <TipIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-emerald-300 mb-2">
                          {tip.title}
                        </h4>
                        <p className="text-slate-300 mb-3 leading-relaxed">
                          {tip.description}
                        </p>
                        <div className="bg-emerald-900/30 border-l-4 border-emerald-500 rounded-r-xl p-4">
                          <p className="text-emerald-200 text-sm font-semibold mb-1">
                            📊 Exemplo Prático:
                          </p>
                          <p className="text-emerald-100 text-sm">{tip.example}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Economic Concepts */}
        {chapter.economicConcepts && chapter.economicConcepts.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
              <LucideIcons.BookOpen className="w-6 h-6" />
              Conceitos Essenciais
            </h3>
            <div className="space-y-4">
              {chapter.economicConcepts.map((concept, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-slate-800/60 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/20"
                >
                  <h4 className="text-xl font-bold text-amber-400 mb-3">
                    {concept.term}
                  </h4>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {concept.definition}
                  </p>
                  <div className="bg-amber-900/20 border border-amber-600/30 rounded-xl p-4">
                    <p className="text-amber-300 font-semibold text-sm mb-1">
                      💰 Impacto na Sua Vida:
                    </p>
                    <p className="text-amber-100 text-sm">{concept.realLifeImpact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Custom Children Content */}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
