function Bg() {
  return (
    <div className="relative size-full" data-name="BG">
      <div className="absolute bg-white inset-0" data-name="BG" />
    </div>
  );
}

export default function Bg1() {
  return (
    <div className="relative size-full" data-name="BG">
      <Bg />
    </div>
  );
}