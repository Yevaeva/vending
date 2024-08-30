declare module '*.svg' {
    import { FC, SVGProps } from 'react'
    const content: FC<SVGProps<SVGElement>>
    export default content
}

declare module '*.svg?url' {
    const content: any
    export default content
}

declare module '*.jsx.svg' {
    import { FunctionComponent, SVGProps } from 'react';

    const svg: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
    export default svg;
}

declare module '*.svg' {
    const src: string;
    export default src;
}