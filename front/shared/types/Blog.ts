interface BlogPost {
    author: {
      name: string
      avatar: string | undefined
    }
    body: any
    date: string
    description: string
    id: string
    image: string | undefined
    path: string
    seo: any
    title: string
    tags: string[]
}

export type { BlogPost }