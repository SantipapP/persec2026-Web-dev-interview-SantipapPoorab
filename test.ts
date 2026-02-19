interface User {
  id: number;
  name: string;
}

const greeting = (user: User): string => {
  return `สวัสดีครับคุณ ${user.name}!`;
};

console.log(greeting({ id: 1, name: "Gemini" }));