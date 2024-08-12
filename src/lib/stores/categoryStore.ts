import { create } from 'zustand';

type CategoryStore = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  selectedCategory: '전체',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
