export const drawMeasurementEquipment = (
  x: number,
  y: number,
  height: number,
  width: number,
  color: string,
  canvasId: string,
  cable: string,
  termic: string
) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  const ctx = canvas!.getContext("2d") as CanvasRenderingContext2D;

  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.strokeRect(x, y, width, height / 1.5);

  ctx.beginPath();
  ctx.arc(x + width / 2, y, height / 2, 0, Math.PI, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + width / 2, y + height / 1.5);
  ctx.lineTo(x + width / 2, y + height);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.font = "10px Arial";
  ctx.fillText(cable, x + width + 10, y + height / 2);

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.font = "10px Arial";
  ctx.fillText(termic, x + width + 10, y + height / 2 + 10);
};
