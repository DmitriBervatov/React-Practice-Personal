import Button from "@/components/Button";
import Card from "@/components/Card";
import Modal4 from "@/components/Modal4";
import { ButtonProps, CardProps, ModalProps } from "./component-types";

export type ComponentConfig =
  | { type: "button"; props: ButtonProps }
  | { type: "card"; props: CardProps }
  | { type: "modal"; props: ModalProps };

function ComponentFactory(config: ComponentConfig) {
  switch (config.type) {
    case "button":
      return <Button {...config.props} />;
    case "card":
      return <Card {...config.props} />;
    case "modal":
      return <Modal4 {...config.props} />;

    default:
      throw new Error(`Unknown component type`);
  }
}

export default ComponentFactory;
