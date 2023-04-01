import './styles.module.css';

export default function Button({ type, text }) {
  console.log(type);
  return <button className={type}>{text}</button>;
}
