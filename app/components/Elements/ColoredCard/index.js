export default function ColoredCard({
  description,
  firstColor,
  secondColor,
  title
}) {
  return (
    <div
      className={`col-span-4 flex flex-col items-center justify-center px-16 py-20 rounded`}
      style={{
        background: `linear-gradient(265deg, ${firstColor} 0%, ${secondColor} 100%)`
      }}
    >
      <h1 className="font-serif font-semibold mb-6 text-white text-3xl text-center">
        {title}
      </h1>
      <p className="text-white text-center">{description}</p>
      <button
        className="bg-white font-bold mt-6 py-3 text-sm text-dark-blue rounded w-2/3"
        type="button"
      >
        Contrate Agora
      </button>
    </div>
  );
}
