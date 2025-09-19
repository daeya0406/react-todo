import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");

  const submit = () => {
    const text = value.trim();
    if (!text) return;
    onAdd(text);
    setValue("");
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="할 일 입력"
      />
      <button type="button" onClick={submit}>
        추가
      </button>
    </div>
  );
}
