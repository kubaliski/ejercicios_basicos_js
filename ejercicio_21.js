const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

  const adultos = [];
  const menores = [];

  for (const user of users) {
      if (user.years >= 18) {
          adultos.push(user.name);
      } else {
          menores.push(user.name);
      }
  }

  console.log('Usuarios mayores de edad:', adultos.join(', '));
  console.log('Usuarios menores de edad:', menores.join(', '));