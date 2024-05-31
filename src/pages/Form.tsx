import { FC, useCallback, useEffect } from "react"
import { useForm } from 'react-hook-form';
import { useStore } from 'zustand';
import useInsuranceStore, { InsuranceStore }  from '../store/useInsuranceStore';
import _ from 'lodash';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const  Form:FC =()=> {

    const mockURL = 'http://localhost:3001';

  const { register, handleSubmit, watch } = useForm();
  
  const { formData, updateFormData } = useStore(useInsuranceStore);
  const { producto, plan, rucContratante } = formData;
 
  console.log(producto+'producto');

  const formDataSubject = new Subject<Partial<FormData>>();

//   useEffect(() => {
//     const subscription = formDataSubject
//       .pipe(debounceTime(300))
//       .subscribe((data) => {
//         updateFormData(data);
//       });

//     return () => subscription.unsubscribe();
//   }, [formDataSubject, updateFormData]);

  const debouncedUpdateFormData = useCallback(
    _.debounce((data) => {
      console.log('entra para cambiar'+ data.producto);
      updateFormData(data);
    }, 300), // Debounce time in milliseconds
    []
  );

  const watchedFields = watch();

  useEffect(() => {
    if (JSON.stringify(watchedFields) !== JSON.stringify(formData)) {
    debouncedUpdateFormData(watchedFields);
    }
  }, [watchedFields, formData, debouncedUpdateFormData]);

  

//   const onSubmit = (data:any) => {
//     updateFormData(data);

//   };

  return (
    <form>
      <label>
        Producto:
        <input type="text" {...register('producto')} defaultValue={formData.producto} />
      </label>
      <label>
        Plan:
        <input type="text" {...register('plan')} defaultValue={formData.plan} />
      </label>
      <label>
        RUC Contratante:
        <input type="text" {...register('rucContratante')} defaultValue={formData.rucContratante} />
      </label>
      <label>
        RUC Asegurado Principal:
        <input type="text" {...register('rucAseguradoPrincipal')} defaultValue={formData.rucAseguradoPrincipal} />
      </label>
      <label>
        RUC o DNI de Asegurado Secundario:
        <input type="text" {...register('rucODNIAseguradoSecundario')} defaultValue={formData.rucODNIAseguradoSecundario} />
      </label>
      <label>
        Endosatario:
        <input type="text" {...register('endosatario')} defaultValue={formData.endosatario} />
      </label>
      <label>
        Beneficiario:
        <input type="text" {...register('beneficiario')} defaultValue={formData.beneficiario} />
      </label>
      <label>
        Periodo de Vigencia:
        <input type="text" {...register('periodoVigencia')} defaultValue={formData.periodoVigencia} />
      </label>
      <label>
        Moneda:
        <input type="text" {...register('moneda')} defaultValue={formData.moneda} />
      </label>
      <label>
        Giro:
        <input type="text" {...register('giro')} defaultValue={formData.giro} />
      </label>
      <label>
        Ocupación:
        <input type="text" {...register('ocupacion')} defaultValue={formData.ocupacion} />
      </label>
      <label>
        Prima:
        <input type="text" {...register('prima')} defaultValue={formData.prima} />
      </label>
      <label>
        Materia de Seguro:
        <input type="text" {...register('materiaSeguro')} defaultValue={formData.materiaSeguro} />
      </label>
      <label>
        Modalidad de Seguro:
        <input type="text" {...register('modalidadSeguro')} defaultValue={formData.modalidadSeguro} />
      </label>
      <label>
        Deducibles:
        <input type="text" {...register('deducibles')} defaultValue={formData.deducibles} />
      </label>
      <label>
        Garantía:
        <input type="text" {...register('garantia')} defaultValue={formData.garantia} />
      </label>
      <label>
        Exclusiones:
        <input type="text" {...register('exclusiones')} defaultValue={formData.exclusiones} />
      </label>
    </form>
  );
}

export default Form
