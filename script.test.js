const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cheesepuf.com',
  'disney.com',
  'dogpictures.com'
]

it('it is a silly test', () => {
  expect('Hello').toBe('Hello');
  //googleSearch('testtest', dbMock);
});

it('is searching google', () => {
  expect(googleSearch('testtest', dbMock)).toEqual([])
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com'])
})