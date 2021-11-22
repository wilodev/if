import React from "react";
import { ItemLink } from "@/utils/ItemLink";
type TItemMenu = {
  link: string;
  text: string;
};
function ItemMenu({ link, text }: TItemMenu) {
  return (
    <ItemLink href={link} exact className="text-gray-200  hover:text-gray-400">
      {text}
    </ItemLink>
  );
}

export { ItemMenu };
