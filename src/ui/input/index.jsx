function Input({ type, danger, placeholder = "" }) {
  const plasholeder__color = danger
    ? "placeholder-red-500"
    : "placeholder-blue-500";

  const styles = `pl-1 w-[200px] h-[30px] rounded-md border-2 outline-none ${
    danger ? "border-red-500 text-red-500 " : "border-blue-500 text-blue-500"
  } ${plasholeder__color}`;

  return <input placeholder={placeholder} type={type} className={styles} />;
}

export default Input;
