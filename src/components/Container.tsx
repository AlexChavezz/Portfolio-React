import { ReactElement } from "react";

interface ContainerProps {
    children: ReactElement | ReactElement[],
    className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <section 
            className={ className? "container " + className : "container" }
        >
            {children}
        </section>
    );
}