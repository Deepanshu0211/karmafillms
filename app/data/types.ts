export interface Project {
    title: string
    image: string
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
  