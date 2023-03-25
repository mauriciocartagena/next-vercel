
import { FC, PropsWithChildren } from 'react';

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,233,0,0.1)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
