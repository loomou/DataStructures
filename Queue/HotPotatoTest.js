const names = ['John', 'Jack', 'Camile', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
  console.log(`${name}在击鼓传花游戏中淘汰。`);
});

console.log(`胜利者：${result.winner}`);
