

const Button: React.FC<{ children?: React.ReactNode; className?: string; }> = ({ children, className }) => {
    return (
        <>
            {
                children && (
                <span className={`material-symbols-rounded ${className}`}>
                    {children}
                </span> 
                )
            }
        </>
    )
}

export default Button