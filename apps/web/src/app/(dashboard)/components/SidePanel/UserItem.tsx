"use client";

import {
  AppBar,
  DropdownMenu,
  IconButton,
  Separator,
  Text,
} from "@opendash/ui";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { useUser } from "src/context/AuthContext";
import { auth } from "src/lib/auth";

const UserItem = () => {
  const user = useUser();

  return (
    <>
      <Separator size={0} />
      <AppBar size="lg" as="div">
        {user && (
          <>
            <img
              className="w-8 h-8 rounded-full"
              src={`https://api.dicebear.com/5.x/initials/svg?seed=${user?.email}&size=40&fontFamily=sans-serif,Arial&chars=1&fontWeight=600`}
              alt="avatar"
            />

            <Text className="capitalize">
              {user.name ? user.name : user.email.split("@")[0]}
            </Text>

            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <IconButton className="ml-auto">
                  <FiSettings />
                </IconButton>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>Profile</DropdownMenu.Item>
                <DropdownMenu.Item>Settings</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item onClick={() => auth.signOut()}>
                  <FiLogOut className="mr-1" /> Logout
                </DropdownMenu.Item>
                <DropdownMenu.Arrow />
              </DropdownMenu.Content>
            </DropdownMenu>
          </>
        )}
      </AppBar>
    </>
  );
};

export default UserItem;
