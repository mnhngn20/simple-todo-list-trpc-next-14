interface SpinnerProps {
  size?: number;
  color?: string;
}

export default function Spinner({ size = 24, color = "#fff" }: SpinnerProps) {
  return (
    <span
      className="loader"
      style={{
        width: size,
        height: size,
        borderColor: color,
        borderBottomColor: "transparent",
      }}
    />
  );
}
