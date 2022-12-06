import { defineStore } from "pinia";

export const usePublicAPIsStore = defineStore("publicapis", {
  state: () => {
    return {
      list: []
    };
  },
  actions: {
    fetchPublicAPIs() {
      return fetch("https://api.publicapis.org/entries")
        .then((response) => response.json())
        .then((data) => {
          this.list = data.entries.slice(0, 500);
        });
    }
  },
  getters: {
    getPublicAPIs() {
      if (!this.list.length) {
        this.fetchPublicAPIs().then(() => {
          return this.list;
        });
      }

      return this.list;
    }
  }
});
