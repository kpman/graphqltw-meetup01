## GraphQL Taiwan Meetup01

A demo project for dataloader with graphql server

## example query
```
{
  getAuthor(id: 3) {
    id
    name
    posts {
      id
      text
      author {
        id
        name
        posts {
          id
          title
          text
          author {
            id
            posts{
              id
              title
              text
            }
          }
        }
      }
    }
  }
}
```

## License

MIT © [Daniel Tseng](https://github.com/kpman)
