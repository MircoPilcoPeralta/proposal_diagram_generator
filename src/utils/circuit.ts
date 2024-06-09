export const drawCircuit = (
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

  const firstCircleCenterX = x + width / 2;
  const firstCirclecenterY = y + height / 2;
  const firstCircleradius = width / 2.5;

  ctx.beginPath();
  ctx.moveTo(x + width / 2, y);
  ctx.lineTo(x + width / 2, firstCirclecenterY - firstCircleradius);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(
    firstCircleCenterX,
    firstCirclecenterY,
    firstCircleradius,
    0,
    2 * Math.PI
  );
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + width / 2, y + height);
  ctx.lineTo(x + width / 2, firstCirclecenterY + firstCircleradius);
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
