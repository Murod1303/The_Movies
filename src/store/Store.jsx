import { create } from "zustand";

export const useTrendStore = create((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
}));
