function SnackList() {
  const snackList = [
    { name: ' Hamburger', rank: 5 },
    { name: ' Dannish with a cup of coffee', rank: 4 },
    { name: ' Veggie omlette with a cup of coffee', rank: 3 },
    { name: ' Warm Chicken salad', rank: 2 },
    { name: ' Avocado toast with a cup of coffee', rank: 1 },
  ];
  const sortedSnacks = snackList.toSorted((a, b) => a.rank - b.rank);
  return (
    <div>
      <ul>
        {sortedSnacks.map((snackItem) => (
          <li key={snackItem.name}>
            {snackItem.rank}.{snackItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SnackList;
