// searchAllData returns an array of matching datasets
// will return an array with error objects if there are any issues.
// Error objects have an "Error" attribute with the message

// TODO: EXPLORE ASYNC WITH SEARCH FEATURE
import databaseKeys from "./databaseKeys";

export const searchAllData = (userInput, searchableData) => {
  let matched = [];
  let keys = [];

  let _searchableData = JSON.parse(searchableData);

  console.log(typeof searchableData);

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
    // Data is a concept object
    keys.forEach((obj) => {
      obj.forEach((key) => {
        if (data[key] && data[key].match(regex) === null) {
          // do nothing
        } else if (data[key] && data[key].match(regex) !== null) {
          matched.push(data);
        }
      });
    });
  });

  if (matchedData === null || matchedData === undefined) {
    matched.push({ error: "No matches found" });
  }

  console.log(matched);
  return matched;
};

export default searchAllData;
