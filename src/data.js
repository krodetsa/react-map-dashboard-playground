import { create } from "zustand";

export const layers = ["0-10", "10-50", "50-100", "100-300", "300-1000"];
export const colors = ["#548fc7", "#8571ce", "#5c4a9c", "#9f3c90", "#8f29b8"];

export const useCountriesStore = create((set) => ({
  countriesData: [
    { country: "CN", amount: 100 },
    { country: "CA", amount: 1000 },
    { country: "FR", amount: 10 },
    { country: "KZ", amount: 1000 },
    { country: "AL", amount: 1000 },
    { country: "CL", amount: 200 },
    { country: "AU", amount: 500 },
    { country: "SD", amount: 20 },
    { country: "JP", amount: 1000 },
    { country: "BY", amount: 50 },
    { country: "PL", amount: 1000 },
    { country: "BR", amount: 200 },
    { country: "IT", amount: 200 },
  ],
  changeCountries: (e) =>
    set((state) => ({
      countriesData: [...state.countriesData, { country: e, amount: 999 }],
    })),
}));

export const useCustomTooltip = create((set) => ({
  customTooltip: false,
  setCustomTooltip: () =>
    set((state) => ({
      customTooltip: !state.customTooltip,
    })),
}));
