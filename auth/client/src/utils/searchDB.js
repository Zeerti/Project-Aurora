// searchAllData returns an array of matching datasets
// will return an array with error objects if there are any issues.
// Error objects have an "Error" attribute with the message

import databaseKeys from "./databaseKeys";

export const searchAllData = async (userInput, searchableData) => {
  console.warn("starting search...");
  let date = new Date();
  let time = date.getTime();
  let matched = [];
  let keys = [];

  let _searchableData = JSON.parse(searchableData);

  Object.keys(databaseKeys).forEach((keyset) => {
    keys.push(Object.keys(databaseKeys[keyset]));
  });

  // Validate inputs are there
  if (userInput === null || userInput === undefined || userInput === "") {
    matched.push({ error: "User input missing" });
    return matched;
  }
  if (
    _searchableData === {} ||
    _searchableData === undefined ||
    Object.keys(_searchableData).length <= 0
  ) {
    matched.push({ error: "Failed to load data to search against." });
    return matched;
  }

  // perform search via regular expression
  // TODO: Regular Expression needs to be cleaned
  let matchedData = _searchableData.filter((data) => {
    const regex = new RegExp(userInput, "gi");
    let matched_obj = false;
    // Data is a concept object
    keys.forEach((obj) => {
      matched_obj = false;
      obj.forEach((key) => {
        if (!matched_obj) {
          if (data[key] && data[key].match(regex) === null) {
            return;
          } else if (data[key] && data[key].match(regex) !== null) {
            console.log(key);
            matched.push(data);
            matched_obj = true;
            return;
          }
        }
      });
    });
  });

  if (matchedData === null || matchedData === undefined) {
    matched.push({ error: "No matches found" });
    return;
  }

  let date2 = new Date();
  let time2 = date2.getTime();
  console.log(`Search took ${(time2 - time) / 1000} seconds to complete`);
  return matched;
};

export default searchAllData;
