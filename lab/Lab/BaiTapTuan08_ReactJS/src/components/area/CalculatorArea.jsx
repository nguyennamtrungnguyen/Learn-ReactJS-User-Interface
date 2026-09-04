import { useRecoilState, useRecoilValue } from "recoil";
import { areaState, lengthState, widthState } from "../recoil/AreaState";

const CalculatorArea = () => {
  const [length, setLength] = useRecoilState(lengthState);
  const [width, setWidth] = useRecoilState(widthState);
  const area = useRecoilValue(areaState);

  console.log(areaState, lengthState, widthState);

  return (
    <div>
      <h2>Tính diện tích</h2>

      <input
        type="number"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />

      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(Number(e.target.value))}
      />

      <h3>Diện tích: {area}</h3>
    </div>
  );
};

export default CalculatorArea;
