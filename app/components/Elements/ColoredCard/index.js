import styles from './styles.module.css';

export default function ColoredCard({ description, title }) {
  return (
    <div
      className={`${styles.container} col-span-4 flex flex-col items-center px-16 py-20 rounded`}
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
