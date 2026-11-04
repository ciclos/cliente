export const UMBRALES = [70, 60, 50];

export function porcentajeAprobado(evaluacion, notas){
    const porcentaje = 0;
    for(const nota in notas) {
        if ( nota > UMBRALES[evaluacion]) porcentaje += 25;
    }
}