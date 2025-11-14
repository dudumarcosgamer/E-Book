// Types para o E-book de Finanças Pessoais

export interface BookRecommendation {
  title: string;
  author: string;
  description: string;
  amazonLink: string;
  imageUrl: string;
}

export interface PracticalTip {
  title: string;
  description: string;
  example: string;
  icon: string;
}

export interface MindsetPrinciple {
  principle: string;
  explanation: string;
  action: string;
}

export interface EconomicConcept {
  term: string;
  definition: string;
  realLifeImpact: string;
}

export interface ChapterContent {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  content: string[];
  tips?: PracticalTip[];
  mindsetPrinciples?: MindsetPrinciple[];
  economicConcepts?: EconomicConcept[];
  books?: BookRecommendation[];
}

export interface CompoundInterestResult {
  year: number;
  totalInvested: number;
  totalInterest: number;
  totalAmount: number;
}
