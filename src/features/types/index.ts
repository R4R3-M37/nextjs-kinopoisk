export interface Root {
	uiState: UiStateRoot
}

interface UiStateRoot {
	sidebar: UiStateRootSidebar
	searchMenu: UiStateRootSearchMenu
	theme: UiStateRootTheme
}

export interface UiStateRootSidebar {
	sidebarActive: boolean
}

export interface UiStateRootSearchMenu {
	searchMenuActive: boolean
	searchModalMenuActive: boolean
}

interface UiStateRootTheme {
	theme: null | string
}
