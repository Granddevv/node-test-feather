const data = {
  name: "Data",
  items: [
    { id: 1, name: "Item 1", score: 30 },
    { id: 2, name: "Item 2", score: 50 },
    { id: 3, name: "Item 3", score: 20 },
    { id: 4, name: "Item 4", score: 20 },
    { id: 5, name: "Item 5", score: 30 },
    { id: 6, name: "Item 6", score: 20 },
  ],
};

function getStatsFromData(data) {
  const { items } = data,
    result = {};
  items.forEach((item) => {
    if (result[item.score]) {
      const index = result[item.score].findIndex(
        (resultItem) => resultItem.id < item.id
      );
      result[item.score].splice(index, 0, { id: item.id, name: item.name });
    } else {
      result[item.score] = [{ id: item.id, name: item.name }];
    }
  });

  return result;
}

const result = getStatsFromData(data);
console.log("result ---", result);
