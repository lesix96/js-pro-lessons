import LinksComponentUI from "../LinksComponentUI/LinksComponentUI";
import LoadingHOC from "../../../HOC/LoadingHOC/LoadingHOC";

export const LinksComponent = LoadingHOC('data')(LinksComponentUI)
