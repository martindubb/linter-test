const greet=require('./file1');
test('greets the world',()=>{
expect(greet("World")).toBe("Hello, World!");
});