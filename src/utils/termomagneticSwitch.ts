export const drawTermoMagneticSwitch = (
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
  const firstCircleCenterX = x + width / 2;
  const firstCirclecenterY = y + height / 4;
  const firstCircleradius = width / 10;

  ctx.beginPath();
  ctx.moveTo(x + width / 2, y);
  ctx.lineTo(x + width / 2, y - firstCircleradius + height / 4);
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
  ctx.arc(firstCircleCenterX, firstCirclecenterY, 3, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();

  const secondCirclecenterX = x + width / 2;
  const secondCirclecenterY = firstCirclecenterY + height / 2;
  const secondCircleradius = width / 10;

  ctx.beginPath();
  ctx.arc(
    secondCirclecenterX,
    secondCirclecenterY,
    secondCircleradius,
    0,
    2 * Math.PI
  );
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(secondCirclecenterX, secondCirclecenterY, 3, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x + width / 2, y + height);
  ctx.lineTo(x + width / 2, secondCirclecenterY + secondCircleradius);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(
    secondCirclecenterX + secondCircleradius * 2,
    (secondCirclecenterY + firstCirclecenterY) / 2,
    secondCircleradius * 2.5,
    1.5 * Math.PI,
    2.5 * Math.PI,
    false
  );

  ctx.stroke();
};
