//#region Import
import navLinks, { type NestedNavLink } from "@/next.navlinks"
//#endregion

export const servicesNestedLinks = (navLinks.find(({ key }) => key === "services") as NestedNavLink)?.links
