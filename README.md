## GraphQL Taiwan Meetup01

A demo project for dataloader with graphql server

![GraphQL Taiwan](http://i.imgur.com/NULoFfw.jpg)

- [slide](https://hackmd.io/p/Syk9o9xuZ#/)

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
        name
      }
    }
  }
}
```
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
            posts {
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
