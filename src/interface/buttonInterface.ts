export interface IButton {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  className: string;
}
