export const drawConnection = (
  x: number,
  y: number,
  height: number,
  width: number,
  color: string,
  canvasId: string
) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  const ctx = canvas!.getContext("2d") as CanvasRenderingContext2D;

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x + width / 2, y);
  ctx.lineTo(x + width / 2, y + height);
  ctx.stroke();
};
