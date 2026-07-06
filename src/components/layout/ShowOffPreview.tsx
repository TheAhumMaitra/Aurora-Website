export default function Preview() {
  return (
    <div className="w-full mt-4 flex flex-col items-center gap-3">
      <h1 className="text-xl font-bold underline">Preview</h1>

      <video
        className="w-full max-w-4xl rounded-lg shadow-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/preview.mp4" type="video/mp4" />
        Your browser does not support this video.
      </video>
    </div>
  );
}