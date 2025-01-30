import { useContext } from "react";
import { NumberContext } from "../../Hooks/NumberContext";
import {
  calculateNFibonacci,
  calculateNPrime,
  calculateTriangularNumber,
} from "../../Common/calculations";
import ResultDisplayer from "./ResultDisplayer";

export default function ResultCalculator() {
  const { number } = useContext(NumberContext);
  const caculatedNSeriesNumber = number
    ? 2 * calculateTriangularNumber(+number + 1) -
      2 * calculateNPrime(number) +
      calculateNFibonacci(+number + 1)
    : 0;
  return (
    <>
      {number && (
        <ResultDisplayer
          originalNumber={number}
          result={caculatedNSeriesNumber}
        />
      )}
      {!number && <div>Please enter a number to calculate</div>}
    </>
  );
}
