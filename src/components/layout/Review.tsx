import CurvedInput from "../CurvedInput.jsx";

export default function ReviewDisclaimer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center p-12 gap-4">
        <h2 className="text-2xl font-bold underline">
          Wanna give out a review
        </h2>
        <p>
          We currently have no reviews. We want to hear what you want to say,
          email at
        </p>
        <CurvedInput
          placeholder="aurora.reviews@protonmail.com"
          buttonText=":)"
          bend={28}
          height={64}
          width={450}
          className=""
        />
      </div>
    </>
  );
}
