export default function Preview() {
  return (
    <div className="w-full h-full mt-4 flex flex-col gap-3 items-center justify-center">
        <h1 className="font-bold underline text-xl">Preview</h1>
      <video width="70%" height="200" autoPlay loop muted>
        <source src="/preview.mp4" type="video/mp4" />
        Your browser does not support to play this video!
      </video>
    </div>
  );
}
