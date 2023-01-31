// Remove "use client" when https://github.com/radix-ui/icons/pull/145 is merged
import Link from "next/link";
import { FiHome, FiPlus, FiUser } from "react-icons/fi";
import { classed, Flex, Separator, Spacer, Text } from "@opendash/ui";
import PanelActions from "./PanelActions";
import WorkspaceSelector from "./WorkspaceSelector";
import UserItem from "./UserItem";
import { SiOpslevel } from "react-icons/si";

const PanelSection = classed("section", "px-3");

const SidePanel = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Flex
        className="min-h-[46px] border-b slate-border px-3"
        variant="horizontal"
        gap={2}
      >
        <SiOpslevel size="24px" />

        <Text size="5" weight="medium">
          Opendash
        </Text>
      </Flex>
      <Spacer size="3" />
      <PanelSection>
        <div className="h-[46px] flex items-center">
          <WorkspaceSelector />
        </div>
        <Nav>
          <NavLink href="/">
            <FiHome /> Home
          </NavLink>
          <NavLink href="/">
            <FiUser /> Members
          </NavLink>
          <NavItem>
            <FiPlus /> New
          </NavItem>
        </Nav>
      </PanelSection>

      <Separator size="3" />
      <PanelSection>
        <PanelActions />
      </PanelSection>
      <div className="mt-auto">
        <UserItem />
      </div>
    </div>
  );
};

export default SidePanel;

const Nav = classed("nav", "grid grid-cols-1 gap-1");
const NavItem = classed(
  "button",
  "py-1 px-2 text-sm rounded flex items-center gap-2",
  "hover:bg-radix-slate3"
);
const NavLink = classed(Link, NavItem);
