export interface Project {
    title: string
    image: string
    video?: string
    youtube?: string
    file?: string
  }
  
  export interface CategoryContent {
    title: string
   
    projects: Project[]
  }
  
  export interface Category {
    id: string
    title: string
  
    image: string
    content: CategoryContent
  }
  