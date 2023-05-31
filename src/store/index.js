import { createStore } from "vuex";
import apiService from "../services/apiService";
import { ElMessageBox } from "element-plus";

export default function (/* { ssrContext } */) {
  const store = createStore({
    state() {
      return {
        searchResults: {
          choices: [],
        },
        loading: false,
        lang: "english", // default language is English
      };
    },
    mutations: {
      setSearchResults(state, results) {
        // Check if 'qualities-properties' exists in results
        if (
          !Object.prototype.hasOwnProperty.call(results, "qualities-properties")
        ) {
          // If it does not exist, copy it from state.searchResults
          results["qualities-properties"] =
            state.searchResults["qualities-properties"];
        }

        state.searchResults = results;
      },
      startLoading(state) {
        // Add this mutation
        state.loading = true;
      },
      endLoading(state) {
        // Add this mutation
        state.loading = false;
      },
      setLanguage(state, lang) {
        // Add this mutation to change the language
        state.lang = lang;
      },
    },
    actions: {
      async fetchSearchResults({ commit, state }, payload) {
        try {
          commit("startLoading"); // Start loading before the API request
          payload.language = state.lang;
          const response = await apiService.searchItems(payload);
          let results;
          try {
            results = JSON.parse(response);
          } catch (e) {
            console.error("Error parsing response:", e);
            results = response; // Use the original response if parsing fails
          }
          commit("setSearchResults", results);
        } catch (error) {
          console.error("Error fetching search results:", error);
        } finally {
          commit("endLoading"); // End loading after the API request and committing the results or catching an error
        }
      },
      async fetchRefinedSearchResults({ commit, state }, queryObject) {
        try {
          commit("startLoading"); // Start loading before the API request
          queryObject.language = state.lang;
          const response = await apiService.refineSearchItems(queryObject);
          let results;
          try {
            results = JSON.parse(response);
          } catch (e) {
            console.error("Error parsing refined search response:", e);
            results = response; // Use the original response if parsing fails
          }
          commit("setSearchResults", results);
        } catch (error) {
          console.error("Error refining search results:", error);
        } finally {
          commit("endLoading"); // End loading after the API request and committing the results or catching an error
        }
      },
      async askQuestion({ commit, state }, queryObject) {
        try {
          commit("startLoading"); // Start loading before the API request
          queryObject.language = state.lang;
          const response = await apiService.askItemDetails(queryObject);
          let results;
          try {
            results = JSON.parse(response);
          } catch (e) {
            console.error("Error parsing ask question response:", e);
            results = response; // Use the original response if parsing fails
          }
          ElMessageBox.alert(results["answer"], "I'm Back", {
            // if you want to disable its autofocus
            // autofocus: false,
            confirmButtonText: "OK",
            // callback: (action) => {  // Remove type annotation here
            //   ElMessage({
            //     type: 'info',
            //     message: `action: ${action}`,
            //   })
            // },
          });
        } catch (error) {
          console.error("Error ask question results:", error);
        } finally {
          commit("endLoading"); // End loading after the API request and committing the results or catching an error
        }
      },
    },
  });

  return store;
}
