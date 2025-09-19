export default function TodoItem({ text, done, onToggle, onDelete }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={done} onChange={onToggle} />
        <span style={{ opacity: done ? 0.5 : 1 }}>{text}</span>
      </label>
      <button type="button" onClick={onDelete}>
        삭제
      </button>
    </li>
  );
}
