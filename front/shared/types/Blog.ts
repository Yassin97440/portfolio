interface BlogSeries {
    name: string
    episode: number
}

interface BlogPost {
    author?: {
      name: string
      avatar?: string
    }
    body?: any
    date: string
    description: string
    id?: string
    image?: string
    path: string
    seo?: any
    title: string
    tags?: string[]
    series?: BlogSeries
    related?: string[]
}

export type { BlogPost, BlogSeries }