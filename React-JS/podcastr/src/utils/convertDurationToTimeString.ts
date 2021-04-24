export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600); // 60 seg * 60 min = 3600 seg, Math.floor para arredondar para baixo
  const minutes = Math.floor((duration % 3600) / 60); //resto da divisão anterior divido por 60
  const seconds = duration % 60; // resto da duração total dividido por 60

  const timString = [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0")) // se a hora tiver apenas 1 dígito, acrescenta o 0 na frente
    .join(":"); // une com dois pontos

  return timString;
}
