import '@emotion/react'

declare module '@emotion/react' {
  type Color = {
    primary: string;
  };
  
  export interface Theme  {
    color: Color;
    icons: {
      team: FC<any>
    }
  }
}