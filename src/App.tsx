import { useEffect } from "react";
import { drawServiceDrop } from "./utils/serviceDrop";
import { drawMeasurementEquipment } from "./utils/measurementEquipment";
import { drawSwitch } from "./utils/switch";
import { drawTermoMagneticSwitch } from "./utils/termomagneticSwitch";
import { drawCircuit } from "./utils/circuit";
import { drawStreetLighting } from "./utils/streetLighting";
import { drawConnection } from "./utils/conection";
import { drawStartConnection } from "./utils/startConnection";
import { drawMiddleConnection } from "./utils/middleConnection";
import { drawEndConnection } from "./utils/endConnection";

import connectionsInfo from "./data/connections copy.json";

const CANVAS_HEIGHT = 500;
const CANVAS_WIDTH = 500;

function App() {
  const drawInitialConnection = (x, y, blockLength, color, canvasId) => {
    if (!connectionsInfo.medidor) {
      console.error("No se encuentran datos de un medidor en el archivo .json");
      return;
    }

    drawServiceDrop(x, y, blockLength, blockLength, color, canvasId);

    drawMeasurementEquipment(
      x,
      y + blockLength,
      blockLength,
      blockLength,
      color,
      canvasId,
      connectionsInfo.medidor.cable,
      connectionsInfo.medidor.termico
    );

    drawSwitch(
      x,
      y + 2 * blockLength,
      blockLength,
      blockLength,
      color,
      canvasId
    );

    drawConnection(
      x,
      y + 3 * blockLength,
      blockLength,
      blockLength,
      color,
      canvasId
    );
  };

  const drawTomacorrientes = (x, y, blockLength, color, canvasId) => {
    let tomacorrientes = [];
    let luces =
      connectionsInfo.luminarias !== null &&
      typeof connectionsInfo.luminarias !== "undefined"
        ? connectionsInfo.luminarias.length
        : 0;

    if (
      connectionsInfo.tomacorrientes != null &&
      typeof connectionsInfo.tomacorrientes !== "undefined"
    ) {
      tomacorrientes = tomacorrientes.concat(connectionsInfo.tomacorrientes);
    }

    if (
      connectionsInfo.tomacorrienteDeFuerza != null &&
      typeof connectionsInfo.tomacorrienteDeFuerza !== "undefined"
    ) {
      tomacorrientes = tomacorrientes.concat(
        connectionsInfo.tomacorrienteDeFuerza
      );
    }

    if (tomacorrientes.length == 1) {
      drawTermoMagneticSwitch(
        x,
        y + 4 * blockLength,
        blockLength,
        blockLength,
        color,
        canvasId
      );

      drawConnection(
        x,
        y + 5 * blockLength,
        blockLength,
        blockLength,
        color,
        canvasId
      );

      drawCircuit(
        x,
        y + 6 * blockLength,
        blockLength,
        blockLength,
        color,
        canvasId,
        "14 AWG",
        "16A"
      );

      if (luces > 0) {
        drawStreetLighting(
          x,
          y + 7 * blockLength,
          blockLength,
          blockLength,
          color,
          canvasId,
          "14 AWG",
          "16A"
        );
        luces -= 1;
      }
    }

    if (tomacorrientes.length >= 2) {
      for (
        let i = -1 * ((tomacorrientes.length + 1) / 2) + 1;
        i <= (tomacorrientes.length + 1) / 2 - 1;
        i++
      ) {
        if (i === -1 * ((tomacorrientes.length + 1) / 2) + 1) {
          drawStartConnection(
            x + i * blockLength,
            y + 4 * blockLength,
            blockLength,
            blockLength,
            color,
            canvasId
          );
        } else if (i == (tomacorrientes.length + 1) / 2 - 1) {
          drawEndConnection(
            x + i * blockLength,
            y + 4 * blockLength,
            blockLength,
            blockLength,
            color,
            canvasId
          );
        } else {
          drawMiddleConnection(
            x - i * blockLength,
            y + 4 * blockLength,
            blockLength,
            blockLength,
            color,
            canvasId
          );
        }

        drawTermoMagneticSwitch(
          x + i * blockLength,
          y + 5 * blockLength,
          blockLength,
          blockLength,
          color,
          canvasId
        );

        drawConnection(
          x + i * blockLength,
          y + 6 * blockLength,
          blockLength,
          blockLength,
          color,
          canvasId
        );

        drawCircuit(
          x + i * blockLength,
          y + 7 * blockLength,
          blockLength,
          blockLength,
          color,
          canvasId,
          "14 AWG",
          "16A"
        );

        if (luces > 0) {
          drawStreetLighting(
            x + i * blockLength,
            y + 8 * blockLength,
            blockLength,
            blockLength,
            color,
            canvasId,
            "14 AWG",
            "16A"
          );
          luces = luces - 1;
        }
      }
    }
  };

  const drawDiagram = () => {
    const x = CANVAS_HEIGHT / 2;
    const y = 10;
    const blockLength = CANVAS_HEIGHT / 10;
    const color = "black";
    const canvasId = "example";

    drawInitialConnection(x, y, blockLength, color, canvasId);
    drawTomacorrientes(x, y, blockLength, color, canvasId);
  };

  useEffect(() => {
    drawDiagram();
  }, []);

  return (
    <>
      <div>
        <canvas
          id="example"
          height={500}
          width={500}
          style={{ border: "1px solid black" }}
        ></canvas>
      </div>
    </>
  );
}

export default App;
