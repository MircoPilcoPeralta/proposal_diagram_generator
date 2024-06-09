export const drawServiceDrop = (
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
  ctx.moveTo(x + width / 2, y);
  ctx.lineTo(x + width / 2, y + height / 6);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x + width / 2, y + height / 6);
  ctx.lineTo(x + width, y + (2 * height) / 6);

  ctx.moveTo(x + width, y + (2 * height) / 6);
  ctx.lineTo(x + width / 2, y + (3 * height) / 6);

  ctx.moveTo(x + width / 2, y + (3 * height) / 6);
  ctx.lineTo(x + width, y + (4 * height) / 6);

  ctx.moveTo(x + width, y + (4 * height) / 6);
  ctx.lineTo(x + width / 2, y + (5 * height) / 6);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + width / 2, y + (5 * height) / 6);
  ctx.lineTo(x + width / 2, y + height);
  ctx.stroke();

  ctx.moveTo(x + width / 2, y + height);
  ctx.lineTo(x + width / 2 + width / 7, y + height - height / 10);
  ctx.stroke();

  ctx.moveTo(x + width / 2, y + height);
  ctx.lineTo(x + width / 2 - width / 7, y + height - height / 10);
  ctx.stroke();
};
