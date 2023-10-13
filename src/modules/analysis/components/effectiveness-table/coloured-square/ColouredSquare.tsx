import './ColouredSquare.scss';

export function ColouredSquare({ color }: { color: string | undefined }) {
  return (
    <div
      className="square"
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
}
