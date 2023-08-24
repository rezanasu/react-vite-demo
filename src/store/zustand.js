import {create} from 'zustand'

const useStore = create((set) => ({
    // global states
    revenue: 0,
    items: [],
    setItems: (data) => set(() => ({ items: data })),
    setRevenue: (data) => set((state) => ({revenue: state.revenue + data}))
}))

export default useStore;