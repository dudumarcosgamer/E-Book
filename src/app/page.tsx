'use client';

import { useState } from 'react';
import { BookOpen, Menu, X, ChevronRight, Star, ExternalLink } from 'lucide-react';
import EbookSection from '@/components/custom/EbookSection';
import CompoundInterestCalculator from '@/components/custom/CompoundInterestCalculator';
import { EBOOK_CHAPTERS, RECOMMENDED_BOOKS } from '@/lib/constants';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState('intro');

  const scrollToChapter = (chapterId: string) => {
    setActiveChapter(chapterId);
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-emerald-700/20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
                  Finanças Pessoais
                </h1>
                <p className="text-emerald-300/80 text-sm hidden sm:block">
                  Mentalidade de Riqueza
                </p>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl bg-emerald-900/30 border border-emerald-700/30 hover:bg-emerald-900/50 transition-all"
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-emerald-400" />
              ) : (
                <Menu className="w-6 h-6 text-emerald-400" />
              )}
            </button>
            <nav className="hidden lg:flex items-center gap-2">
              {EBOOK_CHAPTERS.slice(0, 4).map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => scrollToChapter(chapter.id)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    activeChapter === chapter.id
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg'
                      : 'text-emerald-300 hover:bg-emerald-900/30'
                  }`}
                >
                  {chapter.title.split(' ')[0]}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-slate-900/98 backdrop-blur-lg border-t border-emerald-700/20">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {EBOOK_CHAPTERS.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => scrollToChapter(chapter.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between ${
                    activeChapter === chapter.id
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white'
                      : 'text-emerald-300 hover:bg-emerald-900/30'
                  }`}
                >
                  {chapter.title}
                  <ChevronRight className="w-5 h-5" />
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-amber-900/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-900/30 backdrop-blur-sm border border-emerald-600/30 rounded-full px-6 py-2 mb-8">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-emerald-300 font-semibold">E-book Premium Gratuito</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400 mb-6 leading-tight">
            Finanças Pessoais &<br />Mentalidade de Riqueza
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-200/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubra os segredos que separam os ricos dos pobres. Transforme sua relação com dinheiro e construa o patrimônio que você merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToChapter('mindset')}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Começar Jornada
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToChapter('compound-interest')}
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-emerald-600/30 hover:bg-slate-800/80 text-emerald-300 font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Ver Calculadora
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Capítulos', value: '7+' },
              { label: 'Dicas Práticas', value: '25+' },
              { label: 'Livros Recomendados', value: '6' },
              { label: 'Exemplos Reais', value: '50+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-emerald-700/20 rounded-2xl p-6 hover:border-emerald-600/40 transition-all"
              >
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-emerald-300/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Chapters */}
        {EBOOK_CHAPTERS.map((chapter) => {
          if (chapter.id === 'compound-interest') {
            return (
              <EbookSection key={chapter.id} chapter={chapter}>
                <CompoundInterestCalculator />
              </EbookSection>
            );
          }

          if (chapter.id === 'books') {
            return (
              <EbookSection key={chapter.id} chapter={chapter}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {RECOMMENDED_BOOKS.map((book, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-emerald-700/20 hover:border-emerald-600/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 group"
                    >
                      <div className="relative h-64 overflow-hidden bg-slate-900">
                        <img
                          src={book.imageUrl}
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-emerald-300 mb-2">
                          {book.title}
                        </h4>
                        <p className="text-amber-400 text-sm font-semibold mb-3">
                          {book.author}
                        </p>
                        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                          {book.description}
                        </p>
                        <a
                          href={book.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 text-sm"
                        >
                          Comprar na Amazon
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </EbookSection>
            );
          }

          return <EbookSection key={chapter.id} chapter={chapter} />;
        })}

        {/* CTA Final */}
        <section className="mt-20 bg-gradient-to-br from-emerald-900 via-slate-900 to-amber-900 rounded-3xl p-12 md:p-16 text-center shadow-2xl border border-emerald-700/30">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 shadow-2xl">
              <Star className="w-10 h-10 text-white fill-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mb-6">
              Sua Jornada Começa Agora
            </h2>
            <p className="text-xl text-emerald-200/90 mb-8 leading-relaxed">
              Você acabou de absorver conhecimento que vale milhões. Agora é hora de agir. Lembre-se: conhecimento sem ação é ilusão.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => scrollToChapter('action-plan')}
                className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Ver Plano de Ação de 90 Dias
              </button>
              <p className="text-emerald-300/70 text-sm">
                💎 Transforme sua vida financeira em 3 meses
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-emerald-700/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
                Finanças Pessoais & Mentalidade de Riqueza
              </h3>
            </div>
            <p className="text-emerald-300/60 text-sm mb-6">
              Transformando vidas através da educação financeira
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-emerald-400/60 text-sm">
              <span>© 2024 Todos os direitos reservados</span>
              <span>•</span>
              <span>Conteúdo educacional gratuito</span>
              <span>•</span>
              <span>Invista em você</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
