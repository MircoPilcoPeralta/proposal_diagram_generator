export const drawStreetLighting = (
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

  const lineSkip = 5;

  ctx.strokeStyle = color;

  ctx.beginPath();
  ctx.moveTo(x + lineSkip, y + height - lineSkip);
  ctx.lineTo(x + width - lineSkip, y + lineSkip);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + lineSkip, y + lineSkip);
  ctx.lineTo(x + width - lineSkip, y + height - lineSkip);
  ctx.stroke();

  const firstCircleCenterX = x + width / 2;
  const firstCirclecenterY = y + height / 2;
  const firstCircleradius = width / 2.5;

  ctx.beginPath();

  ctx.beginPath();
  ctx.moveTo(x + width / 2, y);
  ctx.lineTo(x + width / 2, firstCirclecenterY - firstCircleradius);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(
    firstCircleCenterX,
    firstCirclecenterY,
    firstCircleradius,
    0,
    2 * Math.PI
  );
  ctx.fill();

  ctx.strokeStyle = color;
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.font = "10px Arial";
  ctx.fillText(cable, firstCircleCenterX - width / 3, firstCirclecenterY);

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.font = "10px Arial";
  ctx.fillText(termic, firstCircleCenterX - width / 3, firstCirclecenterY + 10);
};
