export const drawSwitch = (
  x: number,
  y: number,
  height: number,
  width: number,
  color: string,
  canvasId: string
) => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  const ctx = canvas!.getContext("2d") as CanvasRenderingContext2D;

  const rectangleX = x + width / 3;
  const rectangleY = y + height / 3;
  const rectangleWidth = width / 3;
  const rectangleHeight = height / 2;

  ctx.beginPath();
  ctx.moveTo(x + width / 2, y);
  ctx.lineTo(x + width / 2, y + height / 3);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.strokeRect(rectangleX, rectangleY, rectangleWidth, rectangleHeight);

  ctx.beginPath();
  ctx.moveTo(rectangleX + rectangleWidth, rectangleY + rectangleHeight / 2);
  ctx.lineTo(rectangleX + 2 * rectangleWidth, rectangleY + rectangleHeight / 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(rectangleX + 2 * rectangleWidth, rectangleY + rectangleHeight / 2);
  ctx.lineTo(rectangleX + 2 * rectangleWidth, rectangleY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(rectangleX, rectangleY + rectangleHeight / 2);
  ctx.lineTo(rectangleX - rectangleWidth, rectangleY + rectangleHeight / 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(rectangleX - rectangleWidth, rectangleY + rectangleHeight / 2);
  ctx.lineTo(rectangleX - rectangleWidth, rectangleY + rectangleHeight);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x - width / 5, rectangleY + rectangleHeight);
  ctx.lineTo(x + width / 5, rectangleY + rectangleHeight);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x - width / 8, rectangleY + rectangleHeight + rectangleHeight / 6);
  ctx.lineTo(x + width / 8, rectangleY + rectangleHeight + rectangleHeight / 6);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(
    x - width / 10,
    rectangleY + rectangleHeight + rectangleHeight / 3
  );
  ctx.lineTo(
    x + width / 10,
    rectangleY + rectangleHeight + rectangleHeight / 3
  );
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(rectangleX + rectangleWidth / 2, rectangleY + rectangleHeight);
  ctx.lineTo(
    rectangleX + rectangleWidth / 2,
    rectangleY + rectangleHeight + height / 6
  );
  ctx.stroke();
};
