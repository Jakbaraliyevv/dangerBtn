import React from "react";

function Button({ children, type, danger }) {
  // Bu burinchi usul
  // Bu button uchun
  //   const borderColor = danger
  //     ? "border-red-500 text-[red]"
  //     : "border-blue-500 text-blue-500  ";
  //   const primaryStyle =
  //     type === "primary"
  //       ? "bg-blue-500 text-white"
  //       : " border-blue-500 text-blue-500 ";

  //   // Bu button uchun

  //   return (
  //     <button
  //       className={`m-[100px] w-[100px] h-[30px] rounded-md border-2 outline-none ${primaryStyle} ${borderColor}`}
  //     >
  //       {children}
  //     </button>
  //   );

  //   Bu ikkinchi usul
  const styles = `w-[100px] h-[30px] rounded-md border-2 outline-none ${
    danger ? "border-red-500 text-[red]" : "border-blue-500 text-blue-500"
  } ${
    type === "primary"
      ? "bg-blue-500 text-white"
      : " border-blue-500 text-blue-500 "
  }`;

  return <button className={styles}> {children}</button>;
}

export default Button;
