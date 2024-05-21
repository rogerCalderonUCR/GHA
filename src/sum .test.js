const sum = require("./sum");

test("adds 1 + 2 expect return 3", () =>{
    expect(sum(1,2)).toBe(3);
});