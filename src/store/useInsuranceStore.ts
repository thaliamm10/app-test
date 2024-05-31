// useInsuranceStore.ts
import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import produce from 'immer';

interface FormData {
  producto: string;
  plan: string;
  rucContratante: string;
  rucAseguradoPrincipal: string;
  rucODNIAseguradoSecundario: string;
  endosatario: string;
  beneficiario: string;
  periodoVigencia: string;
  moneda: string;
  giro: string;
  ocupacion: string;
  prima: string;
  materiaSeguro: string;
  modalidadSeguro: string;
  deducibles: string;
  garantia: string;
  exclusiones: string;
}

interface InsuranceStore {
  formData: FormData;
  updateFormData: (newData: Partial<FormData>) => void;
}

const useInsuranceStore = create<InsuranceStore>()(
  devtools(
    persist(
      (set) => ({
        formData: {
          producto: '',
          plan: '',
          rucContratante: '',
          rucAseguradoPrincipal: '',
          rucODNIAseguradoSecundario: '',
          endosatario: '',
          beneficiario: '',
          periodoVigencia: '',
          moneda: '',
          giro: '',
          ocupacion: '',
          prima: '',
          materiaSeguro: '',
          modalidadSeguro: '',
          deducibles: '',
          garantia: '',
          exclusiones: '',
        },
        updateFormData: (newData) =>
          set((state) =>
            produce(state, (draft) => {
              draft.formData = { ...draft.formData, ...newData };
            })
          ),
      }),
      { name: 'Pruebastore' }
    )
  )
);

export default useInsuranceStore;
export type { InsuranceStore };
