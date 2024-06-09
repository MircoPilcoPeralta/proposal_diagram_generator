export const drawHorizontalLine = (
  x: number,
  y: number,
  height: number,
  width: number,
  color: string,
  canvasId: string
) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  const ctx = canvas!.getContext("2d") as CanvasRenderingContext2D;

  ctx.strokeStyle = color;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y);
  ctx.stroke();
};
