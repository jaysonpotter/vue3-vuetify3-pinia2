import { mapStores, mapState } from "pinia";
import { usePublicAPIsStore } from "../modules/publicapis";

export const publicAPIsStores = {
  ...mapStores(usePublicAPIsStore)
};

export const publicAPIsState = {
  ...mapState(usePublicAPIsStore, ["list", "getUniversities"])
};
