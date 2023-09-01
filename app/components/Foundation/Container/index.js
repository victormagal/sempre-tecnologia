export default function Container({ bgColor, children, newClasses }) {
  return (
    <section style={{ background: bgColor ? bgColor : 'transparent' }}>
      <div
        className={`container grid lg:grid-cols-12 grid-cols-4 gap-6 mx-auto px-4 ${
          newClasses && newClasses
        }`}
      >
        {children}
      </div>
    </section>
  );
}
