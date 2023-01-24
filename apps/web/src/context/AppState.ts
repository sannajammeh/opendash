import { Workspace } from "db";
import { proxy, useSnapshot } from "valtio";

interface AppState {
  workspaceId: Workspace["id"] | null;
}

export const appState = proxy<AppState>({
  workspaceId: null,
});

export const useAppState = () => useSnapshot(appState);

export const useWorkspaceId = () => useAppState().workspaceId;
