import React from "react";
import { Menu } from "antd";
import { registerComponent } from "../../blockStore";
interface MenuItem {
  title: string;
}
interface MenuItemData {
  title: string;
  children?: MenuItemData[];
}

interface MenuProps {
  mode: "horizontal" | "vertical" | "vertical-left" | "vertical-right" | "inline";
  dataSource: MenuItemData[];
}

export const NavMenu: React.FC<MenuProps> = (props) => {
  const { dataSource } = props;
  return (
    <Menu>
      {dataSource.map((item) => (
        <MenuItem {...item} />
      ))}
    </Menu>
  );
};

interface MenuItemProps {
  title: string;
  dataSource?: MenuItemProps[];
}

function MenuItem(props: MenuItemProps) {
  const { dataSource, title } = props;
  if (dataSource) {
    return (
      <Menu.SubMenu>
        {dataSource.map((data) => (
          <MenuItem {...data} />
        ))}
      </Menu.SubMenu>
    );
  } else {
    return <Menu.Item title={title} />;
  }
}
registerComponent({
  name: "NavMenu",
})(NavMenu);
