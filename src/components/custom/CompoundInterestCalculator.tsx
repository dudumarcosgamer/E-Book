'use client';

import { useState } from 'react';
import { TrendingUp, DollarSign, Calendar, Percent } from 'lucide-react';
import { CompoundInterestResult } from '@/lib/types';

export default function CompoundInterestCalculator() {
  const [initialAmount, setInitialAmount] = useState<number>(1000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [annualRate, setAnnualRate] = useState<number>(10);
  const [years, setYears] = useState<number>(20);
  const [results, setResults] = useState<CompoundInterestResult[]>([]);

  const calculateCompoundInterest = () => {
    const monthlyRate = annualRate / 100 / 12;
    const months = years * 12;
    const calculatedResults: CompoundInterestResult[] = [];

    let totalAmount = initialAmount;
    let totalInvested = initialAmount;

    for (let year = 1; year <= years; year++) {
      for (let month = 1; month <= 12; month++) {
        // Primeiro adiciona o aporte mensal
        totalAmount += monthlyContribution;
        totalInvested += monthlyContribution;
        // Depois aplica os juros sobre o total
        totalAmount = totalAmount * (1 + monthlyRate);
      }

      const totalInterest = totalAmount - totalInvested;
      calculatedResults.push({
        year,
        totalInvested: Math.round(totalInvested * 100) / 100,
        totalInterest: Math.round(totalInterest * 100) / 100,
        totalAmount: Math.round(totalAmount * 100) / 100,
      });
    }

    setResults(calculatedResults);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const finalResult = results[results.length - 1];

  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 rounded-3xl shadow-2xl p-8 md:p-12 border border-emerald-700/30">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl mb-4 shadow-lg">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mb-2">
          Calculadora de Juros Compostos
        </h2>
        <p className="text-emerald-200/80 text-lg">
          Visualize o poder da 8ª maravilha do mundo
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Inputs */}
        <div className="space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/20">
            <label className="flex items-center gap-2 text-emerald-300 font-semibold mb-3">
              <DollarSign className="w-5 h-5" />
              Investimento Inicial
            </label>
            <input
              type="number"
              value={initialAmount}
              onChange={(e) => setInitialAmount(Number(e.target.value))}
              className="w-full bg-slate-900/80 text-white text-xl font-bold px-4 py-3 rounded-xl border border-emerald-600/30 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
              placeholder="R$ 1.000"
            />
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/20">
            <label className="flex items-center gap-2 text-emerald-300 font-semibold mb-3">
              <DollarSign className="w-5 h-5" />
              Aporte Mensal
            </label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full bg-slate-900/80 text-white text-xl font-bold px-4 py-3 rounded-xl border border-emerald-600/30 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
              placeholder="R$ 500"
            />
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/20">
            <label className="flex items-center gap-2 text-emerald-300 font-semibold mb-3">
              <Percent className="w-5 h-5" />
              Taxa de Juros Anual (%)
            </label>
            <input
              type="number"
              value={annualRate}
              onChange={(e) => setAnnualRate(Number(e.target.value))}
              step="0.1"
              className="w-full bg-slate-900/80 text-white text-xl font-bold px-4 py-3 rounded-xl border border-emerald-600/30 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
              placeholder="10%"
            />
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/20">
            <label className="flex items-center gap-2 text-emerald-300 font-semibold mb-3">
              <Calendar className="w-5 h-5" />
              Período (Anos)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full bg-slate-900/80 text-white text-xl font-bold px-4 py-3 rounded-xl border border-emerald-600/30 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
              placeholder="20"
            />
          </div>

          <button
            onClick={calculateCompoundInterest}
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Calcular Meu Futuro 🚀
          </button>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {finalResult && (
            <>
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 shadow-2xl border border-emerald-400/30">
                <p className="text-emerald-100 text-sm font-semibold mb-2">
                  Valor Final em {years} anos
                </p>
                <p className="text-white text-5xl font-bold mb-4">
                  {formatCurrency(finalResult.totalAmount)}
                </p>
                <div className="h-1 bg-emerald-400/30 rounded-full mb-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-emerald-200 text-xs mb-1">Total Investido</p>
                    <p className="text-white text-lg font-bold">
                      {formatCurrency(finalResult.totalInvested)}
                    </p>
                  </div>
                  <div>
                    <p className="text-emerald-200 text-xs mb-1">Juros Ganhos</p>
                    <p className="text-amber-300 text-lg font-bold">
                      {formatCurrency(finalResult.totalInterest)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/20">
                <h3 className="text-emerald-300 font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Evolução Patrimonial
                </h3>
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  {results.map((result) => (
                    <div
                      key={result.year}
                      className="bg-slate-900/60 rounded-xl p-4 border border-emerald-700/10 hover:border-emerald-600/30 transition-all"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-emerald-400 font-bold">
                          Ano {result.year}
                        </span>
                        <span className="text-white font-bold">
                          {formatCurrency(result.totalAmount)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">
                          Investido: {formatCurrency(result.totalInvested)}
                        </span>
                        <span className="text-amber-400">
                          +{formatCurrency(result.totalInterest)}
                        </span>
                      </div>
                      <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full transition-all duration-500"
                          style={{
                            width: `${(result.totalInterest / result.totalAmount) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {!finalResult && (
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-12 border border-emerald-700/20 text-center">
              <TrendingUp className="w-16 h-16 text-emerald-600/50 mx-auto mb-4" />
              <p className="text-emerald-300/60 text-lg">
                Preencha os campos e clique em calcular para ver a mágica dos juros compostos
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Insights */}
      {finalResult && (
        <div className="bg-gradient-to-r from-amber-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-600/20">
          <h3 className="text-amber-400 font-bold text-lg mb-3">💡 Insights Poderosos</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-slate-900/50 rounded-xl p-4">
              <p className="text-emerald-300 font-semibold mb-1">Multiplicação</p>
              <p className="text-white text-2xl font-bold">
                {(finalResult.totalAmount / finalResult.totalInvested).toFixed(2)}x
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Seu dinheiro multiplicou
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-4">
              <p className="text-emerald-300 font-semibold mb-1">Retorno Total</p>
              <p className="text-white text-2xl font-bold">
                {((finalResult.totalInterest / finalResult.totalInvested) * 100).toFixed(0)}%
              </p>
              <p className="text-slate-400 text-xs mt-1">
                De lucro sobre investido
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-4">
              <p className="text-emerald-300 font-semibold mb-1">Renda Passiva</p>
              <p className="text-white text-2xl font-bold">
                {formatCurrency((finalResult.totalAmount * (annualRate / 100)) / 12)}
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Por mês (estimado)
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.7);
        }
      `}</style>
    </div>
  );
}
