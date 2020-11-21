export function Input(props) {
  const { label, type, value, onInput } = props;

  return (
    <label>
      {label.toUpperCase()}
      <br />
      <input type={type || "text"} value={value} onInput={onInput} />
    </label>
  );
}
