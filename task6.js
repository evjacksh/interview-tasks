// Обойти дерево и собрать сумму всех значений

const tree = {
    value: 1,
    children: [
     {
      value: 2,
      children: [
        { value: 4 },
        { value: 5 },
      ]
     },
     {
      value: 3,
      children: [
        { value: 6 },
        { value: 7 },
      ]
     }
    ]
  };

  const countAll = (obj) => {

  }

  console.log(countAll(tree));